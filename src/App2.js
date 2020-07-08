import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  function handleLeaveInput() {
    setIsSubmitted(false);
  }

  return (
    <div>
      <div className="input-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            onBlur={handleLeaveInput}
            value={value}
          />
        </form>
      </div>

      <div className={isSubmitted ? "submitted" : "output"}>{value}</div>
    </div>
  );
}

export default App;
