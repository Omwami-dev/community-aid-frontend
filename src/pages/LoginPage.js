import React, { useState } from "react";

function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Attempt:", formData);
    alert(`Login attempt for: ${formData.email} (Demo)`);

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div style={containerStyle}>
      <div style={formWrapperStyle}>
        <h2 style={headingStyle}>Login</h2>
        <form onSubmit={handleSubmit}>
          {/** Email */}
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              style={inputStyle}
            />
          </div>

          {/** Password */}
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              style={inputStyle}
            />
          </div>

          <button type="submit" style={buttonStyle}>Login</button>
        </form>
      </div>
    </div>
  );
}

// Styles (matching Register Page for consistency)
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "80vh",
  backgroundColor: "#f0f4f8",
  padding: "20px",
};

const formWrapperStyle = {
  backgroundColor: "#fff",
  padding: "30px 20px", // slightly smaller padding for mobile
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  width: "100%",
  maxWidth: "400px",
};

const headingStyle = {
  textAlign: "center",
  marginBottom: "20px",
  color: "#2c3e50",
};

const inputGroupStyle = {
  marginBottom: "20px",
  display: "flex",
  flexDirection: "column",
};

const labelStyle = {
  marginBottom: "5px",
  fontWeight: "bold",
  color: "#2c3e50",
};

const inputStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#2b6cb0",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
};

export default LoginPage;



