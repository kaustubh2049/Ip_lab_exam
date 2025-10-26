import React, { useState } from "react";

function Counter({ initialCount }) {
  const [counter, setCounter] = useState(initialCount);

  return (
    <div
      style={{
        backgroundColor: "#ff00d0ff",
        padding: "20px",
        borderRadius: "10px",
        width: "300px",
        margin: "20px auto",
        textAlign: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2>COUNTER COMPONENT</h2>
      <p>
        Initial counter (from prop): <strong>{initialCount}</strong>
      </p>
      <p>
        Current counter (from state): <strong>{counter}</strong>
      </p>
      <button
        onClick={() => setCounter(counter + 1)}
        style={{ padding: "8px 12px", marginRight: "10px" }}
      >
        INCREMENT
      </button>
      <button
        onClick={() => setCounter(counter - 1)}
        style={{ padding: "8px 12px" }}
      >
        DECREMENT
      </button>
    </div>
  );
}

export default Counter;
