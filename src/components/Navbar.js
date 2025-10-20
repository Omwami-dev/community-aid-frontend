import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>Innocious Foundation</div>

      {isMobile && (
        <div style={hamburgerStyle} onClick={toggleMenu}>
          <div style={barStyle}></div>
          <div style={barStyle}></div>
          <div style={barStyle}></div>
        </div>
      )}

      <ul
        style={{
          ...navLinksStyle,
          flexDirection: isMobile ? "column" : "row",
          display: isMobile ? (isOpen ? "flex" : "none") : "flex",
        }}
      >
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

const logoStyle = {
  color: "#fff",
  fontWeight: "bold",
  fontSize: "20px",
};

const hamburgerStyle = {
  display: "block",
  cursor: "pointer",
};

const barStyle = {
  width: "25px",
  height: "3px",
  backgroundColor: "#fff",
  margin: "4px 0",
};

const navLinksStyle = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  gap: "15px",
};

export default Navbar;



