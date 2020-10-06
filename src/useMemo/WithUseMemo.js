import React, { useMemo, useState } from "react";

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
  // Add useMemo to avoid duplicate calculation on same pathname
  const reversedPathname = useMemo(() => {
    return expensiveReverseString(pathname);
  }, [pathname]);

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
      <Title>Reverse pathname with useMemo</Title>
      <Pathname />
    </div>
  );
}
