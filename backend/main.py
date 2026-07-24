
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from ai import generate_workflow, analyze_decision


app = FastAPI(
    title="WorkflowPilot AI",
    description="AI-powered workflow automation assistant",
    version="1.0"
)


# Allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)



class WorkflowRequest(BaseModel):

    project: str
    team: str
    deadline: str
    constraints: str



class DecisionRequest(BaseModel):

    problem: str




@app.get("/")
def home():

    return {
        "message":
        "WorkflowPilot AI API Running"
    }





@app.post("/workflow/generate")
def workflow_generation(
        request: WorkflowRequest):


    result = generate_workflow(

        request.project,

        request.team,

        request.deadline,

        request.constraints

    )


    return {

        "workflow": result

    }





@app.post("/decision/analyze")
def decision_analysis(
        request: DecisionRequest):


    result = analyze_decision(

        request.problem

    )


    return {

        "analysis": result

    }
