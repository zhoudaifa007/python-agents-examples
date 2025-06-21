## 这是一个使用函数调用的基础示例
## 要测试这个函数，你可以让代理打印到控制台！

import asyncio
import logging
from pathlib import Path
from dotenv import load_dotenv
from livekit import rtc
from livekit.agents import JobContext, WorkerOptions, cli, get_job_context
from livekit.agents.llm import function_tool, ImageContent, ChatContext, ChatMessage
from livekit.agents.voice import Agent, AgentSession, RunContext
from livekit.plugins import deepgram, openai, silero, rime

# 设置日志记录器
logger = logging.getLogger("vision-agent")
logger.setLevel(logging.INFO)

# 加载环境变量
load_dotenv(dotenv_path=Path(__file__).parent.parent / '.env')

class VisionAgent(Agent):
    """具有视觉能力的语音代理
    可以接收和处理用户的视频流，实现视觉对话功能
    """
    def __init__(self) -> None:
        # 初始化视频相关的成员变量
        self._latest_frame = None      # 存储最新的视频帧
        self._video_stream = None      # 视频流对象
        self._tasks = []               # 存储异步任务列表
        
        super().__init__(
            instructions="""
                您是一个具有视觉能力的语音助手。
                您可以通过用户的摄像头看到用户向您展示的内容。
                请不要使用任何无法发音的字符。
            """,
            stt=deepgram.STT(),                                    # 语音转文字服务
            llm=openai.LLM.with_x_ai(model="grok-2-vision", tool_choice=None),  # 使用支持视觉的 Grok-2 模型
            tts=rime.TTS(),                                        # 文字转语音服务
            vad=silero.VAD.load()                                  # 语音活动检测
        )

    async def on_enter(self):
        """
        当代理被激活时调用的方法
        负责设置视频流监听和处理
        """
        # 获取当前房间上下文
        room = get_job_context().room

        # 查找远程参与者的第一个视频轨道（如果存在）
        if room.remote_participants:
            # 获取第一个远程参与者
            remote_participant = list(room.remote_participants.values())[0]
            
            # 查找该参与者的所有视频轨道
            video_tracks = [
                publication.track
                for publication in list(remote_participant.track_publications.values())
                if publication.track and publication.track.kind == rtc.TrackKind.KIND_VIDEO
            ]
            
            # 如果找到视频轨道，创建视频流
            if video_tracks:
                self._create_video_stream(video_tracks[0])

        # 监听新的视频轨道订阅事件
        @room.on("track_subscribed")
        def on_track_subscribed(track: rtc.Track, publication: rtc.RemoteTrackPublication, participant: rtc.RemoteParticipant):
            """
            当新的轨道被订阅时的回调函数
            如果订阅的是视频轨道，则创建视频流
            """
            if track.kind == rtc.TrackKind.KIND_VIDEO:
                self._create_video_stream(track)

    async def on_user_turn_completed(self, turn_ctx: ChatContext, new_message: ChatMessage) -> None:
        """
        当用户完成一轮对话时调用的方法
        将最新的视频帧添加到新消息中，供 LLM 分析
        
        Args:
            turn_ctx: 对话上下文
            new_message: 新的聊天消息
        """
        # 如果有最新的视频帧，将其添加到新消息中
        if self._latest_frame:
            # 将图像内容添加到消息中，让 LLM 能够"看到"用户展示的内容
            new_message.content.append(ImageContent(image=self._latest_frame))
            # 清空最新帧，避免重复使用
            self._latest_frame = None

    def _create_video_stream(self, track: rtc.Track):
        """
        创建视频流来接收和处理视频帧
        
        Args:
            track: 视频轨道对象
        """
        # 关闭任何现有的视频流（我们一次只需要一个）
        if self._video_stream is not None:
            self._video_stream.close()

        # 创建一个新的视频流来接收帧
        self._video_stream = rtc.VideoStream(track)
        
        async def read_stream():
            """
            异步读取视频流的内部函数
            持续接收视频帧并更新最新帧
            """
            async for event in self._video_stream:
                # 存储最新的帧供后续使用
                self._latest_frame = event.frame

        # 创建异步任务并管理任务生命周期
        task = asyncio.create_task(read_stream())
        # 当任务完成时，从任务列表中移除
        task.add_done_callback(lambda t: self._tasks.remove(t))
        # 将任务添加到任务列表中
        self._tasks.append(task)

async def entrypoint(ctx: JobContext):
    """
    应用程序的主入口函数
    负责初始化连接、创建会话和启动代理
    
    Args:
        ctx: 作业上下文，包含房间、连接等系统信息
    """
    # 连接到 LiveKit 房间
    await ctx.connect()

    # 创建代理会话
    session = AgentSession()

    # 启动会话，使用 VisionAgent
    await session.start(
        agent=VisionAgent(),  # 使用具有视觉能力的代理
        room=ctx.room         # 指定房间
    )

if __name__ == "__main__":
    # 当直接运行此脚本时，启动视觉代理应用
    # 使用 LiveKit CLI 工具运行应用
    cli.run_app(WorkerOptions(entrypoint_fnc=entrypoint))