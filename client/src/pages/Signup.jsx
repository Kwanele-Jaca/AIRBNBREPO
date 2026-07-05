import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/auth/signup", form);
      alert("Signup successful");
      navigate("/login");
    } catch (err) {
      console.log(err);
      alert("Signup failed");
    }
  };
  const inputStyle = {
  width: "100%",
  height: "58px",
  padding: "0 18px",
  border: "1px solid #ddd",
  borderRadius: "14px",
  fontSize: "16px",
  outline: "none",
  boxSizing: "border-box",
};


  return (
  <AuthLayout>
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f7f7f7",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "#fff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#222",
          }}
        >
          Create Account
        </h1>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            style={inputStyle}
          />

          <select
            name="role"
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="user">Guest</option>
            <option value="host">Host</option>
          </select>

          <button
            type="submit"
            style={{
              width: "60%",
              margin: "15px auto 0",
              background: "#ff385c",
              color: "#fff",
              border: "none",
              padding: "15px",
              borderRadius: "999px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  </AuthLayout>
);
}

export default Signup;