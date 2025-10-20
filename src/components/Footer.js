import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={{ textAlign: "center" }}>
        <p>&copy; {new Date().getFullYear()} Innocious Foundation. All rights reserved.</p>
        <p>
          Follow us: 
           {/* <a href="#" style={linkStyle}>Facebook</a> | */}
           <a href="https://x.com/Innocious_Found?s=08" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          Twitter
        </a>{" "} |
          {/* <a href="#" style={linkStyle}>Instagram</a> */}
        </p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#fff", // white background
  color: "#2c3e50",
  padding: "20px",
  marginTop: "40px",
  boxShadow: "0 -2px 4px rgba(0,0,0,0.1)",
};

const linkStyle = {
  textDecoration: "none",
  color: "#2b6cb0",
  margin: "0 5px",
};

export default Footer;
