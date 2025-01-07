// StatsSection.jsx
import React from 'react';
import '../assets/style/statsGall.css';

const StatsSection = () => {
  const stats = [
    { name: 'HACKING', value: 85, color: '#b026ff' },
    { name: 'COMBAT', value: 75, color: '#ff2656' },
    { name: 'STEALTH', value: 90, color: '#26ffb0' },
    { name: 'DRIVING', value: 70, color: '#2656ff' }
  ];

  return (
    <section className="stats-section">
      <div className="cyber-lines"></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="character-details">
              <h3 className="details-title">CHARACTER PROFILE</h3>
              <div className="details-grid">
                <div className="detail-item">
                  <span className="detail-label">NAME</span>
                  <span className="detail-value">IDIN ISKANDAR</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">CITY</span>
                  <span className="detail-value">BANDUNG, JAWABARAT</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">PENDIDIKAN</span>
                  <span className="detail-value">S.KOM [Sarjana Komedi]</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">STATUS</span>
                  <span className="detail-value active">ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;