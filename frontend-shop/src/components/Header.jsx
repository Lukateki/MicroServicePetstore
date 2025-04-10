import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="row">
      <div className="col-12 bg-primary text-white text-center p-3">
        <h1>Adopt A-Cat/Dog</h1>
        <img 
          src="/images/catdog.webp" 
          alt="Logo" 
          style={{ width: '5%' }} 
          className="img-fluid"
        />
      </div>
    </header>
  );
}

export default Header;
