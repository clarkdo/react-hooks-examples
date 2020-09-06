import React, { useRef, useState } from "react";

import Button from "./components/Button";
import Input from "./components/Input";
import Output from "./components/Output";

const calculateLettersCount = (word) => {
  return new Promise((resolve) => {
    resolve(word ? word.length : 0);
  });
};

function Counter() {
  const [input, setInput] = useState({ value: "", count: 0 });
  const { value, count } = input;
  const renderTimes = useRef(0);

  renderTimes.current = renderTimes.current + 1;
  console.log(`renering counter: input: ${value} count: ${count}  !`);

  return (
    <div>
      <Output>Word: {value}</Output>
      <Output>Letters: {count}</Output>
      <Output>Renderings: {renderTimes.current}</Output>
      <Input type="text" id="word" />
      <Button
        onClick={() => {
          const value = document.getElementById("word").value;
          calculateLettersCount(value).then((count) => {
            setInput({ value, count });
          });
        }}
      >
        Get number
      </Button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Get the number of letters in a word</h1>
      <Counter />
    </div>
  );
}
