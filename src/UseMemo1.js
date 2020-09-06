import React, { useState } from "react";

const calculateLettersCount = (word) => {
  console.log(`expensive calculation: ${word}!`);
  return word ? word.length : 0;
};

function Counter() {
  const [input, setInput] = useState({ value: "" });
  const { value, time } = input;
  const count = calculateLettersCount(value);

  return (
    <div>
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
      <h2>Time: {time && time.toISOString()}</h2>
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
