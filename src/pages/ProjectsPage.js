import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectsPage() {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Community Education Drive",
      description:
        "This initiative provides learning materials, mentorship, and digital literacy programs to children and youth in underprivileged communities.",
    },
    {
      id: 2,
      title: "Health & Nutrition Program",
      description:
        "Promoting health awareness, nutrition, and hygiene education to improve the well-being of vulnerable families and school children.",
    },
    {
      id: 3,
      title: "Empowering Local Entrepreneurs",
      description:
        "Encouraging self-reliance through skill training, and access to mentorship programs for youth and women entrepreneurs.",
    },
    {
      id: 4,
      title: "Digital Skills for Youth",
      description:
        "Equipping young people with practical digital and technology skills such as computer literacy, coding basics, and online safety to prepare them for the modern job market.",
    },
    {
      id: 5,
      title: "Women Empowerment Initiative",
      description:
        "Supporting women through financial literacy, and access to small startup capital to promote economic independence.",
    },
    {
      id: 6,
      title: "Environmental Conservation Program",
      description:
        "Promoting environmental sustainability through tree planting, waste management education, and climate awareness campaigns within local communities.",
    },
    {
      id: 7,
      title: "Community Health Outreach",
      description:
        "Providing basic medical camps, health education, and preventive care awareness to underserved rural communities.",
    },
  ];

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


