// CharacterDetail.jsx
import React from 'react';
import '../assets/style/CharacterDetail.css';

const CharacterDetail = () => {
  return (
    <section className="character-detail-section" id="features">
      <div className="neon-city-bg"></div>
      <div className="overlay-effect"></div>
      
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="character-info-box">
              <div className="glitch-container">
                <h2 className="character-name">MARCO HOLLOWAY/</h2>
              </div>
              <div className="character-stats">
                <div className="stat-item">
                  <span className="stat-label">CLASS:</span>
                  <span className="stat-value">INFILTRATOR</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">SPECIALTY:</span>
                  <span className="stat-value">STEALTH HACKING</span>
                </div>
              </div>
              <p className="character-description">
                A master of stealth and infiltration, Marco Holloway emerged from 
                the shadows of San Francisco's tech underground. With unparalleled 
                hacking abilities and a mysterious past, he became DedSec's most 
                valuable operative in the fight against corporate surveillance.
              </p>
              <div className="skill-bars">
                <div className="skill-item">
                  <label>HACKING</label>
                  <div className="progress">
                    <div className="progress-bar" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <label>STEALTH</label>
                  <div className="progress">
                    <div className="progress-bar" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="character-visual">
              <div className="glitch-image"></div>
              <div className="data-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharacterDetail;