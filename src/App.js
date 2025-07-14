// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import WebDevelopment from "./Pages/Solutions/WebDevelopment";
import AppDevelopment from "./Pages/Solutions/AppDevelopment";
import Blog from "./Pages/Resources/Blog";
import HelpCenter from "./Pages/Resources/HelpCenter";
import Contact from "./Pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content" style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/solutions/web-development"
            element={<WebDevelopment />}
          />
          <Route
            path="/solutions/app-development"
            element={<AppDevelopment />}
          />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/help-center" element={<HelpCenter />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
