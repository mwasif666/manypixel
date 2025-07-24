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

            {/* Resources Dropdown */}
            <div
              className={`nav-item dropdown ${
                activeDropdown === "resources" ? "active" : ""
              }`}
              onMouseEnter={() => setActiveDropdown("resources")}
              onMouseLeave={() =>
                activeDropdown === "resources" && setActiveDropdown(null)
              }
            >
              <button
                className="nav-link dropdown-toggle"
                onClick={() => toggleDropdown("resources")}
              >
                Resources
                <svg className="dropdown-icon" viewBox="0 0 20 20" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.3928 12.8243C10.1759 13.0586 9.82412 13.0586 9.60716 12.8243L5.16272 8.02426C4.94576 7.78995 4.94576 7.41005 5.16272 7.17574C5.37968 6.94142 5.73143 6.94142 5.94839 7.17574L10 11.5515L14.0516 7.17574C14.2686 6.94142 14.6203 6.94142 14.8373 7.17574C15.0542 7.41005 15.0542 7.78995 14.8373 8.02426L10.3928 12.8243Z"
                    fill="currentColor"
                  />
                </svg>
              </button>

              <div className="dropdown-menu resources-dropdown">
                <Link
                  to="/gallery"
                  className="dropdown-item"
                  onClick={closeAllDropdowns}
                >
                  <div className="dropdown-icon-wrapper">
                    <img
                      src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/648b2a8c9dd9c46ab6c307b6_gift%202.svg"
                      alt=""
                    />
                  </div>
                  <div className="dropdown-text">Free Illustrations</div>
                </Link>

                <Link to="/guides" className="dropdown-item">
                  <div className="dropdown-icon-wrapper">
                    <img
                      src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/648b2a8cb0cf3d4fc63462c4_guidebook%201.svg"
                      loading="lazy"
                      alt=""
                      className="navbar_dropdown_image second"
                    />
                  </div>
                  <div className="dropdown-text">Guides</div>
                </Link>

                <Link to="/blog" className="dropdown-item">
                  <div className="dropdown-icon-wrapper">
                    <img
                      src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/648b2a8c560905923d286fea_communication%201.svg"
                      loading="lazy"
                      alt=""
                      className="navbar_dropdown_image second"
                    />
                  </div>
                  <div className="navbar_dropdown_text_wrapper">
                    <div className="navbar_dropdown_text">Design blog</div>
                  </div>
                  <div className="navbar_dropdown_bg"></div>
                </Link>

                <Link to="/case-studies" className="dropdown-item">
                  <div className="dropdown-icon-wrapper">
                    <img
                      src="https://cdn.prod.website-files.com/63a9cb71c629474d4ae334b9/648b2a8cc5af8e24a6fee940_case%201.svg"
                      loading="lazy"
                      alt=""
                      className="navbar_dropdown_image second"
                    />
                  </div>
                  <div className="navbar_dropdown_text_wrapper">
                    <div className="navbar_dropdown_text">CASE STUDIES</div>
                  </div>
                  <div className="navbar_dropdown_bg"></div>
                </Link>
              </div>
            </div>
          </div>

          <div className="navbar-buttons">
            <a
              href="https://app.manypixels.co/signin"
              className="button text-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              SIGN IN
            </a>
            <a
              href="https://app.manypixels.co/onboard"
              className="button secondary-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
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
