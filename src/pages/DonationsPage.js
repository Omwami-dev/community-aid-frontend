import React from "react";
import { Link } from "react-router-dom";

function DonationsPage() {
  // Placeholder donations array (empty for now)
  const donations = []; // no real donations yet

  // Calculate total amount (will be 0 if empty)
  const totalAmount = donations.reduce((sum, d) => sum + d.amount, 0);

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Donations</h1>
      <div className="card">
     <h3>Support a Cause</h3>
     <p>Your donation helps transform lives.</p>
     </div>
      <p style={paragraphStyle}>
        Your contributions to <strong>Innocious Foundation</strong> help us build a
        fairer, more compassionate world.
      </p>

      <h3 style={totalStyle}>
        Total Donations: KES {totalAmount.toLocaleString()}
      </h3>

      {donations.length === 0 ? (
        <p style={emptyStyle}>
          No donations yet. Be the first to contribute!
        </p>
      ) : (
        <div style={tableWrapperStyle}>
          <table style={tableStyle}>
            <thead style={theadStyle}>
              <tr>
                <th style={thStyle}>Donor</th>
                <th style={thStyle}>Amount (KES)</th>
                <th style={thStyle}>Date</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation, index) => (
                <tr key={index} style={trStyle}>
                  <td style={tdStyle}>{donation.donor}</td>
                  <td style={tdStyle}>{donation.amount.toLocaleString()}</td>
                  <td style={tdStyle}>{donation.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div style={buttonWrapperStyle}>
        <Link to="/projects">
          <button style={buttonStyle}>Support a Project</button>
        </Link>
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
  marginBottom: "20px",
  lineHeight: "1.6",
};

const totalStyle = {
  textAlign: "center",
  color: "#27ae60",
  marginBottom: "30px",
};

const emptyStyle = {
  textAlign: "center",
  color: "#888",
  marginTop: "30px",
};

const tableWrapperStyle = {
  overflowX: "auto", // allows horizontal scroll on mobile
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  backgroundColor: "#f9f9f9",
  borderRadius: "10px",
  overflow: "hidden",
  minWidth: "300px", // ensures table fits on small screens
};

const theadStyle = {
  backgroundColor: "#27ae60",
  color: "white",
};

const thStyle = {
  padding: "10px",
};

const trStyle = {
  textAlign: "center",
  borderBottom: "1px solid #ddd",
};

const tdStyle = {
  padding: "10px",
};

const buttonWrapperStyle = {
  textAlign: "center",
  marginTop: "30px",
};

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


