# 🤖 WorkflowPilot AI

AI-powered workflow automation and decision-support assistant built with React, FastAPI, and IBM Granite.

---

# 🌟 Project Overview

Modern teams spend significant time managing repetitive tasks, coordinating workflows, and making operational decisions.

**WorkflowPilot AI** is an AI-powered assistant that helps teams transform disconnected tasks into intelligent, outcome-driven workflows.

The system analyzes project requirements, team information, deadlines, and constraints to generate:

- Project workflows
- Task breakdowns
- Risk analysis
- Decision recommendations
- Process improvement suggestions


This project was created for the:

**IBM AI Builders Challenge - Wildcard Challenge**

Theme:

> Build Intelligent Systems for the Future of Work

---

# 🎯 Selected Challenge Theme

## Wildcard Challenge:
## Build Intelligent Systems for the Future of Work


This project focuses on:

- AI workflow automation
- AI co-workers
- Project planning assistants
- Decision intelligence platforms
- Productivity improvement solutions

---

# ❓ Problem Statement

Organizations often manage projects through disconnected tools and manual processes.

Common challenges include:

- Difficulty organizing complex workflows
- Repetitive project management tasks
- Poor visibility into project risks
- Slow decision-making
- Communication gaps between teams


Teams need intelligent systems that can understand project context and provide actionable recommendations.

---

# 💡 Solution Description

WorkflowPilot AI acts as an AI project assistant.

Users provide:

- Project description
- Team information
- Deadline
- Project constraints


The AI assistant generates:

## Workflow Planning

- Project phases
- Task breakdown
- Development roadmap
- Timeline suggestions


## Decision Support

- Problem analysis
- Possible causes
- Recommended actions
- Automation opportunities


The goal is to help teams work faster and make better decisions.

---

# 🏗️ System Architecture


```
                User

                 |

                 |

          React Frontend

                 |

                 |

          FastAPI Backend

                 |

                 |

        AI Processing Layer

                 |

                 |

          IBM Granite LLM

                 |

                 |

      Workflow Recommendation

                 |

                 |

              User
```


---

# 🤖 AI Approach


WorkflowPilot AI uses:

- Generative AI
- Prompt Engineering
- Large Language Model reasoning


The AI workflow:

```
User Input

↓

Structured Prompt Creation

↓

IBM Granite Model

↓

Workflow Analysis

↓

Decision Recommendation
```


The prompt layer provides structured instructions to improve AI response quality.

---

# 🧠 IBM Granite Integration

The project architecture supports IBM Granite integration.

Current design:

```
User Request

↓

Prompt Engineering Layer

↓

IBM Granite Model

↓

AI Generated Recommendation
```


The AI module contains a dedicated integration layer where IBM Granite API calls can be connected using IBM watsonx.

---

# 🤖 How IBM Bob Was Used


IBM Bob was used as an AI-assisted development tool throughout the project.


Examples:

- Planning application architecture
- Generating project structure
- Assisting FastAPI implementation
- Debugging frontend and backend issues
- Improving documentation
- Refining AI workflow design


IBM Bob helped accelerate the software development process and improve development efficiency.

---

# 🛠️ Technology Stack


## Backend

- Python
- FastAPI
- Pydantic


## Frontend

- React
- Vite
- Axios


## AI

- IBM Granite
- Generative AI
- Prompt Engineering


## Development Tools

- GitHub
- IBM Bob
- VS Code

---

# 📂 Project Structure


```
WorkflowPilot-AI

├── backend
│   ├── main.py
│   ├── ai.py
│   ├── prompts.py
│   ├── requirements.txt
│   └── .env.example
│
├── frontend
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.html
│   └── package.json
│
├── data
│   └── sample_project.txt
│
├── tests
│   └── test_ai.py
│
├── README.md
├── LICENSE
└── .gitignore
```

---

# ▶️ How to Run


## Backend


Navigate:

```bash
cd backend
```


Install dependencies:

```bash
pip install -r requirements.txt
```


Run API:

```bash
uvicorn main:app --reload
```


Backend:

```
http://localhost:8000
```



---

## Frontend


Navigate:

```bash
cd frontend
```


Install packages:

```bash
npm install
```


Start application:

```bash
npm run dev
```

---

# 🧪 Testing


Install pytest:

```bash
pip install pytest
```


Run:

```bash
pytest
```


---

# 📸 Demo


A short demo video will demonstrate:

1. User enters project information
2. AI generates workflow plan
3. AI provides risk analysis
4. AI suggests process improvements


---

# 🚀 Future Improvements


Future versions may include:

- Real IBM Granite API integration
- AI agent workflow execution
- Calendar and task management integration
- Database-based project history
- Enterprise workflow automation
- Multi-agent collaboration


---

# 📜 License


This project is licensed under the MIT License.
