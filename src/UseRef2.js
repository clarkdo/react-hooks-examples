import React, { useEffect, useRef, useState } from "react";

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref;
};

function Counter() {
  const [count, setCount] = useState(1);
  const prevCountRef = usePrevious(count);

  return (
    <div>
      <h2>You clicked {count} times</h2>
      <button
        onClick={() => {
          setTimeout(() => {
            setCount(prevCountRef.current + 1);
          }, 1000);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Without useRef</h1>
      <Counter />
    </div>
  );
}
