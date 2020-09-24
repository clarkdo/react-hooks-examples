import React, { useState } from "react";

import Button from "./components/Button";
import Output from "./components/Output";
import Title from "./components/Title";

// Mock an expensive calculation method
const expensiveReverseString = (str) => {
  console.log(`expensive calculation: ${str}!`);
  // Reverse give string
  return str ? str.split("").reverse().join("") : "";
};

function Counter() {
  // Times of clicking on refresh button
  const [refreshTimes, setRefreshTimes] = useState(0);
  const pathname = window.location.pathname;
  // Expersive calculation
  const reversedPathname = expensiveReverseString(pathname);

  return (
    <div>
      <Output>Pathname: {pathname}</Output>
      <Output>Reversed: {reversedPathname}</Output>
      <Output>Refreshed times: {refreshTimes}</Output>
      <Button
        onClick={() => {
          setRefreshTimes(refreshTimes + 1);
        }}
      >
        Refresh
      </Button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Title>Get the reversed pathname I</Title>
      <Counter />
    </div>
  );
}
