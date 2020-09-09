import React, { useState } from "react";

import Button from "./components/Button";
import Input from "./components/Input";
import Output from "./components/Output";
import RendereringTimes from "./components/RendereringTimes";
import Title from "./components/Title";

const calculateLettersCount = (word) => {
  return new Promise((resolve) => {
    resolve(word ? word.length : 0);
  });
};

function Counter() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  console.log(`renering counter: input: ${input} count: ${count}  !`);

  return (
    <div>
      <Output>Word: {input}</Output>
      <Output>Letters: {count}</Output>
      <RendereringTimes />
      <Input type="text" id="word" />
      <Button
        onClick={() => {
          const value = document.getElementById("word").value;
          calculateLettersCount(value).then((count) => {
            setInput(value);
            setCount(count);
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
      <Title>Get the number of letters in a word I</Title>
      <Counter />
    </div>
  );
}
