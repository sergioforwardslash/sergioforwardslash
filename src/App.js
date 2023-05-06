import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, About, Skills, Work, Contact } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
