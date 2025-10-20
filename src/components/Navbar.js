import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav style={navStyle}>
      <h2 style={{ color: "#2c3e50" }}>Innocious Foundation</h2>
      <ul style={isMobile ? mobileMenuStyle : desktopMenuStyle}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/projects" style={linkStyle}>Projects</Link></li>
        <li><Link to="/donations" style={linkStyle}>Donations</Link></li>
        <li><Link to="/beneficiaries" style={linkStyle}>Beneficiaries</Link></li>
        <li><Link to="/volunteers" style={linkStyle}>Volunteers</Link></li>
        <li><Link to="/login" style={linkStyle}>Login</Link></li>
        <li><Link to="/register" style={linkStyle}>Register</Link></li>
      </ul>
      <button style={mobileToggleStyle} onClick={() => setIsMobile(!isMobile)}>
        ☰
      </button>
    </nav>
  );
};

// Styles
const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "#fff", // white navbar
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  position: "sticky",
  top: 0,
  zIndex: 100,
};

const desktopMenuStyle = {
  display: "flex",
  listStyle: "none",
  gap: "15px",
};

const mobileMenuStyle = {
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
  gap: "10px",
  position: "absolute",
  top: "60px",
  left: 0,
  right: 0,
  backgroundColor: "#fff", // white background for mobile menu
  padding: "20px",
};

const linkStyle = {
  textDecoration: "none",
  color: "#2b6cb0", // dark blue for links
  fontWeight: "bold",
};

const mobileToggleStyle = {
  display: "none",
  fontSize: "24px",
  background: "none",
  border: "none",
  cursor: "pointer",
};

export default Navbar;




