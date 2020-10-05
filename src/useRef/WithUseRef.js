import React, { useEffect, useRef, useState } from "react";

import Button from "../components/Button";
import Output from "../components/Output";
import Title from "../components/Title";

// Hook using useRef to always get latest state value
const usePrevious = (value) => {
  // Basically similar to:
  // const [ref] = useState({ current: undefined });
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref;
};

function Counter() {
  // Times of clicking on button
  const [clickCount, setClickCount] = useState(0);
  // Times of async requests
  const [requestCount, setRequestCount] = useState(0);
  // Latest request count value
  const prevRequestCount = usePrevious(requestCount);

  return (
    <div>
      <Output>You clicked {clickCount} times</Output>
      <Output>You requested {requestCount} times</Output>
      <Button
        onClick={() => {
          setClickCount(clickCount + 1);
          setTimeout(() => {
            setRequestCount(prevRequestCount.current + 1);
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
      <Title>Count clicks and requests with useRef</Title>
      <Counter />
    </div>
  );
}
