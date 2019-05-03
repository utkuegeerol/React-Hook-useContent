import React from "react";
import Display from "./Display";
import JediContext from "./context";

const App = () => {
  return (
    <JediContext.Provider value={"Luke"}>
      <Display />
    </JediContext.Provider>
  );
};

export default App;
