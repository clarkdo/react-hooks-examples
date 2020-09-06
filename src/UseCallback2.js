import React, { useCallback, useEffect, useState } from "react";

import Button from "./components/Button";
import Output from "./components/Output";
import Title from "./components/Title";

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
      <Title>Get the number of clicks</Title>
      <Output>Count is : {type}</Output>
      <Counter onChange={onChange} />
    </div>
  );
}
