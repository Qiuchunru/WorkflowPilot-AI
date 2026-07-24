
"""
WorkflowPilot AI Prompt Templates

Contains structured prompts for
IBM Granite / Large Language Models.
"""




def build_workflow_prompt(
        project,
        team,
        deadline,
        constraints
):


    prompt = f"""
You are an AI workflow planning assistant
for modern organizations.


Analyze the following project information.


Project:

{project}


Team:

{team}


Deadline:

{deadline}


Constraints:

{constraints}



Generate:


1. Project phases

2. Task breakdown

3. Team coordination suggestions

4. Timeline recommendation

5. Risk analysis

6. Process improvement ideas



Provide a clear and actionable workflow plan.
"""


    return prompt





def build_decision_prompt(
        problem
):


    prompt = f"""
You are an AI decision-support assistant.


Analyze the following workplace problem.


Problem:

{problem}



Provide:


1. Possible causes

2. Impact analysis

3. Recommended actions

4. Automation opportunities

5. Expected outcomes



Give practical recommendations
for improving business operations.
"""


    return prompt
