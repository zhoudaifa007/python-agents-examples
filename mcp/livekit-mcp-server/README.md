# LiveKit MCP Tools

A collection of tools for managing LiveKit rooms, participants, tokens, and chat functionality using the MCP (Model Calling Protocol) framework.

## Overview

This package provides a FastMCP server with tools for:

- Generating LiveKit access tokens
- Listing and managing rooms
- Tracking participants
- Sending chat messages to rooms
- Creating join links for LiveKit rooms

## Requirements

- Python 3.10+
- LiveKit server access
- API key and secret for LiveKit

## Installation

```bash
pip install livekit-mcp
```

## Environment Setup

Create a `.env` file with your LiveKit credentials:

```
LIVEKIT_API_KEY=your_api_key
LIVEKIT_API_SECRET=your_api_secret
LIVEKIT_URL=wss://your-livekit-instance.com
```

## Available Tools

### Token Generation

Generate access tokens for LiveKit participants:

```python
token = generate_token(identity="user123", name="John Doe", room="my-room")
```

### Room Management

List all available rooms:

```python
rooms = list_rooms()
```

Delete a room:

```python
delete_room(room="my-room")
```

### Participant Management

List all participants in a room:

```python
participants = list_participants(room="my-room")
```

### Chat Functionality

Send chat messages to all participants or specific users:

```python
# Send to all participants
send_chat(room="my-room", message="Hello everyone!", sender="System")

# Send to specific participants
send_chat(room="my-room", message="Private message", sender="Admin", recipients=["user123"])
```

### Join Links

Generate a join link for participants:

```python
join_link = generate_join_link(room="my-room", identity="user123", name="John Doe")
```

## Running the Server

```bash
python -m livekit_mcp.server
```

## License

MIT
