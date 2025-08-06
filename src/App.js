// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import WebDevelopment from "./Pages/Solutions/WebDevelopment";
import AppDevelopment from "./Pages/Solutions/AppDevelopment";

import HelpCenter from "./Pages/Resources/HelpCenter";
import Contact from "./Pages/Contact";
import "./App.css";
import FooterSection from "./Pages/Footer";
import OurWork from "./Pages/OurWork";
import PricingCard from "./Pages/Pricing";
import Solution from "./Pages/Solution";
import Blog from "./Pages/Blog";
import BlogDetail from "./Components/BlogDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
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
          <Route path="/work" element={<OurWork />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/pricing" element={<PricingCard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/resources/help-center" element={<HelpCenter />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <FooterSection />
    </Router>
  );
}

export default App;
