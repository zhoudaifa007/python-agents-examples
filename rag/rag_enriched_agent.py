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
import random
from pathlib import Path
from typing import Literal, Any
from collections.abc import Iterable
from dataclasses import dataclass
from dotenv import load_dotenv
import annoy

from livekit.agents import JobContext, WorkerOptions, cli, ChatContext, ChatMessage
from livekit.agents.voice import Agent, AgentSession
from livekit.plugins import openai, silero, deepgram

# Load environment variables
load_dotenv(dotenv_path=Path(__file__).parent.parent / ".env")

# Configure logging
logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger("rag-agent")

# RAG Index Types and Classes
Metric = Literal["angular", "euclidean", "manhattan", "hamming", "dot"]
ANNOY_FILE = "index.annoy"
METADATA_FILE = "metadata.pkl"


@dataclass
class _FileData:
    f: int
    metric: Metric
    userdata: dict[int, Any]


@dataclass
class Item:
    i: int
    userdata: Any
    vector: list[float]


@dataclass
class QueryResult:
    userdata: Any
    distance: float


class AnnoyIndex:
    def __init__(self, index: annoy.AnnoyIndex, filedata: _FileData) -> None:
        self._index = index
        self._filedata = filedata

    @classmethod
    def load(cls, path: str) -> "AnnoyIndex":
        p = Path(path)
        index_path = p / ANNOY_FILE
        metadata_path = p / METADATA_FILE

        with open(metadata_path, "rb") as f:
            metadata: _FileData = pickle.load(f)

        index = annoy.AnnoyIndex(metadata.f, metadata.metric)
        index.load(str(index_path))
        return cls(index, metadata)

    @property
    def size(self) -> int:
        return self._index.get_n_items()

    def items(self) -> Iterable[Item]:
        for i in range(self._index.get_n_items()):
            item = Item(
                i=i,
                userdata=self._filedata.userdata[i],
                vector=self._index.get_item_vector(i),
            )
            yield item

    def query(
        self, vector: list[float], n: int, search_k: int = -1
    ) -> list[QueryResult]:
        ids = self._index.get_nns_by_vector(
            vector, n, search_k=search_k, include_distances=True
        )
        return [
            QueryResult(userdata=self._filedata.userdata[i], distance=distance)
            for i, distance in zip(*ids)
        ]


class RAGEnrichedAgent(Agent):
    """
    An agent that can answer questions using RAG (Retrieval Augmented Generation).
    """

    def __init__(self) -> None:
        """Initialize the RAG-enabled agent."""
        super().__init__(
            instructions="""
                You are a helpful assistant specializing in knowledge about LiveKit ("live" pronounced as in "live stream").
            """,
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
            self._annoy_index = AnnoyIndex.load(str(self._index_path))
            with open(self._data_path, "rb") as f:
                self._paragraphs_by_uuid = pickle.load(f)
            logger.info("RAG database loaded successfully.")
        except Exception as e:
            logger.error(f"Failed to load RAG database: {e}")

    async def on_user_turn_completed(
        self, turn_ctx: ChatContext, new_message: ChatMessage,
    ) -> None:
        """Called when the user has completed their turn, prior to LLM."""


        try:
            # Generate embeddings for the query
            query_embedding = await openai.create_embeddings(
                input=[new_message.text_content],
                model=self._embeddings_model,
                dimensions=self._embeddings_dimension,
            )

            # Query the index
            results = self._annoy_index.query(query_embedding[0].embedding, n=1)

            if not results:
                return

            # Get the most relevant paragraph
            paragraph = self._paragraphs_by_uuid.get(results[0].userdata, "")

            if not paragraph:
                return
            
            logger.info(f"Looking up information about: {new_message.text_content}, found {paragraph}")

            # Add to the LLM context (for this turn only, won't be persisted to history)
            turn_ctx.add_message(
                role="assistant", 
                content=f"Additional information relevant to the user's next message: {paragraph}"
            )

        except Exception as e:
            logger.error(f"Error during RAG lookup: {e}")

    async def on_enter(self):
        """Called when the agent enters the session."""
        self.session.generate_reply(instructions="Greet the user and offer your assistance with LiveKit.")


async def entrypoint(ctx: JobContext):
    """Main entrypoint for the agent."""
    await ctx.connect()

    session = AgentSession(
        stt=deepgram.STT(),
        llm=openai.LLM(model="gpt-4o"),
        tts=openai.TTS(
            instructions="You are a helpful assistant with a pleasant voice.",
            voice="ash"
        ),
        vad=silero.VAD.load(),
    )

    await session.start(agent=RAGEnrichedAgent(), room=ctx.room)


if __name__ == "__main__":
    cli.run_app(WorkerOptions(entrypoint_fnc=entrypoint))
