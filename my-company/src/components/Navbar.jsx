import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
        <li style={{ margin: '0 10px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
