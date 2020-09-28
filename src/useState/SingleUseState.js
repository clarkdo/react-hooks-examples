import React, { useState } from "react";

import Button from "../components/Button";
import Input from "../components/Input";
import Output from "../components/Output";
import RenderingTimes from "../components/RenderingTimes";
import Title from "../components/Title";

// Mock async calculation
const calculateTextLength = (text) => {
  return new Promise((resolve) => {
    resolve(text ? text.length : 0);
  });
};

function Counter() {
  // Input text value
  const [input, setInput] = useState("");
  // Length of input text
  const [length, setLength] = useState(0);

  return (
    <div>
      <Output>
        Text: {input} , length: {length}
      </Output>
      <RenderingTimes />
      <Input type="text" id="text" />
      <Button
        onClick={() => {
          const value = document.getElementById("text").value;
          calculateTextLength(value).then((newLength) => {
            // setState in async will cause multiple re-renderings
            // 1st re-rendering
            setInput(value);
            // 2nd re-rendering
            setLength(newLength);
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
      <Title>Get text length I</Title>
      <Counter />
    </div>
  );
}
