// frontend/src/components/ProductList.jsx
import React, { useEffect, useState, useContext } from "react"
// Assume CartContext provides addToCart function
import { CartContext } from '../contexts/CartContext';  

function ProductList() {
  const [products, setProducts] = useState([])
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    // Fetch products from the Product microservice
    fetch("https://microservicepetstore-1.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err))
  }, [])

  return (
    <div>
      <h2>Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => {
          const query = e.target.value
          fetch(`https://microservicepetstore-1.onrender.com/products?search=${query}`)
            .then((res) => res.json())
            .then((data) => setProducts(data))
        }}
      />
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <strong>{product.name}</strong> - ${product.price} <br />
            {product.description} <br />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
