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

// Styles
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar appears on all pages */}
        <Navbar />

        {/* Page routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/donations" element={<DonationsPage />} />
          <Route path="/beneficiaries" element={<BeneficiariesPage />} />
          <Route path="/volunteers" element={<VolunteersPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

