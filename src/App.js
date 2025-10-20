import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import DonationsPage from "./pages/DonationsPage";
import BeneficiariesPage from "./pages/BeneficiariesPage";
import VolunteersPage from "./pages/VolunteersPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Styles
import "./App.css";

function App() {
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#f4f4f4",
        }}
      >
        {/* Navbar on all pages */}
        <div ref={navbarRef}>
          <Navbar />
        </div>

        {/* Main content with dynamic top padding */}
        <main style={{ flex: 1, paddingTop: navbarHeight }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/donations" element={<DonationsPage />} />
            <Route path="/beneficiaries" element={<BeneficiariesPage />} />
            <Route path="/volunteers" element={<VolunteersPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>

        {/* Footer on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;




