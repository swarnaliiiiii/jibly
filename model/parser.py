#importing necessary libraries
from pydantic import BaseModel, Field
from typing import List, Optional
import dotenv

dotenv.load_dotenv()

from langchain_groq import ChatGroq
from langchain.prompts import PromptTemplate
from langchain.chat_models import init_chat_model
from langchain.output_parsers import PydanticOutputParser
from langchain_community.document_loaders import PyPDFLoader

#create class for each main category
class Education(BaseModel):
    university_name: str = Field(..., description="name of the university")
    degree: str = Field(..., description="degree Obtained")
    gpa: Optional[float] = Field(None, ge=0, le=10.0, description="GPA(0-10 scale)")

class Experience(BaseModel):
    company_name: Optional[str] = Field(..., description="name of the company")
    n_years: Optional[int] = Field(..., ge=0, description="number of years worked")
    project_name: Optional[str] = Field(..., description="name of the project")
    project_description: Optional[str] = Field(..., description="description of the project")
    tech_stack: Optional[str] = Field(..., description="tech stack used")

class Resume(BaseModel):
    name: str = Field(..., description="name of the candidate")
    age: Optional[int] = Field(..., ge=18, le=100, description="age of the candidate")
    email: str = Field(..., description="email of the candidate")
    phone_number: str = Field(..., description="phone number of the candidate")
    experience: Optional[List[Experience]] = Field(..., description="experience of the candidate")
    education: Optional[List[Education]]= Field(..., description="education of the candidate")
    languages: Optional[str] = Field(..., description="Languages known")

resume_template = """
You are an AI assistant tasked with extracting structured information from a technical resume.

Extract ONLY the information that's present in the resume. Follow the Resume class structure exactly.

Important: Return valid JSON format. Use null for missing values, not empty strings.

Resume Context:
{resume_text}

Format instructions: {format_instructions}
"""

parser = PydanticOutputParser(pydantic_object=Resume)

prompt_template = PromptTemplate(
    template=resume_template,
    input_variables=["resume_text"],
    partial_variables={"format_instructions": parser.get_format_instructions()}
)

file_path = 'Swarnali-Bhattacharyya-FlowCV-Resume-20250715.pdf'

loader = PyPDFLoader(file_path)

docs = loader.load()

resume_text = "\n".join([doc.page_content for doc in docs])

len(resume_text)

print(resume_text)

# Initialize the model AFTER loading the resume text and confirming everything works
# Use regular model without structured_output to avoid JSON parsing issues
model = ChatGroq(model="llama-3.3-70b-versatile")

prompt = prompt_template.invoke({'resume_text':resume_text})

response = model.invoke(prompt)

# Parse the response using PydanticOutputParser
parsed_response = parser.parse(response.content)

# Convert to dict for JSON output
result = parsed_response.model_dump()

# Print as formatted JSON
import json
print(json.dumps(result, indent=2))