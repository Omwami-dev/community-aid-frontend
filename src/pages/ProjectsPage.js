import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProjectsPage() {
  const navigate = useNavigate();

 const [projects, setProjects] = useState([]);

 useEffect(() => {
  axios.get("http://127.0.0.1:8000/api/projects/")
    .then((response) => {
      setProjects(response.data);
    })
    .catch((error) => {
      console.error("Error fetching projects:", error);
    });
}, []);



  return (
    <div style={containerStyle}>
      <section>
        <h1 style={headingStyle}>Our Projects</h1>
        <p style={paragraphStyle}>
          At <strong>Innocious Foundation</strong>, we are driven by compassion and purpose.
          Each project we launch is a step toward uplifting lives and promoting equality through education,
          sustainable development, and community empowerment.
        </p>
      </section>

      <div style={gridStyle}>
        {projects.map((project) => (
          <div key={project.id} style={cardStyle}>
            <div>
              <h2 style={projectTitleStyle}>{project.title}</h2>
              <p style={projectDescStyle}>{project.description}</p>
            </div>

            <button
              style={buttonStyle}
              onClick={() => navigate(`/donate/${project.id}`)}
            >
              Support This Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =======================
   Styles
======================= */

const containerStyle = {
  padding: "30px 20px",
  maxWidth: "1000px",
  margin: "auto",
  fontFamily: "Arial, sans-serif",
};

const headingStyle = {
  textAlign: "center",
  color: "#2c3e50",
  marginBottom: "15px",
};

const paragraphStyle = {
  textAlign: "center",
  color: "#555",
  marginBottom: "40px",
  lineHeight: "1.7",
  fontSize: "1.05rem",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "25px",
};

const cardStyle = {
  border: "1px solid #e0e0e0",
  borderRadius: "12px",
  padding: "20px",
  backgroundColor: "#ffffff",
  boxShadow: "0 6px 10px rgba(0,0,0,0.06)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const projectTitleStyle = {
  fontSize: "1.25rem",
  marginBottom: "10px",
  color: "#2c3e50",
};

const projectDescStyle = {
  fontSize: "1rem",
  marginBottom: "20px",
  color: "#555",
  lineHeight: "1.6",
};

const buttonStyle = {
  padding: "10px 18px",
  backgroundColor: "#27ae60",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  fontSize: "15px",
  cursor: "pointer",
  alignSelf: "center",
};

export default ProjectsPage;


