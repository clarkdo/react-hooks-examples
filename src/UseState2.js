import React, { useState } from "react";

import Button from "./components/Button";
import Input from "./components/Input";
import Output from "./components/Output";
import RendereringTimes from "./components/RendereringTimes";
import Title from "./components/Title";

// Mock async calculation
const calculateTextLength = (text) => {
  return new Promise((resolve) => {
    resolve(text ? text.length : 0);
  });
};

function Counter() {
  // Input text value and length
  const [input, setInput] = useState({ value: "", length: 0 });
  const { value, length } = input;

  return (
    <div>
      <Output>Text: {value}</Output>
      <Output>Text length: {length}</Output>
      <RendereringTimes />
      <Input type="text" id="text" />
      <Button
        onClick={() => {
          const value = document.getElementById("text").value;
          calculateTextLength(value).then((newLength) => {
            setInput({ value, length: newLength });
          });
        }}
      >
        Get length
      </Button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Title>Get text length II</Title>
      <Counter />
    </div>
  );
}
