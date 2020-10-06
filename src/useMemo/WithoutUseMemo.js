import React, { useState } from "react";

import Button from "../components/Button";
import Output from "../components/Output";
import Title from "../components/Title";

// Mock an expensive calculation method
const expensiveReverseString = (str) => {
  console.log(`expensive calculation: ${str}!`);
  // Reverse give string
  return str ? str.split("").reverse().join("") : "";
};

function Pathname() {
  // Times of Pathname rendered
  const [renderTimes, setRenderTimes] = useState(1);
  const pathname = window.location.pathname;
  // Expensive calculation
  const reversedPathname = expensiveReverseString(pathname);

  return (
    <div>
      <Output>Pathname: {pathname}</Output>
      <Output>Reversed: {reversedPathname}</Output>
      <Output>Rendering times: {renderTimes}</Output>
      <Button
        onClick={() => {
          setRenderTimes(renderTimes + 1);
        }}
      >
        Re-render
      </Button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Title>Reverse pathname without useMemo</Title>
      <Pathname />
    </div>
  );
}
