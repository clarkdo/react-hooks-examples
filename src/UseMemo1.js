import React, { useState } from "react";

import Button from "./components/Button";
import Input from "./components/Input";
import Output from "./components/Output";
import Title from "./components/Title";

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
      <Output>Word: {input.value}</Output>
      <Output>Letters: {count}</Output>
      <Output>Time: {time && time.toISOString()}</Output>
      <Input type="text" id="word" />
      <Button
        onClick={() => {
          const newInput = {
            value: document.getElementById("word").value,
            time: new Date()
          };
          setInput(newInput);
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
