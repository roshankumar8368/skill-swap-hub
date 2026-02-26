// src/pages/Home.jsx
import React from "react";
import heroImg from "../assets/hero.jpg";

function Home() {
  return (
    <header
      className="d-flex flex-column justify-content-center align-items-center text-white text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "calc(100vh - 60px)", // adjust according to navbar
        width: "100%",
      }}
    >
      <h1 className="display-3 fw-bold">Skill Swap Hub</h1>
      <p className="lead">Learn,Earn,Share & Connect with the Community 🚀</p>
      <a href="/signup" className="btn btn-lg btn-primary shadow mt-3">
        Get Started
      </a>
    </header>
  );
}

export default Home;
