import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <div style={logoStyle}>Innocious Foundation</div>

      {/* Hamburger button */}
      <div style={hamburgerStyle} onClick={toggleMenu}>
        <div style={barStyle}></div>
        <div style={barStyle}></div>
        <div style={barStyle}></div>
      </div>

      {/* Navigation Links */}
      <ul style={{ ...navLinksStyle, display: isOpen ? "flex" : "none" }}>
        <li><Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link className="nav-link" to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
        <li><Link className="nav-link" to="/donations" onClick={() => setIsOpen(false)}>Donations</Link></li>
        <li><Link className="nav-link" to="/beneficiaries" onClick={() => setIsOpen(false)}>Beneficiaries</Link></li>
        <li><Link className="nav-link" to="/volunteers" onClick={() => setIsOpen(false)}>Volunteers</Link></li>
        <li><Link className="nav-link" to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
        <li><Link className="nav-link" to="/register" onClick={() => setIsOpen(false)}>Register</Link></li>
      </ul>
    </nav>
  );
};

// Navbar container
const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "#2b6cb0",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  flexWrap: "wrap",
};

// Logo
const logoStyle = {
  color: "#fff",
  fontWeight: "bold",
  fontSize: "20px",
};

// Hamburger container
const hamburgerStyle = {
  display: "block",
  cursor: "pointer",
  marginLeft: "auto",
};

// Hamburger bars
const barStyle = {
  width: "25px",
  height: "3px",
  backgroundColor: "#fff",
  margin: "4px 0",
};

// Navigation links
const navLinksStyle = {
  listStyle: "none",
  display: "flex",
  gap: "15px",
  margin: 0,
  padding: 0,
  flexDirection: "column",
  width: "100%",
  backgroundColor: "#2b6cb0",
  textAlign: "center",
};

// Link styles (use App.css for hover effect)
export default Navbar;


