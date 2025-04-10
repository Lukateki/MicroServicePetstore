import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthChecker() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expiry = payload.exp;
      const now = Math.floor(Date.now() / 1000);

      if (expiry < now) {
        localStorage.removeItem("token");
        navigate("/users");
      }
    } catch (err) {
      console.error("Invalid token", err);
      localStorage.removeItem("token");
      navigate("/users");
    }
  }, [navigate]);

  return null;
}

export default AuthChecker;
