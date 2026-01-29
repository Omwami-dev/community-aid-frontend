import React, { useEffect, useState } from "react";

function VolunteersPage() {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/volunteers/")
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          setVolunteers(data.results);
        } else {
          setVolunteers(data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Volunteers</h1>

      <p style={paragraphStyle}>
        Our dedicated volunteers are the backbone of{" "}
        <strong>Innocious Foundation</strong>. They help make our projects
        successful and transform communities.
      </p>

      <div style={formHeaderStyle}>
        <h2>Become a Volunteer</h2>
        <p style={formSubtextStyle}>
          Join us in making a difference. Fill in your details and we will reach
          out.
        </p>
      </div>

      {volunteers.length === 0 ? (
        <p style={emptyStyle}>
          No volunteers have been registered yet. As volunteers join, their
          profiles will appear here.
        </p>
      ) : (
        <div style={gridStyle}>
          {volunteers.map((v) => (
            <div key={v.id} style={cardStyle}>
              <h2 style={cardTitleStyle}>{v.name}</h2>
              <p style={cardTextStyle}>
                <strong>Assigned Project:</strong> {v.project}
              </p>
              <p style={cardTextStyle}>
                <strong>Contact Info:</strong> {v.contact_info}
              </p>
              <p style={cardTextStyle}>
                <strong>Approved:</strong> {v.approved ? "Yes" : "No"}
              </p>
            </div>
          ))}
        </div>
      )}
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

const formHeaderStyle = {
  textAlign: "center",
  marginBottom: "25px",
};

const formSubtextStyle = {
  color: "#777",
  marginTop: "10px",
};

const emptyStyle = {
  textAlign: "center",
  color: "#888",
  marginTop: "30px",
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
  textAlign: "center",
};

const cardTitleStyle = {
  fontSize: "1.2rem",
  marginBottom: "10px",
  color: "#2c3e50",
};

const cardTextStyle = {
  fontSize: "1rem",
  marginBottom: "8px",
  color: "#555",
};

export default VolunteersPage;



