import { useEffect, useState } from "react";
import api from "../../services/api.js";
import SkillCard from "../../components/SkillCard.jsx";

export default function SkillList() {
  const [skills, setSkills] = useState([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchSkills = async (query = "") => {
    setLoading(true);
    try {
      const url = query ? `/skills?search=${encodeURIComponent(query)}` : "/skills";
      const { data } = await api.get(url);
      setSkills(data);
    } catch {
      setSkills([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const onSearch = (e) => {
    e.preventDefault();
    fetchSkills(q.trim());
  };

  return (
    <section className="container">
      <div className="card">
        <h2>Find Skills</h2>
        <form className="search-bar" onSubmit={onSearch} style={{ marginBottom: 12 }}>
          <input
            className="input"
            placeholder="Search e.g. Guitar, React, Cooking..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <button className="btn" disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </button>
          <button
            className="btn secondary"
            type="button"
            onClick={() => {
              setQ("");
              fetchSkills();
            }}
          >
            Reset
          </button>
        </form>

        {loading ? (
          <p>Loading...</p>
        ) : skills.length === 0 ? (
          <div className="empty">No skills found. Try another keyword.</div>
        ) : (
          <div className="d-flex flex-wrap justify-content-center">
            {skills.map((skill) => (
              <SkillCard key={skill._id} skill={skill} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}