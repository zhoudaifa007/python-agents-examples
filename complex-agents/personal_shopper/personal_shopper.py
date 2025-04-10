import logging
import os

from dotenv import load_dotenv
from livekit.agents import JobContext, WorkerOptions, cli
from livekit.agents.llm import function_tool
from livekit.agents.voice import Agent, AgentSession
from livekit.plugins import cartesia, deepgram, openai, silero
from livekit.plugins import noise_cancellation

from utils import load_prompt
from database import CustomerDatabase

logger = logging.getLogger("personal-shopper")
logger.setLevel(logging.INFO)

load_dotenv()

# Initialize the customer database
db = CustomerDatabase()

class CustomerContext:
    """Class to store customer information during a call."""
    def __init__(self):
        self.first_name = None
        self.last_name = None
        self.customer_id = None
        self.current_order = None
        
    def is_identified(self):
        return self.first_name is not None and self.last_name is not None
    
    def reset(self):
        self.first_name = None
        self.last_name = None
        self.customer_id = None
        self.current_order = None

# Create a global customer context that will be shared across agents
customer_ctx = CustomerContext()

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
    async def identify_customer(self, first_name: str, last_name: str):
        """
        Identify a customer by their first and last name.
        
        Args:
            first_name: The customer's first name
            last_name: The customer's last name
        """
        global customer_ctx
        customer_ctx.first_name = first_name
        customer_ctx.last_name = last_name
        customer_ctx.customer_id = db.get_or_create_customer(first_name, last_name)
        
        return f"Thank you, {first_name}. I've found your account."

    @function_tool
    async def transfer_to_sales(self):
        # Create a personalized message if customer is identified
        if customer_ctx.is_identified():
            message = f"Thank you, {customer_ctx.first_name}. I'll transfer you to our Sales team who can help you find the perfect product."
        else:
            message = "I'll transfer you to our Sales team who can help you find the perfect product."
        
        await self.session.say(message)
        await self.session.replace_agent(SalesAgent())
        return True

    @function_tool
    async def transfer_to_returns(self):
        # Create a personalized message if customer is identified
        if customer_ctx.is_identified():
            message = f"Thank you, {customer_ctx.first_name}. I'll transfer you to our Returns department who can assist with your return or exchange."
        else:
            message = "I'll transfer you to our Returns department who can assist with your return or exchange."
        
        await self.session.say(message)
        await self.session.replace_agent(ReturnsAgent())
        return True


class SalesAgent(Agent):
    def __init__(self) -> None:
        # Enhance the sales prompt with customer identification instructions
        sales_prompt = load_prompt('sales_prompt.yaml')
        if customer_ctx.is_identified():
            sales_prompt += f"\n\nYou are speaking with {customer_ctx.first_name} {customer_ctx.last_name}."
        else:
            sales_prompt += "\n\nYou should identify the customer using the identify_customer function before completing an order."
        
        super().__init__(
            instructions=sales_prompt,
            stt=deepgram.STT(),
            llm=openai.LLM(model="gpt-4o-mini"),
            tts=cartesia.TTS(),
            vad=silero.VAD.load()
        )

    async def on_enter(self):
        self.session.generate_reply()

    @function_tool
    async def identify_customer(self, first_name: str, last_name: str):
        """
        Identify a customer by their first and last name.
        
        Args:
            first_name: The customer's first name
            last_name: The customer's last name
        """
        global customer_ctx
        customer_ctx.first_name = first_name
        customer_ctx.last_name = last_name
        customer_ctx.customer_id = db.get_or_create_customer(first_name, last_name)
        
        return f"Thank you, {first_name}. I've found your account."

    @function_tool
    async def start_order(self):
        """Start a new order for the customer."""
        global customer_ctx
        if not customer_ctx.is_identified():
            return "Please identify the customer first using the identify_customer function."
        
        customer_ctx.current_order = {
            "items": []
        }
        
        return "I've started a new order for you. What would you like to purchase?"

    @function_tool
    async def add_item_to_order(self, item_name: str, quantity: int, price: float):
        """
        Add an item to the current order.
        
        Args:
            item_name: The name of the item
            quantity: The quantity to purchase
            price: The price per item
        """
        global customer_ctx
        if not customer_ctx.is_identified():
            return "Please identify the customer first using the identify_customer function."
        
        if not customer_ctx.current_order:
            customer_ctx.current_order = {"items": []}
        
        item = {
            "name": item_name,
            "quantity": quantity,
            "price": price
        }
        
        customer_ctx.current_order["items"].append(item)
        
        return f"Added {quantity}x {item_name} to your order."

    @function_tool
    async def complete_order(self):
        """Complete the current order and save it to the database."""
        global customer_ctx
        if not customer_ctx.is_identified():
            return "Please identify the customer first using the identify_customer function."
        
        if not customer_ctx.current_order or not customer_ctx.current_order.get("items"):
            return "There are no items in the current order."
        
        # Calculate order total
        total = sum(item["price"] * item["quantity"] for item in customer_ctx.current_order["items"])
        customer_ctx.current_order["total"] = total
        
        # Save order to database
        order_id = db.add_order(customer_ctx.customer_id, customer_ctx.current_order)
        
        # Create a summary of the order
        summary = f"Order #{order_id} has been completed. Total: ${total:.2f}\n"
        summary += "Items:\n"
        for item in customer_ctx.current_order["items"]:
            summary += f"- {item['quantity']}x {item['name']} (${item['price']} each)\n"
        
        # Reset the current order
        customer_ctx.current_order = None
        
        return summary

    @function_tool
    async def transfer_to_triage(self):
        # Create a personalized message if customer is identified
        if customer_ctx.is_identified():
            message = f"Thank you, {customer_ctx.first_name}. I'll transfer you back to our Triage agent who can better direct your inquiry."
        else:
            message = "I'll transfer you back to our Triage agent who can better direct your inquiry."
        
        await self.session.say(message)
        await self.session.replace_agent(TriageAgent())
        return True

    @function_tool
    async def transfer_to_returns(self):
        # Create a personalized message if customer is identified
        if customer_ctx.is_identified():
            message = f"Thank you, {customer_ctx.first_name}. I'll transfer you to our Returns department for assistance with your return request."
        else:
            message = "I'll transfer you to our Returns department for assistance with your return request."
        
        await self.session.say(message)
        await self.session.replace_agent(ReturnsAgent())
        return True


class ReturnsAgent(Agent):
    def __init__(self) -> None:
        # Enhance the returns prompt with customer identification instructions
        returns_prompt = load_prompt('returns_prompt.yaml')
        if customer_ctx.is_identified():
            returns_prompt += f"\n\nYou are speaking with {customer_ctx.first_name} {customer_ctx.last_name}."
        else:
            returns_prompt += "\n\nYou should identify the customer using the identify_customer function before processing a return."
        
        super().__init__(
            instructions=returns_prompt,
            stt=deepgram.STT(),
            llm=openai.LLM(model="gpt-4o-mini"),
            tts=cartesia.TTS(),
            vad=silero.VAD.load()
        )

    async def on_enter(self):
        self.session.generate_reply()

    @function_tool
    async def identify_customer(self, first_name: str, last_name: str):
        """
        Identify a customer by their first and last name.
        
        Args:
            first_name: The customer's first name
            last_name: The customer's last name
        """
        global customer_ctx
        customer_ctx.first_name = first_name
        customer_ctx.last_name = last_name
        customer_ctx.customer_id = db.get_or_create_customer(first_name, last_name)
        
        return f"Thank you, {first_name}. I've found your account."

    @function_tool
    async def get_order_history(self):
        """Get the order history for the current customer."""
        global customer_ctx
        if not customer_ctx.is_identified():
            return "Please identify the customer first using the identify_customer function."
        
        order_history = db.get_customer_order_history(customer_ctx.first_name, customer_ctx.last_name)
        return order_history

    @function_tool
    async def process_return(self, order_id: int, item_name: str, reason: str):
        """
        Process a return for an item from a specific order.
        
        Args:
            order_id: The ID of the order containing the item to return
            item_name: The name of the item to return
            reason: The reason for the return
        """
        global customer_ctx
        if not customer_ctx.is_identified():
            return "Please identify the customer first using the identify_customer function."
        
        # In a real system, we would update the order in the database
        # For this example, we'll just return a confirmation message
        return f"Return processed for {item_name} from Order #{order_id}. Reason: {reason}. A refund will be issued within 3-5 business days."

    @function_tool
    async def transfer_to_triage(self):
        # Create a personalized message if customer is identified
        if customer_ctx.is_identified():
            message = f"Thank you, {customer_ctx.first_name}. I'll transfer you back to our Triage agent who can better direct your inquiry."
        else:
            message = "I'll transfer you back to our Triage agent who can better direct your inquiry."
        
        await self.session.say(message)
        await self.session.replace_agent(TriageAgent())
        return True

    @function_tool
    async def transfer_to_sales(self):
        # Create a personalized message if customer is identified
        if customer_ctx.is_identified():
            message = f"Thank you, {customer_ctx.first_name}. I'll transfer you to our Sales team who can help you find new products."
        else:
            message = "I'll transfer you to our Sales team who can help you find new products."
        
        await self.session.say(message)
        await self.session.replace_agent(SalesAgent())
        return True


async def entrypoint(ctx: JobContext):
    await ctx.connect()

    session = AgentSession()

    await session.start(
        agent=TriageAgent(),  # Start with the Triage agent
        room=ctx.room
    )

if __name__ == "__main__":
    cli.run_app(WorkerOptions(entrypoint_fnc=entrypoint))
