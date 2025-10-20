import React from "react";
import { Link } from "react-router-dom";

function DonationsPage() {
  // Placeholder donations array (empty for now)
  const donations = []; // no real donations yet

  // Calculate total amount (will be 0 if empty)
  const totalAmount = donations.reduce((sum, d) => sum + d.amount, 0);

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", color: "#2c3e50" }}>Donations</h1>
      <p style={{ textAlign: "center", color: "#555", marginBottom: "30px" }}>
        Your contributions to <strong>Innocious Foundation</strong> help us build a
        fairer, more compassionate world.
      </p>

      <h3 style={{ color: "#27ae60", textAlign: "center" }}>
        Total Donations: KES {totalAmount.toLocaleString()}
      </h3>

      {donations.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "30px", color: "#888" }}>
          No donations yet. Be the first to contribute!
        </p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
            backgroundColor: "#f9f9f9",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <thead style={{ backgroundColor: "#27ae60", color: "white" }}>
            <tr>
              <th style={{ padding: "10px" }}>Donor</th>
              <th style={{ padding: "10px" }}>Amount (KES)</th>
              <th style={{ padding: "10px" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation, index) => (
              <tr key={index} style={{ textAlign: "center", borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "10px" }}>{donation.donor}</td>
                <td style={{ padding: "10px" }}>{donation.amount.toLocaleString()}</td>
                <td style={{ padding: "10px" }}>{donation.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Link to="/projects">
          <button style={buttonStyle}>Support a Project</button>
        </Link>
      </div>
    </div>
  );
}

// Inline button style
const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "#2b6cb0",
  color: "white",
  border: "none",
  borderRadius: "5px",
};

export default DonationsPage;

