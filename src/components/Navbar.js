import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Your logo file

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Automatically close mobile menu on desktop
  useEffect(() => {
    if (windowWidth > 768) setIsMobile(false);
  }, [windowWidth]);

  return (
    <nav style={navStyle}>
      {/* Logo on left */}
      <div style={logoContainerStyle}>
        <Link to="/">
          <img
            src={logo}
            alt="Innocious Foundation Logo"
            style={{
              ...logoStyle,
              width: windowWidth > 768 ? "75px" : "60px", // bigger on desktop
            }}
          />
        </Link>
      </div>

      {/* Links */}
      <ul
        style={
          windowWidth <= 768
            ? isMobile
              ? mobileMenuOpenStyle
              : mobileMenuClosedStyle
            : desktopMenuStyle
        }
      >
        <li>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" style={linkStyle}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/donations" style={linkStyle}>
            Donations
          </Link>
        </li>
        <li>
          <Link to="/beneficiaries" style={linkStyle}>
            Beneficiaries
          </Link>
        </li>
        <li>
          <Link to="/volunteers" style={linkStyle}>
            Volunteers
          </Link>
        </li>
        <li>
          <Link to="/login" style={linkStyle}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" style={linkStyle}>
            Register
          </Link>
        </li>
      </ul>

      {/* Mobile menu toggle */}
      {windowWidth <= 768 && (
        <button
          style={mobileToggleStyle}
          onClick={() => setIsMobile(!isMobile)}
        >
          ☰
        </button>
      )}
    </nav>
  );
};

// Navbar styles
const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "#2b6cb0", // blue navbar
  color: "white",
  position: "fixed", // stay on top
  top: 0,
  left: 0,
  right: 0,
  zIndex: 999,
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  height: "70px",
};

const logoContainerStyle = {
  flex: "0 0 auto",
};

const logoStyle = {
  height: "auto",
};

const desktopMenuStyle = {
  display: "flex",
  listStyle: "none",
  gap: "20px",
  alignItems: "center",
};

const mobileMenuOpenStyle = {
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
  gap: "15px",
  position: "absolute",
  top: "70px",
  left: 0,
  right: 0,
  backgroundColor: "#2b6cb0",
  padding: "20px",
  color: "white",
};

const mobileMenuClosedStyle = {
  display: "none",
};

const linkStyle = {
  textDecoration: "none",
  color: "white",
  fontWeight: "bold",
  fontSize: "16px",
};

const mobileToggleStyle = {
  display: "block",
  fontSize: "28px",
  background: "none",
  border: "none",
  color: "white",
  cursor: "pointer",
};

export default Navbar;








