import React, { useState } from "react";
import "./styles.css";

const calculateLettersCount = word => {
  return new Promise(resolve => {
    resolve(word ? word.length : 0);
  });
};

function Counter() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const [time, setTime] = useState();

  console.log(
    `renering counter: input: ${input} count: ${count} time: ${time.getTime()} !`
  );

  return (
    <div>
      <input type="text" id="word" />{" "}
      <button
        onClick={() => {
          const value = document.getElementById("word").value;
          calculateLettersCount(value).then(count => {
            setInput(value);
            setCount(count);
            setTime(new Date());
          });
        }}
      >
        Get number
      </button>
      <h2>Word: {input}</h2>
      <h2>Letters: {count}</h2>
      <h2>Time: {time && time.toISOString()}</h2>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Without merging state</h1>
      <Counter />
    </div>
  );
}
