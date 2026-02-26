import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Support from "./pages/Support.jsx";
import Login from "./pages/auth/Login.jsx";
import Signup from "./pages/auth/Signup.jsx";
import SkillForm from "./pages/skills/SkillForm.jsx";
import SkillList from "./pages/skills/SkillList.jsx";
import Chat from "./pages/chat/Chat.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/skills" element={<SkillList />} />

          {/* Protected Pages */}
          <Route path="/skills/add" element={<ProtectedRoute><SkillForm /></ProtectedRoute>} />
          <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />

          {/* Fallback */}
          <Route path="*" element={<div className="empty">Page not found</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}