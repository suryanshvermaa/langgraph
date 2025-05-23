from langchain_core.prompts import ChatPromptTemplate,MessagesPlaceholder
from langchain_google_genai import ChatGoogleGenerativeAI

generation_prompt=ChatPromptTemplate.from_messages(
    [
        (
            "system",
            "You are the world's top resume-writing specialist, with expertise in crafting bullet points for Software Development Intern roles that maximize ATS (Applicant Tracking System) scores."
            "- Begin with strong action verbs (e.g., implemented, developed, optimized)"
            "- Include measurable impact or metrics wherever possible (e.g., reduced load time by 30%, supported 10k users)"
            "- Use keywords relevant to software development, such as React, REST APIs, CI/CD, Agile, etc."
            "- Highlight technical stack and real-world outcomes"
            "- Are each concise (under 25 words) and ATS-optimized"
            "Output should be bullet points only — no explanations."
            "Note: please attention don't generate more that 4 points. All points should concise to one line."
        ),
        MessagesPlaceholder(variable_name="messages"),

    ]
)

reflection_prompt=ChatPromptTemplate.from_messages(
    [
        (
            "system",
            "You are a resume grader and expert in software development internships."
            "Always provide detailed recommendations and suggestions for improvement, according to ats optimization."
            "Critique the provided bullet points based on the following criteria:"
            "Action-Oriented: Does the line start with a strong, relevant action verb? (e.g., Developed, Implemented, Optimized)"
            "Technical Clarity: Are key technologies clearly mentioned and accurate?"
            "ATS Optimization: Are keywords present that are commonly used in software dev intern job descriptions? (e.g., React, REST APIs, CI/CD, Agile, Git, Docker)"
            "Quantifiable Impact: Does the line include measurable outcomes (e.g., increased efficiency by 25%, supported 10k users)?"
            "Conciseness: Is the bullet point under 25 words and easily skimmable?"
            "Intern-Relevance: Does it showcase beginner-to-intermediate level contributions clearly but impactfully?"
            "No Redundancy: Does each point add unique value rather than repeat earlier content?"
            "Always provide detailed recommendations and suggestions for improvement,including requests for length, virality, style. etc."
            "Note: please attention only 4 points should be there. All points should concise to one line."

        ),
        MessagesPlaceholder(variable_name="messages"),
    ]
)
llm=ChatGoogleGenerativeAI(model="gemini-1.5-pro")
generation_chain=generation_prompt|llm
reflection_chain=reflection_prompt|llm