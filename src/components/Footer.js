import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={copyright}>
          &copy; {new Date().getFullYear()} Innocious Foundation. All rights reserved.
        </p>

        <div style={socialContainer}>
          <span style={followText}>Follow us:</span>

          <a href="https://www.facebook.com/share/14NveVJEcHv/" target="_blank" rel="noreferrer" style={iconLink}>
            <FaFacebookF />
          </a>

          <a href="https://x.com/Innocious_Found?s=08" target="_blank" rel="noreferrer" style={iconLink}>
            <FaXTwitter />
          </a>

          <a href="https://www.instagram.com/innocious_foundation" target="_blank" rel="noreferrer" style={iconLink}>
            <FaInstagram />
          </a>

          <a href="https://www.tiktok.com/@innociousfoundation" target="_blank" rel="noreferrer" style={iconLink}>
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
};

/* ===== STYLES ===== */

const footerStyle = {
  backgroundColor: "#ffffff",
  borderTop: "1px solid #e2e8f0",
  padding: "25px 10px",
  marginTop: "50px",
};

const containerStyle = {
  maxWidth: "1100px",
  margin: "0 auto",
  textAlign: "center",
};

const copyright = {
  color: "#2d3748",
  fontSize: "14px",
  marginBottom: "12px",
};

const socialContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
};

const followText = {
  fontSize: "14px",
  color: "#4a5568",
};

const iconLink = {
  color: "#2b6cb0",
  fontSize: "20px",
  transition: "transform 0.3s ease",
};

export default Footer;



