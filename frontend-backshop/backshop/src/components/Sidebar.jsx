import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside style={{
            width: "200px",
            backgroundColor: "#f8f9fa",
            padding: "1rem",
            borderRight: "1px solid #dee2e6"
          }}>          
            <ul className="nav flex-column">
                {[
                    { name: "Home", path: "/" },
                    { name: "Users", path: "/users" },
                    { name: "Admin Users", path: "/admin-users" },
                    { name: "Orders", path: "/orders" },
                    { name: "Products", path: "/products" },
                    { name: "Inventory", path: "/inventory" },
                    { name: "Customers", path: "/customers" },
                    { name: "Content", path: "#" },
                    { name: "Finance", path: "#" },
                    { name: "Analytics", path: "#" },
                    { name: "Marketing", path: "#" },
                    { name: "Discounts", path: "#" }
                ].map((item) => (
                    <li className="nav-item mb-2" key={item.name}>
                        <Link to={item.path} className="nav-link" style={{ fontSize: "16px", color: "#007bff" }}>
                        {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Sidebar;
