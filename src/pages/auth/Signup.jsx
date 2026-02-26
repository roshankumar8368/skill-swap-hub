import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../state/AuthContext.jsx";

function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const { signup, loading } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signup(form);
    if (response.ok) navigate("/skills");
    else alert(response.message);
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-light" style={{ height: "90vh" }}>
      <div className="card p-4 shadow-lg" style={{ width: "420px" }}>
        <h2 className="text-center mb-4">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" name="username" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name="email" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" name="password" onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-success w-100" disabled={loading}>
            {loading ? "Creating account..." : "Sign Up"}
          </button>
          <p className="mt-3 text-center">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;