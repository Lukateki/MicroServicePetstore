import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState([]);
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        fetch('https://microservicepetstore-1.onrender.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error('Error fetching products:', err));
    }, []);

    useEffect(() => {
        const fetchQuantities = async () => {
            try {
                const token = localStorage.getItem("token"); // 👈 Get the saved token

                const res = await fetch('https://microservicepetstore-2.onrender.com/inventory', {
                    headers: {
                        'Authorization': `Bearer ${token}` // 👈 Add this header
                    }
                });

                const data = await res.json();
                const quantityMap = {};
                data.forEach(record => {
                    quantityMap[record.productId] = record.quantity;
                });
                setQuantities(quantityMap);
            } catch (err) {
                console.error("Error fetching inventory:", err);
            }
        };

        fetchQuantities();
    }, []);


    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <h1>Product List</h1>
                <Link to="/add-product" style={buttonStyle}>
                    Add Product
                </Link>
            </div>

            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead style={{ backgroundColor: "#343a40", color: "#ffffff" }}>
                    <tr>
                        <th style={thStyle}>Product</th>
                        <th style={thStyle}>Inventory</th>
                        <th style={thStyle}>Category</th>
                        <th style={thStyle}>Description</th>
                        <th style={thStyle}>Vendor</th> {/* Add Vendor column */}
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product._id} style={{ backgroundColor: index % 2 === 0 ? "#f8f9fa" : "#ffffff" }}>
                            <td style={tdStyle}>{product.name}</td>
                            {/*currently have it so that it fetches real stock value from the inventory service based on the product id*/}
                            <td style={tdStyle}>
                                {quantities[product._id] !== undefined ? quantities[product._id] : 'Loading...'}
                            </td>
                            <td style={tdStyle}>{product.category}</td>
                            <td style={tdStyle}>{product.description}</td>
                            <td style={tdStyle}>Adopt A-Cat/Dog Org</td> {/* Hardcoded vendor */}
                        </tr>
                    ))}
                </tbody>
            </table>
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

const buttonStyle = {
    display: "inline-block",
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    textDecoration: "none",
};

export default Products;
