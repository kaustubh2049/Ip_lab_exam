// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your page components
import Home from "./Home";
import About from "./About";
import Layout from "./Layout";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />      {/* Default page */}
        <Route path="/home" element={<Home />} />        {/* /home */}
        <Route path="/about" element={<About />} />      {/* /about */}
        <Route path="/contact" element={<Contact />} />  {/* /contact */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
