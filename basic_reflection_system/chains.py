from langchain_core.prompts import ChatPromptTemplate,MessagesPlaceholder
from langchain_google_genai import ChatGoogleGenerativeAI

generation_prompt=ChatPromptTemplate.from_messages(
    [
        (
            "system",
            "You are a twitter techie influencer assistant. You are very good at writing excellent twitter posts."
            "Generate the best twitter post possible for the user's request."
            "If the user provides critique, respond with a revised version of your previous attempts."
        ),
        MessagesPlaceholder(variable_name="messages"),

    ]
)

reflection_prompt=ChatPromptTemplate.from_messages(
    [
        (
            "system",
            "You are a viral twitter techie influencer grading a tweet.Generate critique and recommendations for user's tweet."
            "Always provide detailed recommendations and suggestions for improvement,including requests for length, virality, style. etc."
        ),
        MessagesPlaceholder(variable_name="messages"),
    ]
)

llm=ChatGoogleGenerativeAI(model="gemini-2.0-flash")
generation_chain=generation_prompt|llm
reflection_chain=reflection_prompt|llm