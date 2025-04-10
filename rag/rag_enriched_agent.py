#!/usr/bin/env python3
"""
RAG-enabled voice agent example for LiveKit Agents 1.0

This agent uses the RAG (Retrieval Augmented Generation) plugin to provide
information from a knowledge base when answering user questions.

Before running this agent:
1. Make sure you have your OpenAI API key in a .env file
2. Run build_rag_data.py to build the RAG database
"""

import logging
import pickle
import os
import random
from pathlib import Path
from dotenv import load_dotenv
from livekit.agents import JobContext, WorkerOptions, cli
from livekit.agents.llm import function_tool
from livekit.agents.voice import Agent, AgentSession, RunContext
from livekit.plugins import openai, silero, deepgram, rag

# Load environment variables
load_dotenv(dotenv_path=Path(__file__).parent / '.env')

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger("rag-agent")

class RAGEnabledAgent(Agent):
    """
    An agent that can answer questions using RAG (Retrieval Augmented Generation).
    """
    
    def __init__(self) -> None:
        """Initialize the RAG-enabled agent."""
        super().__init__(
            instructions="""
                You are a helpful assistant with knowledge about LiveKit.
                When users ask questions about LiveKit, use the lookup_info function to find relevant information.
                For other topics, respond based on your general knowledge.
                Keep your responses concise and to the point.
                Don't use unpronounceable characters in your responses since you communicate through voice.
            """,
            stt=deepgram.STT(),
            llm=openai.LLM(model="gpt-4o"),
            tts=openai.TTS(instructions="You are a helpful assistant with a pleasant voice."),
            vad=silero.VAD.load()
        )
        
        # Initialize RAG components
        vdb_dir = Path("vdb_data")
        data_path = vdb_dir / "paragraphs.pkl"
        
        if not vdb_dir.exists() or not data_path.exists():
            logger.warning(
                "RAG database not found. Please run build_rag_data.py first:\n"
                "$ python build_rag_data.py"
            )
            return
        
        # Load RAG index and data
        self._index_path = vdb_dir
        self._data_path = data_path
        self._embeddings_dimension = 1536
        self._embeddings_model = "text-embedding-3-small"
        
        try:
            self._annoy_index = rag.annoy.AnnoyIndex.load(str(self._index_path))
            with open(self._data_path, "rb") as f:
                self._paragraphs_by_uuid = pickle.load(f)
            logger.info("RAG database loaded successfully.")
        except Exception as e:
            logger.error(f"Failed to load RAG database: {e}")
    
    @function_tool
    async def lookup_info(self, context: RunContext, query: str):
        """
        Use this function to look up information using RAG when the user asks a question
        about a topic that might be in our knowledge base.
        
        Args:
            query: The question or topic to look up
        """
        logger.info(f"Looking up information for: {query}")
        
        # Tell the user we're looking things up
        thinking_messages = [
            "Let me look that up...",
            "One moment while I check...",
            "I'll find that information for you...",
            "Just a second while I search...",
            "Looking into that now..."
        ]
        await self.session.say(random.choice(thinking_messages))
        
        try:
            # Generate embeddings for the query
            query_embedding = await openai.create_embeddings(
                input=[query],
                model=self._embeddings_model,
                dimensions=self._embeddings_dimension
            )
            
            # Query the index
            results = self._annoy_index.query(query_embedding[0].embedding, n=1)
            
            if not results:
                return None, "I couldn't find any relevant information about that."
                
            # Get the most relevant paragraph
            paragraph = self._paragraphs_by_uuid.get(results[0].userdata, "")
            
            if not paragraph:
                return None, "I couldn't find any relevant information about that."
            
            # Generate response with context
            context_prompt = f"""
            Question: {query}
            
            Relevant information:
            {paragraph}
            
            Using the relevant information above, please provide a helpful response to the question.
            Keep your response concise and directly answer the question.
            """
            
            response = await self._llm.complete(context_prompt)
            return None, response.text
            
        except Exception as e:
            logger.error(f"Error during RAG lookup: {e}")
            return None, "I encountered an error while trying to look that up."

    async def on_enter(self):
        """Called when the agent enters the session."""
        await self.session.say(
            "Hello! I'm your LiveKit assistant. "
            "I can answer questions about LiveKit or help with general topics. "
            "What would you like to know?"
        )
        self.session.generate_reply()

async def entrypoint(ctx: JobContext):
    """Main entrypoint for the agent."""
    await ctx.connect()

    session = AgentSession()

    await session.start(
        agent=RAGEnabledAgent(),
        room=ctx.room
    )

if __name__ == "__main__":
    cli.run_app(WorkerOptions(entrypoint_fnc=entrypoint)) 