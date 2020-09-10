import React, { useState } from "react";

import Button from "./components/Button";
import Output from "./components/Output";
import Title from "./components/Title";

const expensiveReverseString = (str) => {
  console.log(`expensive calculation: ${str}!`);
  return str ? str.split("").reverse().join("") : "";
};

function Counter() {
  const [refreshTimes, setRefreshTimes] = useState(0);
  const pathname = window.location.pathname;
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
      <Title>Get the length of URL pathname I</Title>
      <Counter />
    </div>
  );
}
