import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          Safar
        </Link>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/about-us" className="nav-link">
          About Us
        </Link>
        <Link to="/contact-us" className="nav-link">
          Contact Us
        </Link>
        <Link to="/outstation" className="nav-link">
          Outstation
        </Link>
      </div>
      {/* <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div> */}
    </nav>
  );
};

export default Navbar;
