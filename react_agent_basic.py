from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
from langchain.agents import initialize_agent
from langchain_community.tools import TavilySearchResults

load_dotenv()
llm=ChatGoogleGenerativeAI(model="gemini-2.0-flash")

search_tool=TavilySearchResults(search_depth="basic")
agent=initialize_agent(tools=[search_tool],llm=llm,agent="zero-shot-react-description",verbose=True)
agent.invoke("Give me tweet about today's weather in delhi")