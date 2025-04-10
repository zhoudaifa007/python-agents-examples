import logging

from dotenv import load_dotenv
from livekit.agents import JobContext, WorkerOptions, cli
from livekit.agents.llm import function_tool
from livekit.agents.voice import Agent, AgentSession
from livekit.plugins import cartesia, deepgram, openai, silero
from livekit.plugins import noise_cancellation

from utils import load_prompt

logger = logging.getLogger("medical-office-triage")
logger.setLevel(logging.INFO)

load_dotenv()

class TriageAgent(Agent):
    def __init__(self) -> None:
        super().__init__(
            instructions=load_prompt('triage_prompt.yaml'),
            stt=deepgram.STT(),
            llm=openai.LLM(model="gpt-4o-mini"),
            tts=cartesia.TTS(),
            vad=silero.VAD.load()
        )
    
    async def on_enter(self):
        self.session.generate_reply()

    @function_tool
    async def transfer_to_support(self):
        await self.session.say("I'll transfer you to our Patient Support team who can help with your medical services request.")
        await self.session.replace_agent(SupportAgent())
        return True

    @function_tool
    async def transfer_to_billing(self):
        await self.session.say("I'll transfer you to our Medical Billing department who can assist with your insurance and payment questions.")
        await self.session.replace_agent(BillingAgent())
        return True


class SupportAgent(Agent):
    def __init__(self) -> None:
        super().__init__(
            instructions=load_prompt('support_prompt.yaml'),
            stt=deepgram.STT(),
            llm=openai.LLM(model="gpt-4o-mini"),
            tts=cartesia.TTS(),
            vad=silero.VAD.load()
        )
    
    async def on_enter(self):
        self.session.generate_reply()

    @function_tool
    async def transfer_to_triage(self):
        await self.session.say("I'll transfer you back to our Medical Office Triage agent who can better direct your inquiry.")
        await self.session.replace_agent(TriageAgent())
        return True

    @function_tool
    async def transfer_to_billing(self):
        await self.session.say("I'll transfer you to our Medical Billing department for assistance with your insurance and payment questions.")
        await self.session.replace_agent(BillingAgent())
        return True


class BillingAgent(Agent):
    def __init__(self) -> None:
        super().__init__(
            instructions=load_prompt('billing_prompt.yaml'),
            stt=deepgram.STT(),
            llm=openai.LLM(model="gpt-4o-mini"),
            tts=cartesia.TTS(),
            vad=silero.VAD.load()
        )
    
    async def on_enter(self):
        self.session.generate_reply()

    @function_tool
    async def transfer_to_triage(self):
        await self.session.say("I'll transfer you back to our Medical Office Triage agent who can better direct your inquiry.")
        await self.session.replace_agent(TriageAgent())
        return True

    @function_tool
    async def transfer_to_support(self):
        await self.session.say("I'll transfer you to our Patient Support team who can help with your medical services request.")
        await self.session.replace_agent(SupportAgent())
        return True


async def entrypoint(ctx: JobContext):
    await ctx.connect()

    session = AgentSession()

    await session.start(
        agent=TriageAgent(),  # Start with the Medical Office Triage agent
        room=ctx.room,
        noise_cancellation=noise_cancellation.BVC(),
    )

if __name__ == "__main__":
    cli.run_app(WorkerOptions(entrypoint_fnc=entrypoint))