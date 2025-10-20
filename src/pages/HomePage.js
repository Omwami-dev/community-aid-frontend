import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>Welcome to Innocious Foundation</h1>
        <p>
          Striving to create a better world through humanitarian acts, empowering communities,
          and mobilizing resources from generous donors and dedicated volunteers.
        </p>
        <div style={{ marginTop: '20px' }}>
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

// Inline styles for simplicity
const buttonStyle = {
  padding: '10px 20px',
  margin: '0 10px',
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
