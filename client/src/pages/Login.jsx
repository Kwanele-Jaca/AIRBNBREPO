import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", form);

      // store token
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      
      



      alert("Login successful");

      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Login failed");
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
          Welcome Back
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
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            style={inputStyle}
          />

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
            Sign In
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "25px",
            color: "#666",
          }}
        >
          Don't have an account?
          <span
            style={{
              color: "#ff385c",
              fontWeight: "600",
              cursor: "pointer",
              marginLeft: "5px",
            }}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  </AuthLayout>
);
}

export default Login;