import React from "react";

function ProjectsPage() {
  return (
    <div style={{ padding: "40px", maxWidth: "1000px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", color: "#2c3e50" }}>Our Projects</h1>
      <p style={{ textAlign: "center", marginBottom: "30px", color: "#555" }}>
        At <strong>Innocious Foundation</strong>, we are driven by compassion and purpose.
        Each project we launch is a step toward uplifting lives and promoting
        equality through education, sustainable development, and community empowerment.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
        {/* Project 1 */}
        <div style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "20px", backgroundColor: "#f9f9f9" }}>
          <h2>Project 1: Community Education Drive</h2>
          <p>
            This initiative provides learning materials, mentorship, and digital
            literacy programs to children and youth in underprivileged communities.
          </p>
          <button style={{ background: "#27ae60", color: "#fff", padding: "10px 15px", border: "none", borderRadius: "5px" }}>
            Support This Project
          </button>
        </div>

        {/* Project 2 */}
        <div style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "20px", backgroundColor: "#f9f9f9" }}>
          <h2>Project 2: Health & Nutrition Program</h2>
          <p>
            Promoting health awareness, nutrition, and hygiene education to improve
            the well-being of vulnerable families and school children.
          </p>
          <button style={{ background: "#27ae60", color: "#fff", padding: "10px 15px", border: "none", borderRadius: "5px" }}>
            Support This Project
          </button>
        </div>

        {/* Project 3 */}
        <div style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "20px", backgroundColor: "#f9f9f9" }}>
          <h2>Project 3: Empowering Local Entrepreneurs</h2>
          <p>
            Encouraging self-reliance through small grants, skill training, and access
            to mentorship programs for youth and women entrepreneurs.
          </p>
          <button style={{ background: "#27ae60", color: "#fff", padding: "10px 15px", border: "none", borderRadius: "5px" }}>
            Support This Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
