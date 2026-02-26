import { useEffect, useMemo, useRef, useState } from "react";
import { io } from "socket.io-client";
import api, { API_BASE } from "../../services/api.js";
import { useAuth } from "../../state/AuthContext.jsx";

export default function Chat() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [active, setActive] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);

  const myId = user?._id;

  const room = useMemo(() => {
    if (!active || !myId) return "";
    const a = String(myId);
    const b = String(active._id);
    const [x, y] = [a, b].sort();
    return `room:${x}:${y}`;
  }, [active, myId]);

  useEffect(() => {
    const s = io(API_BASE.replace("/api", ""), { withCredentials: true });
    socketRef.current = s;

    s.on("connect", () => {
      if (myId) s.emit("user:online", { userId: myId });
    });

    s.on("chat:message", (msg) => {
      if (msg.room === room) setMessages((m) => [...m, msg]);
    });

    return () => s.disconnect();
  }, [myId, room]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const { data } = await api.get("/users");
        setUsers(data);
      } catch {
        setUsers([]);
      }
    };
    loadUsers();
  }, []);

  useEffect(() => {
    const loadHistory = async () => {
      if (!room) return;
      try {
        const { data } = await api.get(`/chat/history?room=${encodeURIComponent(room)}`);
        setMessages(data);
      } catch {
        setMessages([]);
      }
    };
    loadHistory();
  }, [room]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!text.trim() || !room) return;
    const payload = {
      room,
      text: text.trim(),
      from: myId,
      to: active._id,
      ts: Date.now(),
    };
    socketRef.current?.emit("chat:message", payload);
    setMessages((m) => [...m, { ...payload, self: true }]);
    setText("");
  };

  return (
    <section className="container">
      <div className="grid card chat-wrap">
        <aside className="card chat-list">
          <h3>People</h3>
          {users.filter(u => u._id !== myId).map(u => (
            <div
              key={u._id}
              className="card"
              style={{
                cursor: "pointer",
                padding: 10,
                marginBottom: 8,
                borderColor: active?._id === u._id ? "var(--brand)" : "var(--border)",
              }}
              onClick={() => setActive(u)}
            >
              <b>{u.username}</b>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>{u.email}</div>
            </div>
          ))}
        </aside>

        <div className="chat-window">
          <div className="chat-messages">
            {active ? (
              messages.length ? (
                messages.map((m, i) => {
                  const isMe = String(m.from) === String(myId) || m.self;
                  return (
                    <div key={i} className={`msg ${isMe ? "me" : ""}`}>
                      <div style={{ fontSize: 13, color: "var(--muted)" }}>
                        {isMe ? "You" : active.username}
                      </div>
                      <div>{m.text}</div>
                    </div>
                  );
                })
              ) : (
                <div className="empty">Say hi to {active.username}</div>
              )
            ) : (
              <div className="empty">Select a person to start chatting</div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <input
              className="input"
              placeholder="Type your message..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" ? sendMessage() : null}
              disabled={!active}
            />
            <button className="btn" onClick={sendMessage} disabled={!active}>Send</button>
          </div>
        </div>
      </div>
    </section>
  );
}