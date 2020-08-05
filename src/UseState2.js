import React, { useState } from "react";
import "./styles.css";

const calculateLettersCount = word => {
  return new Promise(resolve => {
    resolve(word ? word.length : 0);
  });
};

function Counter() {
  const [input, setInput] = useState({ value: "", count: 0, time: new Date() });
  const { value, count, time } = input;

  console.log(
    `renering counter: input: ${value} count: ${count} time: ${time.getTime()} !`
  );

  return (
    <div className="App">
      <input type="text" id="word" />{" "}
      <button
        onClick={() => {
          const value = document.getElementById("word").value;
          calculateLettersCount(value).then(count => {
            setInput({
              value,
              count,
              time: new Date()
            });
          });
        }}
      >
        Get number
      </button>
      <h2>Word: {value}</h2>
      <h2>Letters: {count}</h2>
      <h2>Update Time: {time.toISOString()}</h2>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>With merging state</h1>
      <Counter />
    </div>
  );
}
