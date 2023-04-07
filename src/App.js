import React from "react";
import "./index.css";
import Home from "./routes/Home"
import Projects from "./routes/Projects"
import About from "./routes/About"
import Contact from "./routes/Contact"

import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/portfolio-website" element={<Home />} />
        <Route path="/portfolio-website/projects" element={<Projects />} />
        <Route path="/portfolio-website/about" element={<About />} />
        <Route path="/portfolio-website/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
