import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../state/AuthContext.jsx";
import logo from "../assets/logo.png";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img src={logo} alt="Skill Swap Hub" width="40" height="40" className="me-2 rounded-circle" />
          Skill Swap Hub
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/support">Support</Link></li>
            {user ? (
              <>
                <li className="nav-item"><Link className="nav-link" to="/skills">Skills</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/skills/add">Add Skill</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/chat">Chat</Link></li>
                <li className="nav-item">
                  <button className="btn btn-outline-light ms-2" onClick={logout}>Logout</button>
                </li>
              </>
            ) : (
              <li className="nav-item"><Link className="btn btn-primary ms-2" to="/login">Login</Link></li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;