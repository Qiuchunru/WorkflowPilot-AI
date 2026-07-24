import { useState } from "react";
import axios from "axios";


function App() {


  const [project, setProject] = useState("");
  const [team, setTeam] = useState("");
  const [deadline, setDeadline] = useState("");
  const [constraints, setConstraints] = useState("");

  const [result, setResult] = useState("");

  const [loading, setLoading] = useState(false);



  async function generateWorkflow() {


    try {

      setLoading(true);


      const response = await axios.post(

        "http://localhost:8000/workflow/generate",

        {

          project: project,

          team: team,

          deadline: deadline,

          constraints: constraints

        }

      );


      setResult(
        response.data.workflow
      );


    } catch (error) {


      setResult(
        "Unable to connect to WorkflowPilot AI backend."
      );


    }


    setLoading(false);

  }




  return (

    <div

      style={{

        maxWidth: "900px",

        margin: "auto",

        padding: "40px",

        fontFamily: "Arial"

      }}

    >


      <h1>
        🤖 WorkflowPilot AI
      </h1>


      <h3>
        Intelligent workflow automation and decision support assistant
      </h3>


      <hr />



      <h2>
        Project Information
      </h2>



      <label>
        Project Description
      </label>


      <br />


      <textarea

        rows="4"

        style={{

          width: "90%",

          padding: "10px"

        }}

        placeholder="Example: Launch a new e-commerce platform"

        value={project}

        onChange={(e) =>
          setProject(e.target.value)
        }

      />



      <br /><br />



      <label>
        Team Information
      </label>


      <br />


      <textarea

        rows="3"

        style={{

          width: "90%",

          padding: "10px"

        }}

        placeholder="Example: 3 developers, 1 designer, 1 manager"

        value={team}

        onChange={(e) =>
          setTeam(e.target.value)
        }

      />



      <br /><br />



      <label>
        Deadline
      </label>


      <br />


      <input

        style={{

          width: "90%",

          padding: "10px"

        }}

        placeholder="Example: 3 months"

        value={deadline}

        onChange={(e) =>
          setDeadline(e.target.value)
        }

      />



      <br /><br />



      <label>
        Project Constraints
      </label>


      <br />


      <textarea

        rows="4"

        style={{

          width: "90%",

          padding: "10px"

        }}

        placeholder="Example: Limited resources, fast delivery"

        value={constraints}

        onChange={(e) =>
          setConstraints(e.target.value)
        }

      />



      <br /><br />



      <button

        onClick={generateWorkflow}

        style={{

          padding: "12px 25px",

          cursor: "pointer"

        }}

      >

        {

          loading

          ?

          "Generating..."

          :

          "Generate Workflow"

        }


      </button>



      <hr />



      <h2>
        AI Workflow Recommendation
      </h2>



      <pre

        style={{

          background: "#f4f4f4",

          padding: "20px",

          borderRadius: "10px",

          whiteSpace: "pre-wrap"

        }}

      >

        {result}

      </pre>



    </div>

  );

}



export default App;
