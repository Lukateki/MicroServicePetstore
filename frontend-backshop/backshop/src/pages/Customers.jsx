import React from "react";

function Customers() {
  return (
    <div>
      <h1>Customer List</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead style={{ backgroundColor: "#343a40", color: "#ffffff" }}>
          <tr>
            <th style={thStyle}>First Name</th>
            <th style={thStyle}>Last Name</th>
            <th style={thStyle}>User Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Phone Number</th>
            <th style={thStyle}>Address</th>
            <th style={thStyle}>Orders</th>
            <th style={thStyle}>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer.username} style={{ backgroundColor: index % 2 === 0 ? "#f8f9fa" : "#ffffff" }}>
              <td style={tdStyle}>{customer.firstName}</td>
              <td style={tdStyle}>{customer.lastName}</td>
              <td style={tdStyle}>{customer.username}</td>
              <td style={tdStyle}>{customer.email}</td>
              <td style={tdStyle}>{customer.phone}</td>
              <td style={tdStyle}>{customer.address}</td>
              <td style={tdStyle}>{customer.orders}</td>
              <td style={tdStyle}>{customer.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const customers = [
  {
    firstName: "Liam",
    lastName: "Nguyen",
    username: "liam.n",
    email: "liam.nguyen@example.com",
    phone: "5551234567",
    address: "12 Maple St, Toronto",
    orders: 5,
    amount: "240.00",
  },
  {
    firstName: "Sophia",
    lastName: "Kim",
    username: "sophiak",
    email: "sophia.kim@example.com",
    phone: "5559876543",
    address: "88 Elm Ave, Vancouver",
    orders: 3,
    amount: "115.75",
  },
  {
    firstName: "Ethan",
    lastName: "Ali",
    username: "ethan.ali",
    email: "ethan.ali@example.com",
    phone: "5554567890",
    address: "305 Birch Blvd, Calgary",
    orders: 7,
    amount: "325.99",
  },
  {
    firstName: "Maya",
    lastName: "Patel",
    username: "maya_p",
    email: "maya.patel@example.com",
    phone: "5552223333",
    address: "410 Cedar Cres, Ottawa",
    orders: 2,
    amount: "79.50",
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

export default Customers;
