import React from 'react';

function Orders() {
  return (
    <div>
      <h1>Order List</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead style={{ backgroundColor: "#343a40", color: "#ffffff" }}>
          <tr>
            <th style={thStyle}>Order</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Customer</th>
            <th style={thStyle}>Total ($)</th>
            <th style={thStyle}>Payment Status</th>
            <th style={thStyle}>Fulfillment Status</th>
            <th style={thStyle}>Items</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.order} style={{ backgroundColor: index % 2 === 0 ? "#f8f9fa" : "#ffffff" }}>
              <td style={tdStyle}>{order.order}</td>
              <td style={tdStyle}>{order.date}</td>
              <td style={tdStyle}>{order.customer}</td>
              <td style={tdStyle}>{order.total}</td>
              <td style={tdStyle}>{order.paymentStatus}</td>
              <td style={tdStyle}>{order.fulfillmentStatus}</td>
              <td style={tdStyle}>{order.items}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const orders = [
  {
    order: "#1001",
    date: "2024-03-01",
    customer: "Liam Nguyen",
    total: "89.99",
    paymentStatus: "Paid",
    fulfillmentStatus: "Fulfilled",
    items: "Dog Leash, Treats",
  },
  {
    order: "#1002",
    date: "2024-03-02",
    customer: "Sophia Kim",
    total: "29.50",
    paymentStatus: "Refunded",
    fulfillmentStatus: "Unfulfilled",
    items: "Cat Toy",
  },
  {
    order: "#1003",
    date: "2024-03-03",
    customer: "Ethan Ali",
    total: "119.00",
    paymentStatus: "Paid",
    fulfillmentStatus: "Fulfilled",
    items: "Pet Bed",
  },
  {
    order: "#1004",
    date: "2024-03-04",
    customer: "Maya Patel",
    total: "0.00",
    paymentStatus: "Paid",
    fulfillmentStatus: "Unfulfilled",
    items: "Online Advice",
  },
];

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

export default Orders;
