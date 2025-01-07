// Navbar.jsx
import React, { useState } from 'react';
import '../assets/style/Navban.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md navbar-dark custom-navbar">
      <div className="container">
        <a className="navbar-brand glitch-effect" href="/">
          CYBER_PUNK
        </a>
        <button
          className="navbar-toggler"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link cyber-link" href="#person">PERSON</a>
            </li>
            <li className="nav-item">
              <a className="nav-link cyber-link" href="#features">FEATURES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link cyber-link" href="#gallery">GALLERY</a>
            </li>
            <li className="nav-item">
              <a className="nav-link cyber-link" href="/about">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;