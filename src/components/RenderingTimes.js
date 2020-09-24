import React, { useRef } from "react";

import Output from "./Output";

const RenderingTimes = () => {
  const renderTimes = useRef(0);
  renderTimes.current = renderTimes.current + 1;
  return <Output>Rendering times: {renderTimes.current}</Output>;
};

export default RenderingTimes;
