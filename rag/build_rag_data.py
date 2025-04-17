#!/usr/bin/env python3
import asyncio
import logging
from pathlib import Path
from dotenv import load_dotenv
from rag_db_builder import RAGBuilder

# Configure logging
logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger("build-rag-data")

# Load environment variables
load_dotenv()


async def main() -> None:
    """
    Build the RAG database from the raw data file.

    Usage:
        1. Create a text file with your knowledge base content in 'raw_data.txt'
        2. Run this script to build the RAG database
        3. The database will be created in the 'vdb_data' directory
    """
    # Check if raw_data.txt exists, create a sample if it doesn't
    raw_data_path = Path("raw_data.txt")
    if not raw_data_path.exists():
        logger.info("Creating sample raw_data.txt file")
        with open(raw_data_path, "w") as f:
            f.write("""
LiveKit is a real-time audio and video platform that makes it easy to build applications with real-time communication features.

LiveKit is a self-hosted, open-source platform for real-time communication. It's built with modern languages, modern architectures, modern codecs, all with the developer in mind.

LiveKit provides a complete platform for building applications with real-time features:
1. LiveKit Server: Media server that handles WebRTC connections and SFU functionality
2. Client SDKs: For web, iOS, Android, React Native, Flutter, and more
3. Server SDKs: For all major languages
4. Agent SDK: For building autonomous AI agents with voice capabilities

Some key features of LiveKit include:
- High-quality audio and video with modern codecs
- Scalable SFU architecture for large rooms
- Recording, transcription, and other media processing features
- Low latency, high reliability
- End-to-end encryption options
- Open-source and self-hosted

The Agent SDK helps developers quickly build AI agents that can interact with users through voice. Key Agent features include:
- Voice activity detection
- Automatic speech recognition
- Natural language understanding
- Text-to-speech synthesis
- Function calling capabilities
- RAG (Retrieval Augmented Generation) support for knowledge base integration

With the Agent SDK, developers can create agents that can understand and respond to user speech, execute functions based on user requests, and use knowledge bases to provide accurate information.
            """)

    # Create and build the RAG database
    output_dir = Path("vdb_data")
    output_dir.mkdir(exist_ok=True)

    logger.info("Building RAG database...")
    await RAGBuilder.create_from_file(
        file_path=raw_data_path,
        index_path=output_dir,
        data_path=output_dir / "paragraphs.pkl",
        embeddings_dimension=1536,
    )
    logger.info("RAG database successfully built!")
    logger.info(f"Index saved to: {output_dir}")
    logger.info(f"Data saved to: {output_dir / 'paragraphs.pkl'}")


if __name__ == "__main__":
    asyncio.run(main())
