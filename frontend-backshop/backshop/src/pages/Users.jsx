import React, { useState } from "react";

function Users() {
    const [isRegister, setIsRegister] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "client",
    });
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccessMessage("");

        if (isRegister && formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const endpoint = isRegister ? "https://microservicepetstore.onrender.com:5004/auth/register" : "https://microservicepetstore.onrender.com:5004/auth/login";

            const body = isRegister? { 
                name: formData.name,
                email: formData.email,
                password: formData.password,
                role: formData.role
            }
            : { 
                email: formData.email,
                password: formData.password
            };

            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
        
            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Something went wrong");
            }
        
            if (isRegister) {
                setSuccessMessage("User registered successfully! You can now log in.");
                setFormData({ name: "", email: "", password: "", confirmPassword: "", role: "client" }); // Reset form
            } else {
                const data = await res.json();
                localStorage.setItem("token", data.token);
                setSuccessMessage(`Welcome back, ${data.name}!`);
            }
        } catch (err) {
            setError(err.message);
        }
    };
    

    return (
        <div style={{ padding: "2rem", backgroundColor: "#ffffff", minHeight: "80vh" }}>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
                    <button
                        onClick={() => { setIsRegister(false); setError(""); setSuccessMessage(""); }}
                        style={{
                        padding: "10px 20px",
                        border: !isRegister ? "2px solid #007bff" : "1px solid #ccc",
                        backgroundColor: !isRegister ? "#007bff" : "#ffffff",
                        color: !isRegister ? "#ffffff" : "#000000",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        cursor: "pointer"
                        }}
                    >
                        Login
                    </button>
                    <button
                        onClick={() => { setIsRegister(true); setError(""); setSuccessMessage(""); }}
                        style={{
                        padding: "10px 20px",
                        marginLeft: "10px",
                        border: isRegister ? "2px solid #007bff" : "1px solid #ccc",
                        backgroundColor: isRegister ? "#007bff" : "#ffffff",
                        color: isRegister ? "#ffffff" : "#000000",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        cursor: "pointer"
                        }}
                    >
                        Register
                    </button>
                </div>

                <h1 style={{ marginBottom: "1.5rem", textAlign: "center" }}>
                    {isRegister ? "Register New User" : "Login"}
                </h1>

                {error && <div style={{ color: "red", marginBottom: "1rem", textAlign: "center" }}>{error}</div>}
                {successMessage && <div style={{ color: "green", marginBottom: "1rem", textAlign: "center" }}>{successMessage}</div>}

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                    {isRegister && (
                        <div>
                            <label style={{ display: "block", marginBottom: "0.5rem" }}>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-control"
                                required
                                style={{ padding: "10px", borderRadius: "6px", width: "100%" }}
                            />
                        </div>
                    )}

                    <div>
                        <label style={{ display: "block", marginBottom: "0.5rem" }}>Email:</label>
                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        required
                        style={{ padding: "10px", borderRadius: "6px", width: "100%" }}
                        />
                    </div>

                    <div>
                        <label style={{ display: "block", marginBottom: "0.5rem" }}>Password:</label>
                        <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-control"
                        required
                        style={{ padding: "10px", borderRadius: "6px", width: "100%" }}
                        />
                    </div>

                    {isRegister && (
                        <div>
                            <label style={{ display: "block", marginBottom: "0.5rem" }}>Confirm Password:</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="form-control"
                                required
                                style={{ padding: "10px", borderRadius: "6px", width: "100%" }}
                            />
                        </div>
                    )}
                    {isRegister && (
                        <div style={{ marginBottom: "15px" }}>
                            <label>
                            <input
                                type="checkbox"
                                checked={formData.role === 'admin'}
                                onChange={(e) => setFormData(prev => ({
                                ...prev,
                                role: e.target.checked ? 'admin' : 'client'
                                }))}
                            />
                                Register as Admin
                            </label>
                        </div>
                    )}




                    <button
                        type="submit"
                        style={{
                        marginTop: "1rem",
                        padding: "12px",
                        backgroundColor: "#28a745",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        cursor: "pointer",
                        width: "100%"
                        }}
                    >
                        {isRegister ? "Register" : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Users;
