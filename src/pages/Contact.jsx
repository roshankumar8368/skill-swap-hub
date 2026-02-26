// src/pages/Contact.jsx
import React from "react";

function Contact() {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">📩 Contact Us</h2>
      <div className="row">
        <div className="col-md-6">
          <form className="p-4 shadow rounded bg-light">
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter your name" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter your email" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Write your message..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>

        <div className="col-md-6">
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded shadow"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
