import React, { useContext } from "react";
import JediContext from "./context";

const Display = () => {
  const value = useContext(JediContext);
  return <div>{value}, I am your Father.</div>;
};

export default Display;
