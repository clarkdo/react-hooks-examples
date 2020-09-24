import React, { useEffect, useRef, useState } from "react";

import Button from "./components/Button";
import Output from "./components/Output";
import Title from "./components/Title";

// Hook using useRef to always get latest state value
const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref;
};

function Counter() {
  // Times of clicking on Increment button
  const [clickCount, setClickCount] = useState(1);
  // Times of async requests
  const [requestCount, setRequestCount] = useState(1);
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
        Increment
      </Button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Title>Get the number of clicks and async requests II</Title>
      <Counter />
    </div>
  );
}
