from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
from langchain.agents import initialize_agent,tool
from langchain_community.tools import TavilySearchResults
import datetime
load_dotenv()
llm=ChatGoogleGenerativeAI(model="gemini-2.0-flash")

@tool
def get_system_time(format: str="%Y-%m%d %H:%M:%S"):
    """Returns the current data and time in the specified format"""
    current_time=datetime.datetime.now()
    formated_time=current_time.strftime(format)
    return formated_time

search_tool=TavilySearchResults(search_depth="basic")
agent=initialize_agent(tools=[search_tool,get_system_time],llm=llm,agent="zero-shot-react-description",verbose=True)
agent.invoke("When was spcax last launch and how many days ago that from the instant")