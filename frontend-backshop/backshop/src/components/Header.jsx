import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/users");
  };

  return (
    <header style={{
      width: "100%",
      backgroundColor: "#337aff",
      color: "white",
      padding: "1rem 0",
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: "bold",
      position: "relative"
    }}>
      Backstore Management
      <button
        onClick={handleLogout}
        style={{
          position: "absolute",
          right: "20px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "#dc3545",
          border: "none",
          color: "white",
          padding: "0.5rem 1rem",
          cursor: "pointer",
          borderRadius: "4px"
        }}
      >
        Logout
      </button>
    </header>
  );
}

export default Header;
