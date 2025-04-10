import React, { useEffect, useState } from 'react';

function Inventory() {
    const [products, setProducts] = useState([]);
    const [inventory, setInventory] = useState([]);
    const [quantities, setQuantities] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productRes = await fetch('http://localhost:5001/products');
                const productData = await productRes.json();

                const inventoryRes = await fetch('http://localhost:5003/inventory', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}` // assuming token is stored
                    }
                });
                const inventoryData = await inventoryRes.json();

                // Create lookup for current inventory quantities
                const quantityMap = {};
                inventoryData.forEach(record => {
                    quantityMap[record.productId] = record.quantity;
                });

                setProducts(productData);
                setInventory(inventoryData);
                setQuantities(quantityMap);
            } catch (error) {
                console.error('Error fetching inventory data:', error);
            }
        };

        fetchData();
    }, []);

    const handleQuantityChange = (productId, value) => {
        setQuantities(prev => ({
            ...prev,
            [productId]: value
        }));
    };

    const handleSave = async (productId) => {
        const quantity = parseInt(quantities[productId]) || 0;

        try {
            const token = localStorage.getItem('token');

            // Update inventory-service
            await fetch(`http://localhost:5003/inventory/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ quantity })
            });

            // Also update product-service stock (optional for display)
            await fetch(`http://localhost:5001/products/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ stock: quantity })
            });

            alert('Inventory updated!');
        } catch (error) {
            console.error('Failed to update inventory:', error);
            alert('Failed to update inventory');
        }
    };

    return (
        <div>
            <h1 style={{ marginBottom: '20px' }}>Inventory Management</h1>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead style={{ backgroundColor: "#343a40", color: "#ffffff" }}>
                <tr>
                    <th style={thStyle}>Product</th>
                    <th style={thStyle}>Current Quantity</th>
                    <th style={thStyle}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product, index) => (
                    <tr key={product._id} style={{ backgroundColor: index % 2 === 0 ? "#f8f9fa" : "#ffffff" }}>
                        <td style={tdStyle}>{product.name}</td>
                        <td style={tdStyle}>
                            <input
                                type="number"
                                value={quantities[product._id] || 0}
                                onChange={(e) => handleQuantityChange(product._id, e.target.value)}
                                style={{ width: '80px', padding: '5px' }}
                            />
                        </td>
                        <td style={tdStyle}>
                            <button
                                onClick={() => handleSave(product._id)}
                                style={buttonStyle}
                            >
                                Save
                            </button>
                        </td>
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
    padding: "6px 12px",
    backgroundColor: "#28a745",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
};

export default Inventory;
