import React from "react";
import ReactDOM from "react-dom";

import UseCallback1 from "./UseCallback1";
import UseCallback2 from "./UseCallback2";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <UseCallback1 />
    {/* <UseCallback2 /> */}
  </React.StrictMode>,
  rootElement
);
