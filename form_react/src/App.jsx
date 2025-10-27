import React from "react";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateform() {
    if (name === "") {
      alert("Name is not complete");
      return;
    }
    if (email === "" || email.indexOf("@") === -1) {
      alert("Email Condition not meet");
      return;
    }
    if (password === "" || password.length < 4) {
      alert("Password Condition not meet");
      return;
    }
    setEmail("");
    setName("");
    setPassword("");
    alert("Registered Successfully");
  }
  return (
    <div>
      <h1>FORM VALIDATION IN REACTJS</h1>
      <input
        type="text"
        placeholder="NAME"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="EMAIL"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="text"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={validateform}>REGISTER!!</button>
    </div>
  );
}
export default App;
