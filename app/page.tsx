import React from "react";
import { getUsers } from "./lib/getUsers";

// This is a server component by default in the app directory
export default async function HomePage() {
  const { users, error } = await getUsers();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        background: "#181818",
        minHeight: "100vh",
        color: "#eee",
      }}>
      <h1>Welcome to My Next.js App</h1>
      <p>This is the homepage of your Next.js application.</p>
      {error && <div style={{ color: "#ff6b6b", margin: "1rem 0", fontWeight: "bold" }}>Error: {error}</div>}
      <div style={{ width: "100%", maxWidth: 600, overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            margin: "0 auto",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            background: "#222",
            color: "#eee",
          }}>
          <thead>
            <tr style={{ background: "#333" }}>
              <th style={{ padding: "12px", border: "1px solid #444" }}>ID</th>
              <th style={{ padding: "12px", border: "1px solid #444" }}>Name</th>
              <th style={{ padding: "12px", border: "1px solid #444" }}>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: { id: number; name: string; email: string }) => (
              <tr key={user.id}>
                <td style={{ padding: "10px", border: "1px solid #444", textAlign: "center" }}>{user.id}</td>
                <td style={{ padding: "10px", border: "1px solid #444" }}>{user.name}</td>
                <td style={{ padding: "10px", border: "1px solid #444" }}>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
