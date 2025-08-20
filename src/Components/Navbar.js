import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className=" container" ref={navbarRef}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeAllDropdowns}>
            <img
              src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/6474920e082d1e98f14610ad_Group%204806.svg"
              alt="Logo"
            />
          </Link>

          <div className={`navbar-menu ${mobileMenuOpen ? "active" : ""}`}>
            {/* Regular Links */}
            <Link
              to="/solution"
              className="nav-item"
              onClick={closeAllDropdowns}
            >
              <span className="nav-link"> Solutions</span>
            </Link>
            <Link to="/work" className="nav-item" onClick={closeAllDropdowns}>
              <span className="nav-link">Our Work</span>
            </Link>

            <Link
              to="/pricing"
              className="nav-item"
              onClick={closeAllDropdowns}
            >
              <span className="nav-link">Pricing</span>
            </Link>
            <Link to="/blog" className="nav-item" onClick={closeAllDropdowns}>
              <span className="nav-link">Design blog</span>
            </Link>

            {/* Resources Dropdown */}
          </div>

          <div className="navbar-buttons">
            <Link to="/signin" className="button text-button">
              SIGN IN
            </Link>
            <Link to="/getstarted" className="button secondary-button">
              Get Started
            </Link>
            <Link
              to="/demo"
              className="button primary-button"
              onClick={closeAllDropdowns}
            >
              Book a Call
            </Link>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`bar ${mobileMenuOpen ? "open" : ""}`}></span>
            <span className={`bar ${mobileMenuOpen ? "open" : ""}`}></span>
            <span className={`bar ${mobileMenuOpen ? "open" : ""}`}></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
