import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>Innocious Foundation</div>
      <ul style={navLinksStyle}>
        <li><Link style={linkStyle} to="/">Home</Link></li>
        <li><Link style={linkStyle} to="/projects">Projects</Link></li>
        <li><Link style={linkStyle} to="/donations">Donations</Link></li>
        <li><Link style={linkStyle} to="/beneficiaries">Beneficiaries</Link></li>
        <li><Link style={linkStyle} to="/volunteers">Volunteers</Link></li>
        <li><Link style={linkStyle} to="/login">Login</Link></li>
        <li><Link style={linkStyle} to="/register">Register</Link></li>
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
  position: "sticky", // Makes navbar stick on top
  top: 0,
  zIndex: 1000,
  flexWrap: "wrap", // For mobile responsiveness
};

// Logo
const logoStyle = {
  color: "#fff",
  fontWeight: "bold",
  fontSize: "20px",
};

// Navigation links container
const navLinksStyle = {
  listStyle: "none",
  display: "flex",
  gap: "15px",
  margin: 0,
  padding: 0,
  flexWrap: "wrap", // Wrap links on small screens
};

// Individual link style
const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "500",
  padding: "5px 10px",
  borderRadius: "5px",
  transition: "background-color 0.3s",
};

// Hover effect using inline style trick
Object.assign(linkStyle, {
  ":hover": {
    backgroundColor: "#1e4290",
  },
});

export default Navbar;

