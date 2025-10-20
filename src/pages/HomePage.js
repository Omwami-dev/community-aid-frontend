import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={containerStyle}>
      {/* Hero Section */}
      <section style={heroStyle}>
        <h1 style={headingStyle}>Welcome to Innocious Foundation</h1>
        <p style={paragraphStyle}>
          Striving to create a better world through humanitarian acts, empowering communities,
          and mobilizing resources from generous donors and dedicated volunteers.
        </p>
        <div style={buttonGroupStyle}>
          <Link to="/projects">
            <button style={buttonStyle}>View Projects</button>
          </Link>
          <Link to="/donations">
            <button style={buttonStyle}>Make a Donation</button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section style={sectionStyle}>
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

      {/* Mission Section */}
      <section style={sectionStyle}>
        <h2>Our Mission</h2>
        <p>
          To empower communities by mobilizing volunteers and sourcing resources from donors,
          ensuring that charitable projects are executed efficiently, transparently, and sustainably.
          We aim to create meaningful impact through education, health, and community support initiatives.
        </p>
      </section>

      {/* Vision Section */}
      <section style={sectionStyle}>
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

// Styles for mobile-friendly layout
const containerStyle = {
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  maxWidth: '900px', // Limits content width for readability
  margin: 'auto', // Centers content
};

const heroStyle = {
  textAlign: 'center',
  marginBottom: '40px',
};

const headingStyle = {
  fontSize: '2rem',
  marginBottom: '15px',
  color: '#2c3e50',
};

const paragraphStyle = {
  fontSize: '1rem',
  color: '#555',
  lineHeight: '1.6',
  marginBottom: '20px',
};

const buttonGroupStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap', // Allows buttons to wrap on small screens
  gap: '10px',
  marginTop: '20px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor: '#2b6cb0',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
};

const sectionStyle = {
  marginBottom: '30px',
  padding: '20px',
  backgroundColor: '#f7fafc',
  borderRadius: '8px',
  textAlign: 'center',
};

export default HomePage;

