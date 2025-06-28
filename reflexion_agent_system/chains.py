from langchain.prompts import ChatPromptTemplate,MessagesPlaceholder
import datetime

actor_prompt_template=ChatPromptTemplate.from_messages(
    [
        (
            "system",
            """yor are an expert ai researcher.
            current time:{time}
            1:{first_instruction}
            2: Reflect and critique your answer. Be severe to maximize improvements.
            3: After the reflection **list 1-3 Search queries separate** for
            researching imrovements. Do not include them inside the reflection.
            """,
        ),
        MessagesPlaceholder(variable_name="messages"),
        (
                "system","Answer the user's question above using the required tools and instructions."
        ),
    ]
)