import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./Components/Home";
import About from "./Components/About";
import MainLayout from "./MainLayout/MainLayout";
import CreateBlog from "./Components/CreateBlog/CreateBlog";
import Projects from "./Components/Projects/Projects";
import Login from "./Components/Pages/Login/Login";
import Register from "../../personal-website/src/Components/Pages/Register/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blogs" element={<CreateBlog />} />
            <Route path="projects" element={<Projects />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
