# SOEN487-Winter2025-Assignment2
This repository is for the source code of the SOEN487 course project at CSSE department in Concordia University.

# 🐾 Microservice Pet Store

A microservices-based pet store system where users can:
- Browse available pets
- Search for cats/dogs
- Learn pet care tips
- Register/login as clients or admins
- Manage orders and products (admin side)

## 👥 Contributors

| Name                      | Student ID |
|:---------------------------|:-----------|
| Fadi Nimer                 | 40183225   |
| Kevin Theam                | -          |
| Samy Arab                  | -          |
| Thaneekan Thankarajah      | -          |

## ⚠️ Important Notice

This project is **partially implemented** for academic purposes.

- ✅ Implemented Services: **User Service**, **Inventory Service**, **Product Service**
- 🚫 Not Implemented: **Order Service** (Checkout, Cart, Order history)

Accordingly:
- Frontshop and Backshop support browsing pets, user authentication, and product management.
- Checkout and order-related features are **non-functional**.

This is intentional and aligned with the project's current scope.

---

## 📦 Project Structure

| Service | Description | Deployed On |
|:--------|:------------|:------------|
| **Frontshop** | Customer-facing pet adoption site | Vercel |
| **Backshop** | Admin dashboard for managing products/inventory/users | Vercel |
| **User Service** | Authentication and user management | Render |
| **Inventory Service** | Products (inventory) management | Render |
| **Product Service** | Order management (purchases) | Render |

Each backend service is independently deployable.

---

## 🚀 Live Deployments

| App | URL |
|:----|:----|
| Frontshop | https://micro-service-petstore-gin7-opzz1c1mh-fadis-projects-ae718ae5.vercel.app/ |
| Backshop | https://micro-service-petstore.vercel.app/ |
| User Service | https://microservicepetstore.onrender.com |
| Inventory Service | https://microservicepetstore-2.onrender.com |
| Product Service | https://microservicepetstore-1.onrender.com |

---

## 🛠️ Local Development

### Prerequisites

- Node.js >= 18
- MongoDB Atlas or local MongoDB instance
- (optional) Docker for MongoDB locally (run: docker run --name mongodb -d -p 27017:27017 mongo)

---

### 1. Clone the repo

### 2. Environment Variables

Each service requires a .env file
Example .env for User Service
```
PORT=5004
MONGO_URL=mongodb+srv://<your-db-connection-string>
JWT_SECRET=your_super_secret_key
```

### 3. Start Services Locally

On separate terminals for each services:
  Navigate to the service's directory
  Example navigating to the user-service from the root directory:
  ```
  cd ./service/user-service
  ```
  Install dependencies and run the service
  ```
  npm install
  node index.js
  ```

### 4. Start Frontend Applications Locally

On separate terminals for each frontend application:
  Navigate to the application's directory
  Example navigating to the backshop from the root directory:
  ```
  cd ./frontend-backshop/backshop
  ```
  Install dependencies and run the application
  ```
  npm install
  npm run dev
  ```
---

## Technolohies Used

- ⚛️ **React.js** + **Vite** — Frontend Framework
- 🖥️ **Node.js** + **Express.js** — Backend Framework
- 🍃 **MongoDB** + **Mongoose** — Database and ORM
- 🔒 **JWT** Authentication — Secure API Access
- 🎨 **Bootstrap** — Frontend Styling
- 🐳 **Docker** *(Optional)* — Local MongoDB Container
- ▲ **Vercel** — Frontend Hosting
- 🚀 **Render** — Backend Hosting
