// Banner.jsx
import React from 'react';
import '../assets/style/Navban.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="glitch-overlay"></div>
      <div className="container">
      <div className="d-flex justify-content-center align-items-center min-vh-30">
            <h1 className="banner-title glitch-text">
              CYBER_PUNK
            </h1>
            <div className="character-group">
              <div className="neon-glow"></div>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;