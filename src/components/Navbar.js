import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Your logo file

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth > 768) setIsMobile(false);
  }, [windowWidth]);

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <div style={logoContainerStyle}>
        <Link to="/">
          <img src={logo} alt="Innocious Foundation Logo" style={{ ...logoStyle, width: windowWidth > 768 ? "180px" : "120px" }} />
        </Link>
      </div>

      {/* Menu */}
      <ul style={windowWidth <= 768 ? (isMobile ? mobileMenuOpenStyle : mobileMenuClosedStyle) : desktopMenuStyle}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/projects" style={linkStyle}>Projects</Link></li>
        <li><Link to="/donations" style={linkStyle}>Donations</Link></li>
        <li><Link to="/beneficiaries" style={linkStyle}>Beneficiaries</Link></li>
        <li><Link to="/volunteers" style={linkStyle}>Volunteers</Link></li>
        <li><Link to="/login" style={linkStyle}>Login</Link></li>
        <li><Link to="/register" style={linkStyle}>Register</Link></li>
      </ul>

      {/* Mobile toggle */}
      {windowWidth <= 768 && (
        <button style={mobileToggleStyle} onClick={() => setIsMobile(!isMobile)}>
          ☰
        </button>
      )}
    </nav>
  );
};

// Styles
const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  position: "sticky",
  top: 0,
  zIndex: 100,
  flexWrap: "wrap",
};

const logoContainerStyle = {
  flex: "0 0 auto", // ensures logo keeps its size
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
  gap: "10px",
  position: "absolute",
  top: "70px",
  left: 0,
  right: 0,
  backgroundColor: "#fff",
  padding: "20px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  transition: "all 0.3s ease-in-out",
};

const mobileMenuClosedStyle = {
  display: "none",
};

const linkStyle = {
  textDecoration: "none",
  color: "#2b6cb0",
  fontWeight: "bold",
};

const mobileToggleStyle = {
  display: "block",
  fontSize: "24px",
  background: "none",
  border: "none",
  cursor: "pointer",
};

export default Navbar;






