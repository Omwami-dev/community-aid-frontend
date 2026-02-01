import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function VolunteersPage() {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    // Fetch approved volunteers
    fetch("http://127.0.0.1:8000/api/volunteers/")
      .then((res) => res.json())
      .then((data) => {
        let list = [];
        if (Array.isArray(data)) list = data; // plain array
        else if (Array.isArray(data.results)) list = data.results; // paginated
        setVolunteers(list);
      })
      .catch((err) => {
        console.error("Fetch volunteers error:", err);
        setVolunteers([]);
      });
  }, []);

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Our Volunteers</h1>
      <p style={paragraphStyle}>
        Meet our approved volunteers who support the work of
        <strong> Innocious Foundation</strong>.
      </p>

      {/* Button to go to Volunteer Application Page */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <Link to="/apply-volunteer" style={applyButtonStyle}>
          Apply to be a Volunteer
        </Link>
      </div>

      {/* Approved Volunteers List */}
      {volunteers.length === 0 ? (
        <p style={emptyStyle}>No approved volunteers yet.</p>
      ) : (
        <div style={gridStyle}>
          {volunteers.map((v) => (
            <div key={v.id} style={cardStyle}>
              <h3>{v.full_name}</h3>
              <p>
                <strong>Email:</strong> {v.email}
              </p>
              <p>
                <strong>Project:</strong> {v.project_name || "—"}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------------- Styles ---------------- */
const containerStyle = { padding: "20px", maxWidth: "900px", margin: "auto" };
const headingStyle = { textAlign: "center", marginBottom: "15px" };
const paragraphStyle = { textAlign: "center", color: "#555" };
const applyButtonStyle = {
  padding: "12px 25px",
  backgroundColor: "#3498db",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  textDecoration: "none",
  fontWeight: "bold",
  cursor: "pointer",
};
const emptyStyle = { textAlign: "center", marginTop: "20px" };
const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
};
const cardStyle = {
  padding: "15px",
  border: "1px solid #ddd",
  borderRadius: "8px",
};

export default VolunteersPage;













