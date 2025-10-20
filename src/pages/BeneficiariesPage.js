import React from "react";

function BeneficiariesPage() {
  // No actual beneficiaries yet
  const beneficiaries = []; // empty for now

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", color: "#2c3e50" }}>Beneficiaries</h1>
      <p style={{ textAlign: "center", color: "#555", marginBottom: "30px" }}>
        These are the wonderful individuals and communities supported through the efforts
        of <strong>Innocious Foundation</strong>. Each contribution helps transform lives
        and foster sustainable development.
      </p>

      {beneficiaries.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "30px", color: "#888" }}>
          No beneficiaries have been recorded yet. As soon as contributions are made,
          they will appear here.
        </p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          {beneficiaries.map((b) => (
            <div
              key={b.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                backgroundColor: "#f9f9f9",
                textAlign: "center",
              }}
            >
              <h2>{b.name}</h2>
              <p><strong>Project:</strong> {b.project}</p>
              <p><strong>Amount Received:</strong> KES {b.amountReceived.toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BeneficiariesPage;

