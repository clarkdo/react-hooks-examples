import React from "react";
import ReactDOM from "react-dom";

import UseCallback1 from "./UseCallback1";
import UseCallback2 from "./UseCallback2";
import UseMemo1 from "./UseMemo1";
import UseMemo2 from "./UseMemo2";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    {/* <UseMemo1 />
    <UseCallback2 />
    <UseMemo1 /> */}
    <UseMemo2 />
  </>,
  rootElement
);
