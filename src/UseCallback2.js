import React, { useCallback, useEffect, useState } from "react";

function Counter({ onChange }) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    onChange(count);
  }, [count, onChange]);

  return (
    <div>
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

  const onChange = useCallback((count) => {
    setType(count % 2 ? "odd" : "even");
    console.log(`count is changed to ${count}`);
  }, []);

  return (
    <div className="App">
      <h1>With useCallback</h1>
      <h2>Count is : {type}</h2>
      <Counter onChange={onChange} />
    </div>
  );
}
