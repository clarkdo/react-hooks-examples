import React, { useEffect, useState } from "react";
import "./styles.css";

function Counter({ onChange }) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    onChange(count);
  }, [count, onChange]);

  return (
    <div className="App">
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default function App() {
  const [type, setType] = useState(false);
  return (
    <div className="App">
      <h1>Without useCallback</h1>
      <h2>Count is : {type}</h2>
      <Counter
        onChange={count => {
          setType(count % 2 ? "odd" : "even");
          console.log(`count is changed to ${count}`);
        }}
      />
    </div>
  );
}
