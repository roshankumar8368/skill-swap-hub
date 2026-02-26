// src/components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <p className="mb-0">
        © {new Date().getFullYear()} <strong>Skill Swap Hub</strong> | Built with ❤️ for Community
      </p>
    </footer>
  );
}

export default Footer;
