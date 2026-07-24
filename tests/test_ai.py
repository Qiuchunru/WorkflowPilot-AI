from backend.ai import (
    generate_workflow,
    analyze_decision
)



def test_generate_workflow():


    result = generate_workflow(

        "Launch a new e-commerce platform",

        "3 developers and 1 product manager",

        "3 months",

        "Limited resources"

    )


    assert result is not None

    assert "WorkflowPilot AI" in result

    assert "Risk Analysis" in result





def test_analyze_decision():


    result = analyze_decision(

        "The team is missing project deadlines"

    )


    assert result is not None

    assert "Decision Support Analysis" in result

    assert "Recommended Actions" in result
