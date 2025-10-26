import React from "react";
import ClassComponents from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

function App() {
  return (
    <div
      style={{
        
        textAlign: "center",
      }}
    >
      <h1>React Component</h1>
      <h2>Functional and Class Components</h2>
      <ClassComponents />
      <FunctionalComponent />
    </div>
  );
}

export default App;
