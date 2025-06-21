import logging
from dataclasses import dataclass, field
from typing import Optional

from dotenv import load_dotenv
from livekit.agents import JobContext, WorkerOptions, cli
from livekit.agents.llm import function_tool
from livekit.agents.voice import Agent, AgentSession, RunContext
from livekit.plugins import cartesia, deepgram, openai, silero
from livekit.plugins import noise_cancellation

from utils import load_prompt

logger = logging.getLogger("medical-office-triage")
logger.setLevel(logging.INFO)

load_dotenv()

@dataclass
class UserData:
    """存储会话期间需要共享的数据和代理"""
    personas: dict[str, Agent] = field(default_factory=dict)  # 存储所有可用的代理，键为代理名称，值为代理实例
    prev_agent: Optional[Agent] = None  # 记录前一个活跃的代理，用于上下文传递
    ctx: Optional[JobContext] = None    # 存储作业上下文，包含房间、连接等信息

    def summarize(self) -> str:
        """返回用户数据的摘要描述，用于日志记录和调试"""
        return "User data: Medical office triage system"

# 定义运行上下文的类型别名，简化代码
RunContext_T = RunContext[UserData]

class BaseAgent(Agent):
    """所有医疗代理的基类，提供共享的基础功能和代理切换机制"""
    
    async def on_enter(self) -> None:
        """
        当代理被激活时自动调用的方法
        负责初始化代理状态、设置房间属性、管理对话历史
        """
        # 获取当前代理的类名，用于日志记录
        agent_name = self.__class__.__name__
        logger.info(f"Entering {agent_name}")

        # 获取用户数据，包含所有代理实例和会话信息
        userdata: UserData = self.session.userdata
        
        # 如果存在房间上下文，设置当前代理的属性标识
        # 这样前端或其他组件可以知道当前活跃的是哪个代理
        if userdata.ctx and userdata.ctx.room:
            await userdata.ctx.room.local_participant.set_attributes({"agent": agent_name})

        # 复制当前聊天上下文，避免直接修改原始数据
        chat_ctx = self.chat_ctx.copy()

        # 如果存在前一个代理，需要处理对话历史的连续性
        if userdata.prev_agent:
            # 从前一个代理的聊天历史中提取相关消息
            # keep_function_call=True 表示保留函数调用记录，这对代理切换很重要
            items_copy = self._truncate_chat_ctx(
                userdata.prev_agent.chat_ctx.items, keep_function_call=True
            )
            
            # 避免重复的消息：检查当前上下文中是否已存在相同的消息ID
            existing_ids = {item.id for item in chat_ctx.items}
            items_copy = [item for item in items_copy if item.id not in existing_ids]
            
            # 将前一个代理的相关历史添加到当前上下文中
            chat_ctx.items.extend(items_copy)

        # 添加系统消息，告诉LLM当前代理的身份和用户数据摘要
        chat_ctx.add_message(
            role="system",
            content=f"You are the {agent_name}. {userdata.summarize()}"
        )
        
        # 更新聊天上下文并生成回复
        await self.update_chat_ctx(chat_ctx)
        self.session.generate_reply()

    def _truncate_chat_ctx(
        self,
        items: list,
        keep_last_n_messages: int = 6,      # 保留最近的消息数量
        keep_system_message: bool = False,   # 是否保留系统消息
        keep_function_call: bool = False,    # 是否保留函数调用记录
    ) -> list:
        """
        智能截断聊天上下文，保留最重要的消息
        避免上下文过长导致性能问题和token消耗过多
        """
        def _valid_item(item) -> bool:
            """判断消息项是否应该被保留"""
            # 如果不保留系统消息，且当前项是系统消息，则过滤掉
            if not keep_system_message and item.type == "message" and item.role == "system":
                return False
            # 如果不保留函数调用，且当前项是函数调用相关，则过滤掉
            if not keep_function_call and item.type in ["function_call", "function_call_output"]:
                return False
            return True

        # 从最新的消息开始，反向遍历所有消息项
        new_items = []
        for item in reversed(items):
            if _valid_item(item):
                new_items.append(item)
            # 达到保留数量限制时停止
            if len(new_items) >= keep_last_n_messages:
                break
        
        # 将消息顺序恢复为时间顺序（从旧到新）
        new_items = new_items[::-1]

        # 清理开头的函数调用记录，确保消息以用户输入开始
        # 这样可以避免上下文以函数调用开始，影响LLM的理解
        while new_items and new_items[0].type in ["function_call", "function_call_output"]:
            new_items.pop(0)

        return new_items

    async def _transfer_to_agent(self, name: str, context: RunContext_T) -> Agent:
        """
        将控制权转移到另一个代理，同时保持上下文连续性
        
        Args:
            name: 目标代理的名称（如 'support', 'billing'）
            context: 当前运行上下文
            
        Returns:
            目标代理实例
        """
        userdata = context.userdata
        current_agent = context.session.current_agent  # 获取当前活跃的代理
        
        # 从注册的代理字典中获取目标代理
        next_agent = userdata.personas[name]
        
        # 将当前代理记录为前一个代理，用于后续的上下文传递
        userdata.prev_agent = current_agent

        return next_agent


class TriageAgent(BaseAgent):
    """医疗办公室分诊代理
    负责初步评估患者需求，确定应该转接到哪个专业部门
    """
    def __init__(self) -> None:
        super().__init__(
            instructions=load_prompt('triage_prompt.yaml'),  # 加载分诊提示词
            stt=deepgram.STT(),                              # 语音转文字服务
            llm=openai.LLM(model="gpt-4o-mini"),            # 语言模型
            tts=cartesia.TTS(),                             # 文字转语音服务
            vad=silero.VAD.load()                           # 语音活动检测
        )

    @function_tool
    async def transfer_to_support(self, context: RunContext_T) -> Agent:
        """
        将患者转移到患者支持部门
        当患者需要医疗服务（如预约、处方续药、医疗建议等）时调用
        """
        await self.session.say("I'll transfer you to our Patient Support team who can help with your medical services request.")
        return await self._transfer_to_agent("support", context)

    @function_tool
    async def transfer_to_billing(self, context: RunContext_T) -> Agent:
        """
        将患者转移到医疗账单部门
        当患者有保险、账单、付款等问题时调用
        """
        await self.session.say("I'll transfer you to our Medical Billing department who can assist with your insurance and payment questions.")
        return await self._transfer_to_agent("billing", context)


class SupportAgent(BaseAgent):
    """患者支持代理
    处理医疗服务的具体需求，如预约安排、处方续药、医疗记录等
    """
    def __init__(self) -> None:
        super().__init__(
            instructions=load_prompt('support_prompt.yaml'),  # 加载支持服务提示词
            stt=deepgram.STT(),
            llm=openai.LLM(model="gpt-4o-mini"),
            tts=cartesia.TTS(),
            vad=silero.VAD.load()
        )

    @function_tool
    async def transfer_to_triage(self, context: RunContext_T) -> Agent:
        """
        将患者转移回分诊代理
        当患者的需求超出支持部门范围，需要重新分诊时调用
        """
        await self.session.say("I'll transfer you back to our Medical Office Triage agent who can better direct your inquiry.")
        return await self._transfer_to_agent("triage", context)

    @function_tool
    async def transfer_to_billing(self, context: RunContext_T) -> Agent:
        """
        将患者转移到医疗账单部门
        当患者在支持部门提到账单相关问题时调用
        """
        await self.session.say("I'll transfer you to our Medical Billing department for assistance with your insurance and payment questions.")
        return await self._transfer_to_agent("billing", context)


class BillingAgent(BaseAgent):
    """医疗账单代理
    处理保险问题、账单查询、付款安排等财务相关事务
    """
    def __init__(self) -> None:
        super().__init__(
            instructions=load_prompt('billing_prompt.yaml'),  # 加载账单服务提示词
            stt=deepgram.STT(),
            llm=openai.LLM(model="gpt-4o-mini"),
            tts=cartesia.TTS(),
            vad=silero.VAD.load()
        )

    @function_tool
    async def transfer_to_triage(self, context: RunContext_T) -> Agent:
        """
        将患者转移回分诊代理
        当患者的需求超出账单部门范围，需要重新分诊时调用
        """
        await self.session.say("I'll transfer you back to our Medical Office Triage agent who can better direct your inquiry.")
        return await self._transfer_to_agent("triage", context)

    @function_tool
    async def transfer_to_support(self, context: RunContext_T) -> Agent:
        """
        将患者转移到患者支持部门
        当患者在账单部门提到医疗服务需求时调用
        """
        await self.session.say("I'll transfer you to our Patient Support team who can help with your medical services request.")
        return await self._transfer_to_agent("support", context)


async def entrypoint(ctx: JobContext):
    """
    医疗办公室分诊系统的主入口函数
    负责初始化所有代理、建立连接、启动会话
    
    Args:
        ctx: 作业上下文，包含房间、连接等系统信息
    """
    # 连接到 LiveKit 房间
    await ctx.connect()

    # 创建用户数据容器，用于在会话期间共享数据
    userdata = UserData(ctx=ctx)
    
    # 初始化三个专业代理
    triage_agent = TriageAgent()      # 分诊代理：负责初步评估和分流
    support_agent = SupportAgent()    # 支持代理：处理医疗服务需求
    billing_agent = BillingAgent()    # 账单代理：处理财务相关问题

    # 将所有代理注册到用户数据中，便于后续的代理切换
    # 使用字典形式，键为代理名称，值为代理实例
    userdata.personas.update({
        "triage": triage_agent,    # 分诊代理
        "support": support_agent,  # 支持代理
        "billing": billing_agent   # 账单代理
    })

    # 创建代理会话，传入用户数据
    session = AgentSession[UserData](userdata=userdata)

    # 启动会话，从分诊代理开始
    # 分诊代理作为系统的入口点，负责初步评估患者需求
    await session.start(
        agent=triage_agent,  # 从分诊代理开始
        room=ctx.room,       # 指定房间
    )

if __name__ == "__main__":
    # 当直接运行此脚本时，启动医疗办公室分诊系统
    # 使用 LiveKit CLI 工具运行应用
    cli.run_app(WorkerOptions(entrypoint_fnc=entrypoint))