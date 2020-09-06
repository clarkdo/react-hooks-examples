import React from "react";
import { Link } from "react-router-dom";

import Button from "./Button";

const NextExmaple = ({ to }) => {
  return (
    <Link to={to} style={{ position: "absolute", bottom: 0, right: 0 }}>
      <Button>Next example</Button>
    </Link>
  );
};

export default NextExmaple;
