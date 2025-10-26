import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    // Basic validation
    if (name === "") {
      alert("Name cannot be empty!");
      return;
    }

    if (email === "") {
      alert("Email cannot be empty!");
      return;
    }

    if (password.length < 4) {
      alert("Password must be at least 4 characters!");
      return;
    }

    alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);

    // Reset fields
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div style={{ maxWidth: "300px", margin: "auto", padding: "20px" }}>
      <h2>Simple Form</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <button
        onClick={handleClick}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "teal",
          color: "white",
          border: "none",
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
