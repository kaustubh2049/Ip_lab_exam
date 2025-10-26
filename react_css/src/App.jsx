import React from "react";
import "./styles.css"; // External CSS

function App() {
  // Internal CSS (JavaScript object)
  const internalStyle = {
    color: "blue",
    backgroundColor: "#f0f0f0",
    padding: "10px",
    borderRadius: "5px",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Inline CSS */}
      <h1 style={{ color: "green" }}>Inline CSS Example</h1>

      {/* Internal CSS */}
      <p style={internalStyle}>This paragraph uses internal CSS.</p>

      {/* External CSS */}
      <div className="external-box">This box uses external CSS.</div>
    </div>
  );
}

export default App;
