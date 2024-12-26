import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./Components/Home";
import About from "./Components/About";
import MainLayout from "./MainLayout/MainLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
