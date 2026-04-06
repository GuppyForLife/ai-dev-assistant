import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleOnClick = async () => {
    if (!input.trim()) {
      setResponse("There is no input");
    } else {
      setResponse("Thinking...");
      setIsDisabled(true);

      try {
        const response = await fetch("http://localhost:3000/prompt", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: input }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setIsDisabled(false);
        setResponse(result.response);
      } catch (error) {
        setIsDisabled(false);
        setResponse(`Fetch error: ${error}`);
      }
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="title">AI Dev Assistant</h1>
      <div className="text-area-div">
        <textarea
          id="inputBox"
          name="inputBox"
          rows="10"
          value={input}
          onChange={handleInputChange}
          placeholder="Ask me anything..."
        />
        <button onClick={handleOnClick} type="submit" disabled={isDisabled}>
          {isDisabled ? "Thinking..." : "Submit"}
        </button>
      </div>
      <div style={{ marginTop: "3rem" }}>
        <label htmlFor="responseSection">Response:</label>
        <section id="responseSection">
          <pre>{response}</pre>
        </section>
      </div>
    </div>
  );
}

export default App;
