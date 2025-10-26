import React from "react";
import Counter from "./counter.jsx";
function App() {
  return (
    <div
      style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}
    >
      <h1>REACT PROP AND STATE DEMO</h1>
      <Counter initialCount={5} />
    </div>
  );
}

export default App;
