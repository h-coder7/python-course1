from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import os
import json
from dotenv import load_dotenv
import google.generativeai as genai

# Load environment variables
load_dotenv()

# Get API Key from .env
api_key = os.getenv("GEMINI_API_KEY") or os.getenv("API_KEY")

if not api_key:
    raise ValueError("API Key is missing! Please set GEMINI_API_KEY in your .env file.")

print("API Key loaded successfully!")

# Load Swoo Knowledge Base
knowledge_file_path = os.path.join(os.path.dirname(__file__), "swoo_knowledge.json")
try:
    with open(knowledge_file_path, "r", encoding="utf-8") as f:
        swoo_data = json.load(f)
    swoo_context = json.dumps(swoo_data, ensure_ascii=False, indent=2)
except Exception as e:
    print(f"Warning: Could not load swoo_knowledge.json: {e}")
    swoo_context = "No specific catalog data loaded."

system_instruction = f"""
أنت المساعد الذكي الرسمي لمتجر Swoo للإلكترونيات (Swoo Electronics Assistant) 🤖✨.
يجب عليك الإجابة على أسئلة العملاء بلباقة، احترافية وبصيغة ودودة للغاية باللغة العربية (أو بالإنجليزية إذا سأل العميل بالإنجليزية).
استخدم بيانات متجر Swoo وسياساته وقائمة المنتجات المرفقة أدناه للإجابة على أسئلة العميل بدقة تامة.

معلومات وقواعد متجر Swoo:
{swoo_context}

تعليمات هامة للرد:
1. التزم بالأسعار والخصومات والمنتجات الموجودة في قائمة المنتجات أعلاه فقط.
2. إذا سألك العميل عن منتج غير موجود، اعتذر له بلطف وأخبره بأنه غير متوفر حالياً، واقترح عليه منتجاً مشابهاً من القائمة (مثلاً إذا سأل عن هاتف آخر، اعرض عليه الأجهزة اللوحية أو التلفزيونات المتاحة، أو أخبره أنه يمكنه التواصل معنا لتوفيره).
3. عند السؤال عن الشحن والضمان، أجب بدقة بناءً على سياسات المتجر (شحن مجاني فوق 199 دولار وتوصيل في 2-3 أيام عمل، استرجاع خلال 30 يوم وضمان استرداد كامل للأموال).
4. استخدم التعبيرات التفاعلية الودية والإيموجي لتبسيط القراءة (مثل 📦، 🛒، ⚡، 📺، 🤖).
5. نسق إجاباتك بنقاط واضحة وتنسيق markdown مقروء وممتاز عند الضرورة.
"""

# Configure Gemini AI
genai.configure(api_key=api_key)

# Load model with system instruction
model = genai.GenerativeModel(
    "gemini-2.5-flash-lite",
    system_instruction=system_instruction
)


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