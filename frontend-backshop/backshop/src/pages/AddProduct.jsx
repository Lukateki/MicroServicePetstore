import React, { useState } from "react";

function AddProduct() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "Cat",
        price: "",
        costPerItem: "",
        sku: "",
        location: "",
    });
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("token");

        try {
            // Step 1: Create product
            const response = await fetch('http://localhost:5001/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    name: formData.title,
                    description: formData.description,
                    category: formData.category,
                    price: parseFloat(formData.price),
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Server error:', errorText);
                throw new Error('Failed to add product');
            }

            const product = await response.json(); // ✅ Get product _id

            // Step 2: Create inventory with 0 quantity
            const inventoryRes = await fetch('http://localhost:5003/inventory', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    productId: product._id,
                    quantity: 0
                }),
            });

            if (!inventoryRes.ok) {
                const errorText = await inventoryRes.text();
                console.error('Inventory error:', errorText);
                throw new Error('Failed to create inventory record');
            }

            // ✅ Done
            alert('✅ Product and inventory created successfully!');
            window.location.href = '/products';

            // Reset form
            setFormData({
                title: "",
                description: "",
                category: "Cat",
                price: "",
                costPerItem: "",
                sku: "",
                location: "",
            });
            setFile(null);
        } catch (error) {
            console.error('Client error:', error);
            alert('❌ Failed to add product.');
        }
    };



    return (
        <div>
            <h1>Add New Product</h1>
            <form onSubmit={handleSubmit} style={{ maxWidth: "700px" }}>
                <div style={{ marginBottom: "15px" }}>
                    <label>Title:</label><br />
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        style={{ width: "100%" }}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>Description:</label><br />
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        style={{ width: "100%" }}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>Media:</label><br />
                    <input
                        type="file"
                        onChange={handleFileChange}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>Category:</label><br />
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        style={{ width: "100%" }}
                    >
                        <option value="Cat">Cat</option>
                        <option value="Dog">Dog</option>
                        <option value="Pet Supplies">Pet Supplies</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Food">Food, Beverage, and Tobacco</option>
                    </select>
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>Price:</label><br />
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        style={{ width: "100%" }}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>Cost per Item:</label><br />
                    <input
                        type="number"
                        name="costPerItem"
                        value={formData.costPerItem}
                        onChange={handleChange}
                        style={{ width: "100%" }}
                    />
                </div>

                <div style={{ marginBottom: "15px" }}>
                    <label>SKU (Stock Keeping Unit):</label><br />
                    <input
                        type="text"
                        name="sku"
                        value={formData.sku}
                        onChange={handleChange}
                        style={{ width: "100%" }}
                    />
                </div>


                <div style={{ marginBottom: "15px" }}>
                    <label>Location:</label><br />
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        style={{ width: "100%" }}
                    />
                </div>

                <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                    <button type="button" style={{ backgroundColor: "#f0ad4e", border: "none", padding: "10px", color: "white", cursor: "pointer" }}>
                        Archive Product
                    </button>
                    <button type="button" style={{ backgroundColor: "#d9534f", border: "none", padding: "10px", color: "white", cursor: "pointer" }}>
                        Delete Product
                    </button>
                    <button type="submit" style={{ backgroundColor: "#5cb85c", border: "none", padding: "10px", color: "white", cursor: "pointer" }}>
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddProduct;
