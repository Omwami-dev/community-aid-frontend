import React from "react";

function BeneficiariesPage() {
  // No actual beneficiaries yet
  const beneficiaries = []; // empty for now

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Beneficiaries</h1>
      <p style={paragraphStyle}>
        These are the wonderful individuals and communities supported through the efforts
        of <strong>Innocious Foundation</strong>. Each contribution helps transform lives
        and foster sustainable development.
      </p>

      {beneficiaries.length === 0 ? (
        <p style={emptyStyle}>
          No beneficiaries have been recorded yet. As soon as contributions are made,
          they will appear here.
        </p>
      ) : (
        <div style={gridStyle}>
          {beneficiaries.map((b) => (
            <div key={b.id} style={cardStyle}>
              <h2 style={cardTitleStyle}>{b.name}</h2>
              <p style={cardTextStyle}><strong>Project:</strong> {b.project}</p>
              <p style={cardTextStyle}><strong>Amount Received:</strong> KES {b.amountReceived.toLocaleString()}</p>
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

export default BeneficiariesPage;


