import React, { useEffect, useState } from "react";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Unauthorized: Please log in as Admin");
        return;
      }

      try {
        const res = await fetch("http://localhost:5004/users", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Failed to fetch users");
        }

        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "2rem", backgroundColor: "#ffffff", minHeight: "80vh" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h1 className="mb-4">Registered Users</h1>

        {error && (
          <div style={{ color: "red", marginBottom: "1rem" }}>
            {error}
          </div>
        )}

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ backgroundColor: "#343a40", color: "#ffffff" }}>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} style={{ backgroundColor: "#f8f9fa" }}>
                <td style={tdStyle}>{user.name}</td>
                <td style={tdStyle}>{user.email}</td>
                <td style={tdStyle}>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const thStyle = {
  padding: "12px",
  textAlign: "left",
  borderBottom: "1px solid #dee2e6",
};

const tdStyle = {
  padding: "12px",
  textAlign: "left",
  borderBottom: "1px solid #dee2e6",
};

export default AdminUsers;
