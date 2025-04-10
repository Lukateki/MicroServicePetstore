import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="d-flex flex-column col-md-3 col-lg-2 bg-light sidebar p-3">
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/browse">Browse Available Pets</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/find">Find a Dog/Cat</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/dog-care">Dog Care</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/cat-care">Cat Care</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/giveaway">Have a Pet to Give Away</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/login">Sign In/Up</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/checkout">Checkout</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
