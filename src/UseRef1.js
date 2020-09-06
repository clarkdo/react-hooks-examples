import React, { useState } from "react";

import Button from "./components/Button";
import Output from "./components/Output";

function Counter() {
  const [clickCount, setClickCount] = useState(1);
  const [requestCount, setRequestCount] = useState(1);

  return (
    <div>
      <Output>You clicked {clickCount} times</Output>
      <Output>You requested {requestCount} times</Output>
      <Button
        onClick={() => {
          setClickCount(clickCount + 1);
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
      <h1>Get the number of clicks and async requests</h1>
      <Counter />
    </div>
  );
}
