import React from "react";
import sampleImg from "../assets/coding.jpg"; // fallback image

function SkillCard({ skill }) {
  const {
    skillName,
    experience,
    charges,
    location,
    description,
    createdBy,
    phone,
  } = skill;

  return (
    <div className="card shadow-sm m-3" style={{ width: "250px" }}>
      <img src={sampleImg} className="card-img-top" alt={skillName} />
      <div className="card-body text-center">
        <h5 className="card-title">{skillName}</h5>
        <p className="card-text">
          {experience} experience<br />
          ₹{charges}/hr • {location}
        </p>
        {createdBy?.username && (
          <p style={{ fontSize: 14, color: "var(--muted)" }}>
            @{createdBy.username} • {phone}
          </p>
        )}
        <a href="/chat" className="btn btn-success w-100">Connect</a>
      </div>
    </div>
  );
}

export default SkillCard;