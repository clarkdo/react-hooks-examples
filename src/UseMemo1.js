import React, { useState } from "react";
import "./styles.css";

const calculateLettersCount = word => {
  console.log(`expensive calculation: ${word}!`);
  return word ? word.length : 0;
};

function Counter() {
  const [input, setInput] = useState({ value: "", time: new Date() });
  const count = calculateLettersCount(input.value);

  return (
    <div className="App">
      <input type="text" id="word" />{" "}
      <button
        onClick={() => {
          const newInput = {
            value: document.getElementById("word").value,
            time: new Date()
          };
          setInput(newInput);
        }}
      >
        Get number
      </button>
      <h2>Word: {input.value}</h2>
      <h2>Letters: {count}</h2>
      <h2>Update Time: {input.time.toISOString()}</h2>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Without useMemo</h1>
      <Counter />
    </div>
  );
}
