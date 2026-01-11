import React from "react";

function ProjectsPage() {
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
        "Encouraging self-reliance through small grants, skill training, and access to mentorship programs for youth and women entrepreneurs.",
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
            <h2 style={projectTitleStyle}>{project.title}</h2>
            <p style={projectDescStyle}>{project.description}</p>
            <button style={buttonStyle}>Support This Project</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  padding: "20px",
  maxWidth: "900px",
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
  marginBottom: "30px",
  lineHeight: "1.6",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px",
};

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "20px",
  backgroundColor: "#f9f9f9",
  boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const projectTitleStyle = {
  fontSize: "1.2rem",
  marginBottom: "10px",
  color: "#2c3e50",
};

const projectDescStyle = {
  fontSize: "1rem",
  marginBottom: "15px",
  color: "#555",
  lineHeight: "1.5",
};

const buttonStyle = {
  padding: "10px 15px",
  backgroundColor: "#27ae60",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
  alignSelf: "center", // centers button in card
};

export default ProjectsPage;

