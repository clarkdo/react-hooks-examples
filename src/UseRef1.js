import React, { useState } from "react";
import "./styles.css";

function Counter() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h2>You clicked {count} times</h2>
      <button
        onClick={() => {
          setTimeout(() => {
            setCount(count + 1);
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
