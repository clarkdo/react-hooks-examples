import React, { useState } from "react";

import Button from "../components/Button";
import Output from "../components/Output";
import Title from "../components/Title";

function Counter() {
  // Times of clicking on Increment button
  const [clickCount, setClickCount] = useState(1);
  // Times of async requests
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
        Click me
      </Button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Title>Count clicks and requests without useRef</Title>
      <Counter />
    </div>
  );
}
