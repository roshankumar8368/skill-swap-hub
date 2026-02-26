import { useState } from "react";
import api from "../../services/api.js";
import { useAuth } from "../../state/AuthContext.jsx";

export default function SkillForm() {
  const { user } = useAuth();
  const [form, setForm] = useState({
    skillName: "",
    charges: "",
    experience: "",
    location: "",
    phone: "",
    description: "",
  });
  const [message, setMessage] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      await api.post("/skills", {
        ...form,
        charges: Number(form.charges),
      });
      setMessage("✅ Skill added successfully!");
      setForm({
        skillName: "",
        charges: "",
        experience: "",
        location: "",
        phone: "",
        description: "",
      });
    } catch (e) {
      setMessage(e?.response?.data?.message || "❌ Failed to add skill");
    }
  };

  return (
    <section className="container">
      <div className="card">
        <h2>Add Your Skill</h2>
        {message && (
          <p style={{ color: message.includes("success") ? "green" : "red" }}>
            {message}
          </p>
        )}
        <form onSubmit={onSubmit}>
          <div className="grid grid-3">
            <div>
              <label className="label">Skill Name</label>
              <input className="input" name="skillName" value={form.skillName} onChange={onChange} required />
            </div>
            <div>
              <label className="label">Charges (₹)</label>
              <input className="input" type="number" name="charges" value={form.charges} onChange={onChange} required />
            </div>
            <div>
              <label className="label">Experience</label>
              <input className="input" name="experience" value={form.experience} onChange={onChange} placeholder="e.g. 2 years" />
            </div>
            <div>
              <label className="label">Location</label>
              <input className="input" name="location" value={form.location} onChange={onChange} />
            </div>
            <div>
              <label className="label">Phone</label>
              <input className="input" name="phone" value={form.phone} onChange={onChange} />
            </div>
            <div className="grid" style={{ gridColumn: "1 / -1" }}>
              <label className="label">Description</label>
              <textarea className="textarea" rows={3} name="description" value={form.description} onChange={onChange} />
            </div>
          </div>
          <div style={{ marginTop: 12 }}>
            <button className="btn">Save Skill</button>
          </div>
        </form>
      </div>
    </section>
  );
}