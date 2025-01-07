// Footer.jsx
import React from 'react';
import '../assets/style/LibFoot.css';
import Images from '../assets/images/next1.jpg'

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="vehicle-showcase">
        <div className="vehicle-model">
          {/* 3D vehicle would be an image or 3D model */}
          <img src={Images} alt="Featured Vehicle" className="vehicle-image" />
          <div className="vehicle-specs">
            <div className="spec-item">
              <span className="spec-label">MODEL</span>
              <span className="spec-value">CYBERTECH X-1</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">CLASS</span>
              <span className="spec-value">INFILTRATOR</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer-brand">
                <h3 className="footer-logo">WATCH_DOGS</h3>
                <p className="footer-tagline">HACK THE SYSTEM</p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="footer-links">
                <div className="footer-section">
                  <h4>EXPLORE</h4>
                  <ul>
                    <li><a href="#characters">Characters</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                  </ul>
                </div>
                <div className="footer-section">
                  <h4>CONNECT</h4>
                  <ul>
                    <li><a href="#discord">Discord</a></li>
                    <li><a href="#twitter">Twitter</a></li>
                    <li><a href="#instagram">Instagram</a></li>
                  </ul>
                </div>
                <div className="footer-section">
                  <h4>LEGAL</h4>
                  <ul>
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#terms">Terms of Service</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2025 WATCH_DOGS. By Idin Code All rights reserved.</p>
        </div>
      </div>
      
      <div className="cyber-elements">
        <div className="element element-1"></div>
        <div className="element element-2"></div>
        <div className="element element-3"></div>
      </div>
    </footer>
  );
};

export default Footer;