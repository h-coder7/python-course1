from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import os
from dotenv import load_dotenv
import google.generativeai as genai

# Load environment variables
load_dotenv()

# Get API Key from .env
api_key = os.getenv("GEMINI_API_KEY") or os.getenv("API_KEY")

if not api_key:
    raise ValueError("API Key is missing! Please set GEMINI_API_KEY in your .env file.")

print("API Key loaded successfully!")

# Configure Gemini AI
genai.configure(api_key=api_key)

# Load model (using gemini-2.5-flash as gemini-1.5-flash is not supported)
model = genai.GenerativeModel("gemini-2.5-flash")


app = FastAPI()

# Enable CORS for frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Server is running 🚀"}


# Request model
class ChatRequest(BaseModel):
    message: str


# AI Chat endpoint
@app.post("/chat")
def chat(data: ChatRequest):

    response = model.generate_content(data.message)

    return {
        "reply": response.text
    }