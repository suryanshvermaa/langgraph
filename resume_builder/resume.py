from dotenv import load_dotenv
from langchain_core.messages import HumanMessage,AIMessage
from langgraph.graph import END,MessageGraph
from chains import generation_chain,reflection_chain

load_dotenv()

graph=MessageGraph()

REFLECT="reflect"
GENERATE="generate"

def generate_node(state):
    return generation_chain.invoke({
        "messages":state
    })

def reflect_node(state):
    response=reflection_chain.invoke({
        "messages":state
    })
    return [HumanMessage(content=response.content)]

graph.add_node(GENERATE,generate_node)
graph.add_node(REFLECT,reflect_node)
graph.set_entry_point(GENERATE)

def should_continue(state):
    if (len(state) > 4):
        return END
    return REFLECT

graph.add_conditional_edges(GENERATE,should_continue)
graph.add_edge(REFLECT,GENERATE)

app=graph.compile()
# print(app.get_graph().draw_mermaid())
# app.get_graph().print_ascii()

import streamlit as st

st.title("Resume project lines builder")
user_input = st.text_area("Enter your project description:", height=150)

if st.button("Generate"):
    res=app.invoke(HumanMessage(content=user_input))
    last_ai_message = [msg for msg in res if isinstance(msg, AIMessage)][-1]
    result = last_ai_message.content
    st.subheader("Generated Content:")
    st.write(result)