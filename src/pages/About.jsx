// src/pages/About.jsx
import React from "react";
import aboutImg from "../assets/about.jpg"; // add an image in assets

function About() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={aboutImg} alt="About Us" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">About Skill Swap Hub</h2>
          <p className="lead">
            Skill Swap Hub is a community-driven platform where people can
            connect, share knowledge, and learn new skills. 🚀
          </p>
          <p>
            Our mission is to empower individuals by creating opportunities for
            collaboration, skill development, and mutual growth.
          </p>
          <ul>
            <li>✅ Share your expertise</li>
            <li>✅ Find mentors and learners</li>
            <li>✅ Build a strong network</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
