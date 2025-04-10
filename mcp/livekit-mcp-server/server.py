# server.py
from mcp.server.fastmcp import FastMCP
from dotenv import load_dotenv
import os
import asyncio
import concurrent.futures
from livekit import api
from livekit.protocol import room as room_proto
from livekit.protocol.models import DataPacket
import json

# Load environment variables
load_dotenv()

# Create an MCP server
mcp = FastMCP("LiveKit MCP")

async def fetch_livekit_rooms():
    """
    List all rooms asynchronously
    """
    lkapi = api.LiveKitAPI()
    rooms_response = await lkapi.room.list_rooms(room_proto.ListRoomsRequest(names=[]))
    return [room.name for room in rooms_response.rooms]

async def delete_livekit_room(room_name: str):
    """
    Delete a room asynchronously
    """
    lkapi = api.LiveKitAPI()
    delete_request = room_proto.DeleteRoomRequest(room=room_name)
    await lkapi.room.delete_room(delete_request)
    return True

async def fetch_room_participants(room_name: str):
    """
    List all participants in a room asynchronously
    """
    lkapi = api.LiveKitAPI()
    list_request = room_proto.ListParticipantsRequest(room=room_name)
    participants_response = await lkapi.room.list_participants(list_request)
    return [
        {
            "identity": participant.identity,
            "name": participant.name,
            "state": participant.state,
            "joined_at": participant.joined_at,
            "metadata": participant.metadata,
            "sid": participant.sid
        }
        for participant in participants_response.participants
    ]

async def send_chat_to_room(room_name: str, message: str, sender_name: str = "System", destination_identities: list = None):
    """
    Send a chat message to a room asynchronously
    """
    lkapi = api.LiveKitAPI()
    
    # Create a chat message payload
    chat_payload = {
        "message": message,
        "sender": sender_name,
        "timestamp": int(asyncio.get_event_loop().time() * 1000)  # Current time in milliseconds
    }
    
    # Convert the payload to JSON and then to bytes
    data = json.dumps(chat_payload).encode('utf-8')
    
    # Create the send data request
    send_request = room_proto.SendDataRequest(
        room=room_name,
        data=data,
        kind=DataPacket.Kind.RELIABLE,  # Use reliable delivery for chat messages
        topic="chat"  # Set the topic to "chat"
    )
    
    # Add destination identities if specified
    if destination_identities:
        send_request.destination_identities.extend(destination_identities)
    
    # Send the data
    await lkapi.room.send_data(send_request)
    return True

@mcp.tool()
def generate_token(identity: str, name: str, room: str) -> str:
    """
    Generate a LiveKit access token
    
    Args:
        identity: Unique identifier for the participant
        name: Display name of the participant
        room: Name of the room to join
        
    Returns:
        JWT token string
    """
    token = api.AccessToken(
        os.getenv('LIVEKIT_API_KEY'), 
        os.getenv('LIVEKIT_API_SECRET')
    ).with_identity(identity) \
     .with_name(name) \
     .with_grants(api.VideoGrants(
        room_join=True,
        room=room,
    ))
    
    return token.to_jwt()

@mcp.tool()
def list_rooms() -> list[str]:
    """
    List all rooms
    """
    # Create a new event loop in a separate thread to avoid conflicts with the running loop
    with concurrent.futures.ThreadPoolExecutor() as executor:
        future = executor.submit(asyncio.run, fetch_livekit_rooms())
        return future.result()

@mcp.tool()
def delete_room(room: str) -> bool:
    """
    Delete a room by name
    
    Args:
        room: Name of the room to delete
        
    Returns:
        True if successful
    """
    # Create a new event loop in a separate thread to avoid conflicts with the running loop
    with concurrent.futures.ThreadPoolExecutor() as executor:
        future = executor.submit(asyncio.run, delete_livekit_room(room))
        return future.result()

@mcp.tool()
def list_participants(room: str) -> list[dict]:
    """
    List all participants in a room
    
    Args:
        room: Name of the room to list participants from
        
    Returns:
        List of participant information dictionaries
    """
    # Create a new event loop in a separate thread to avoid conflicts with the running loop
    with concurrent.futures.ThreadPoolExecutor() as executor:
        future = executor.submit(asyncio.run, fetch_room_participants(room))
        return future.result()

@mcp.tool()
def send_chat(room: str, message: str, sender: str = "System", recipients: list = None) -> bool:
    """
    Send a chat message to a room
    
    Args:
        room: Name of the room to send the message to
        message: The chat message to send
        sender: Name of the sender (default: "System")
        recipients: List of participant identities to send to (default: None, which means all participants)
        
    Returns:
        True if successful
    """
    # Create a new event loop in a separate thread to avoid conflicts with the running loop
    with concurrent.futures.ThreadPoolExecutor() as executor:
        future = executor.submit(asyncio.run, send_chat_to_room(room, message, sender, recipients))
        return future.result()
    
@mcp.tool()
def generate_join_link(room: str, identity: str = "anonymous", name: str = "Anonymous") -> str:
    """
    Generate a LiveKit join link
    
    Args:
        room: Name of the room to join
        identity: Unique identifier for the participant (default: "anonymous")
        name: Display name of the participant (default: "Anonymous")
        
    Returns:
        URL string to join the LiveKit room
    """
    # Generate token for the user
    token = generate_token(identity, name, room)
    
    # Get LiveKit URL from environment variable
    livekit_url = os.getenv('LIVEKIT_URL')
    
    # Create the join URL
    join_url = f"https://meet.livekit.io/custom?liveKitUrl={livekit_url}&token={token}"
    
    return join_url

# Add a dynamic greeting resource
@mcp.resource("greeting://{name}")
def get_greeting(name: str) -> str:
    """Get a personalized greeting"""
    return f"Hello, {name}!"
