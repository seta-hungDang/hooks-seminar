import React, { useState, useEffect } from "react";
import "./App.css";
import { useDidMount } from "./useDidMount";

function App() {
  const [value, setValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [status, setStatus] = useState("");

  useDidMount(() => {
    setStatus("Mount");
  });

  useEffect(() => {
    setStatus("Update input");
  }, [value]);

  useEffect(() => {
    setStatus("Update submit");
  }, [isSubmitted]);

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

      <div className="status">{status}</div>
    </div>
  );
}

export default App;
