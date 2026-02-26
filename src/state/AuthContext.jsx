import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api.js";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem("ssh_user");
    return raw ? JSON.parse(raw) : null;
  });
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    try {
      const { data } = await api.post("/auth/login", { email, password });
      localStorage.setItem("ssh_token", data.token);
      localStorage.setItem("ssh_user", JSON.stringify(data.user));
      setUser(data.user);
      return { ok: true };
    } catch (e) {
      return { ok: false, message: e?.response?.data?.message || "Login failed" };
    } finally {
      setLoading(false);
    }
  };

  const signup = async (payload) => {
    setLoading(true);
    try {
      const { data } = await api.post("/auth/signup", payload);
      localStorage.setItem("ssh_token", data.token);
      localStorage.setItem("ssh_user", JSON.stringify(data.user));
      setUser(data.user);
      return { ok: true };
    } catch (e) {
      return { ok: false, message: e?.response?.data?.message || "Signup failed" };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try { await api.post("/auth/logout"); } catch {}
    localStorage.removeItem("ssh_token");
    localStorage.removeItem("ssh_user");
    setUser(null);
  };

  useEffect(() => {
    const verify = async () => {
      const token = localStorage.getItem("ssh_token");
      if (!token) return;
      try {
        const { data } = await api.get("/auth/me");
        setUser(data.user);
      } catch {
        localStorage.removeItem("ssh_token");
        localStorage.removeItem("ssh_user");
        setUser(null);
      }
    };
    verify();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}