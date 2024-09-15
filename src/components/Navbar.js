// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS for styling
import img1 from './assets/3.png';


const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={img1} alt="Fruit.Ai Logo" />
        <span>Fruit.Ai</span>
      </Link>
      <div className="navbar-links">
      <Link to="/" className="navbar-link">HOME</Link>
        <Link to="/auth" className="navbar-link">LOGIN</Link>
        <Link to="/about" className="navbar-link">ABOUT</Link>
      </div>
    </nav>
  );
};

export default Navbar;
