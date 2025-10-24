import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
       
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
