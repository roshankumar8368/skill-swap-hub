// src/pages/Support.jsx
import React from "react";

function Support() {
  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4">💡 Support & Help</h2>
      <div className="accordion shadow" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="faq1">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqOne">
              How do I create an account?
            </button>
          </h2>
          <div id="faqOne" className="accordion-collapse collapse show">
            <div className="accordion-body">
              Click on the <b>Sign Up</b> button and fill in your details to get started.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="faq2">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo">
              How do I add a skill?
            </button>
          </h2>
          <div id="faqTwo" className="accordion-collapse collapse">
            <div className="accordion-body">
              After logging in, go to the <b>Add Skill</b> page, enter your skill details, and save.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="faq3">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqThree">
              How do I connect with others?
            </button>
          </h2>
          <div id="faqThree" className="accordion-collapse collapse">
            <div className="accordion-body">
              Browse skills and click <b>Connect</b> to start chatting with the skill provider.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
