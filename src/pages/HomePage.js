import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/projects/")
      .then((res) => res.json())
      .then((data) => {
        // If data is object like { results: [] }
        if (data.results) setProjects(data.results);
        else if (data.data) setProjects(data.data);
        else setProjects(data); // if already array

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={containerStyle}>
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-heading">Welcome to Innocious Foundation</h1>
        <p className="hero-paragraph">
          Striving to create a better world through humanitarian acts, empowering communities,
          and mobilizing resources from generous donors and dedicated volunteers.
        </p>
        <div className="hero-buttons">
          <Link to="/projects">
            <button className="btn-primary">View Projects</button>
          </Link>
          <Link to="/donations">
            <button className="btn-primary">Make a Donation</button>
          </Link>
          <Link to="/volunteers">
            <button className="btn-accent">Volunteer</button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="section-tealprimary">
        <h2>About Innocious Foundation</h2>
        <p>
          Innocious Foundation is a humanitarian organization dedicated to uplifting communities,
          providing critical resources to those in need, and fostering sustainable development.
          Founded with the vision of a world where every person has access to basic needs and
          opportunities, we work tirelessly to connect compassionate donors and volunteers
          with impactful projects. Our mission is to make humanitarian support more organized,
          transparent, and effective by leveraging resources, technology, and community engagement.
        </p>
      </section>

      {/* Latest Projects */}
      <section className="section-yellow">
       <h2>Latest Projects</h2>

       {loading ? (
        <p>Loading projects...</p>
       ) : Array.isArray(projects) && projects.length > 0 ? (
       <div style={projectsGrid}>
       {projects.slice(0, 3).map((project) => (
           <Link
            key={project.id}
            to={`/projects/${project.id}`}
            style={projectCard}
            >
           <h3 style={{ margin: 0 }}>
            {project.name || project.title || "Untitled Project"}
           </h3>
           </Link>
         ))}
         </div>
         ) : (
          <p>No projects available right now.</p>
          )}
     </section>


      {/* Vision Section */}
      <section className="section-purple">
        <h2>Our Vision</h2>
        <p>
          A world where every individual and community thrives with access to essential resources,
          support systems, and opportunities for growth. We envision a society strengthened by
          compassion, collaboration, and active humanitarian engagement.
        </p>
      </section>
    </div>
  );
};

const containerStyle = {
  padding: "20px",
  fontFamily: "Arial, sans-serif",
  maxWidth: "900px",
  margin: "auto",
};

const projectsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "15px",
  marginTop: "15px",
};

const projectCard = {
  border: "2px solid #ccc",
  borderRadius: "8px",
  padding: "15px",
  textDecoration: "none",
  color: "#000",
  backgroundColor: "#fff",
};

export default HomePage;


