import React from "react";

function VolunteersPage() {
  // Placeholder volunteers data (empty for now)
  const volunteers = []; // no actual volunteers yet

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", color: "#2c3e50" }}>Volunteers</h1>
      <p style={{ textAlign: "center", color: "#555", marginBottom: "30px" }}>
        Our dedicated volunteers are the backbone of <strong>Innocious Foundation</strong>.
        They help make our projects successful and transform communities.
      </p>

      {volunteers.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "30px", color: "#888" }}>
          No volunteers have been registered yet. As volunteers join, their profiles will appear here.
        </p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {volunteers.map((v) => (
            <div
              key={v.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                backgroundColor: "#f9f9f9",
                textAlign: "center",
              }}
            >
              <h2>{v.name}</h2>
              <p><strong>Assigned Project:</strong> {v.project}</p>
              <p><strong>Contact Info:</strong> {v.contact}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default VolunteersPage;

