const sampleRequetPayload={
    "model":"gemini-2.0-flash",
    "messages":[
        {
            "role":"user",
            "content":"Tell me about France?"
        }
    ],
    "tools":[
        {
            "type":"function",
            "description":"Infromation about country",
            "parameters":{
                "type":"object",
                "properties":{
                    "name":{
                        "type":"string",
                        "description":"Name of the country"
                    },
                    "capital":{
                        "type":"string",
                        "description":"Capital city of the country"
                    },
                    "language":{
                        "type":"string",
                        "description":"language spoken in the country"
                    }
                },
                "required":[
                    "country_name",
                    "capital_city",
                    "population"
                ]
            }
        }
    ],
    "tool_choice":"function",
    "function":{
        "name":"Country"
    }
}