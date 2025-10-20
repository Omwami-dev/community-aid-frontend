import React from "react";
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
  return (
    <Router>
      <div className="App" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* Navbar visible on all pages */}
        <Navbar />

        {/* Main content grows to fill available space */}
        <main style={{ flex: 1 }}>
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

        {/* Footer appears on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;


