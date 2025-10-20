import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import DonationsPage from "./pages/DonationsPage";
import BeneficiariesPage from "./pages/BeneficiariesPage";
import VolunteersPage from "./pages/VolunteersPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/donations">Donations</Link></li>
            <li><Link to="/beneficiaries">Beneficiaries</Link></li>
            <li><Link to="/volunteers">Volunteers</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>

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
