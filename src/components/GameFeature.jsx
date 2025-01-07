// GameFeature.jsx
import React from 'react';
import '../assets/style/GameFeature.css';

const GameFeature = () => {
  return (
    <section className="game-feature-section">
      <div className="cyber-grid"></div>
      <div className="container">
        <div className="feature-content">
          <h2 className="feature-title">
            THE GAME BEGINS IN
            <span className="city-name">IDIN CODE</span>
          </h2>
          
          <div className="feature-description">
            <p>Wellcome to creative portfolio design. This Creative portfolio was built by Idin Code, inspired by cyberpunk because I think this cyberpunk themed design is very interesting because it has cool colors and effects so it is pleasing to the eye. I built this project with ReactJS and ViteJS.</p>
          </div>
          
          <div className="action-buttons">
            <button className="cta-button primary">
              PLAY NOW
              <span className="button-glitch"></span>
            </button>
            <button className="cta-button secondary">
              LEARN MORE
              <span className="button-glitch"></span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="floating-elements">
        <div className="cyber-element element-1"></div>
        <div className="cyber-element element-2"></div>
        <div className="cyber-element element-3"></div>
      </div>
    </section>
  );
};

export default GameFeature;