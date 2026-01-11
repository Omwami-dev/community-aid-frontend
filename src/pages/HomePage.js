import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={containerStyle}>
      {/* Hero Section */}
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
     <Link to="/donations" className="btn-primary">
      Make a Donation
     </Link>
     <Link to="/volunteers" className="btn-accent">
      Volunteer
     </Link>
   </div>
   </section>


      {/* About Section */}
      <section className='section-tealprimary'>
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
      <section className='section-yellow'>
        <h2>Our Mission</h2>
        <p>
          To empower communities by mobilizing volunteers and sourcing resources from donors,
          ensuring that charitable projects are executed efficiently, transparently, and sustainably.
          We aim to create meaningful impact through education, health, and community support initiatives.
        </p>
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

// Styles for mobile-friendly layout
const containerStyle = {
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  maxWidth: '900px', // Limits content width for readability
  margin: 'auto', // Centers content
};

export default HomePage;

