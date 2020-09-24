import React, { useState } from "react";

import Button from "./components/Button";
import Output from "./components/Output";
import Title from "./components/Title";

function Counter() {
  // Times of clicking on Increment button
  const [clickCount, setClickCount] = useState(1);
  // Times of ansync requests
  const [requestCount, setRequestCount] = useState(1);

  return (
    <div>
      <Output>You clicked {clickCount} times</Output>
      <Output>You requested {requestCount} times</Output>
      <Button
        onClick={() => {
          setClickCount(clickCount + 1);
          // Mock async request
          setTimeout(() => {
            setRequestCount(requestCount + 1);
          }, 1000);
        }}
      >
        Increment
      </Button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Title>Get the number of clicks and async requests I</Title>
      <Counter />
    </div>
  );
}
