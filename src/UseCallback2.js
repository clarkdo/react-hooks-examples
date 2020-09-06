import React, { useCallback, useEffect, useState } from "react";

import Button from "./components/Button";
import Output from "./components/Output";

function Counter({ onChange }) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    onChange(count);
  }, [count, onChange]);

  return (
    <div>
      <Output>Count: {count}</Output>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </Button>
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
      <h1>Get the number of clicks</h1>
      <Output>Count is : {type}</Output>
      <Counter onChange={onChange} />
    </div>
  );
}
