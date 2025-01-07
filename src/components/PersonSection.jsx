// PersonSection.jsx
import React from 'react';
import '../assets/style/PersonSection.css';
import image1 from '../assets/images/next2.jpg';
import image2 from '../assets/images/next3.jpg';
import image3 from '../assets/images/next4.jpg';
import image4 from '../assets/images/next5.jpg';

const characterData = [
  {
    id: 1,
    name: 'MARIA',
    codeName: 'RETR0',
    image: image1,
    role: 'HACKER'
  },
  {
    id: 2,
    name: 'SITARA',
    codeName: 'ART3MISS',
    image: image2,
    role: 'ARTIST'
  },
  {
    id: 3,
    name: 'WRENCH',
    codeName: 'CH40S',
    image: image3,
    role: 'ENGINEER'
  },
  {
    id: 4,
    name: 'JOSH',
    codeName: 'H4WK',
    image: image4,
    role: 'ANALYST'
  }
];

const PersonSection = () => {
  return (
    <section className="person-section" id="person">
      <div className="container">
        <div className="section-header">
          <h2 className="glitch-text">PERSON/</h2>
          <div className="header-line"></div>
        </div>
        
        <div className="row character-grid">
          {characterData.map((character) => (
            <div key={character.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div className="character-card">
                <div className="card-inner">
                  <div className="card-front">
                    <div className="image-container">
                      <img 
                        src={character.image} 
                        alt={character.name}
                        className="character-image" 
                      />
                      <div className="image-overlay"></div>
                    </div>
                    <div className="character-info">
                      <h3 className="character-name">{character.name}</h3>
                      <p className="character-code">{character.codeName}</p>
                      <p className="character-role">{character.role}</p>
                    </div>
                    <div className="card-glitch-effect"></div>
                  </div>
                </div>
                <div className="card-reflection"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonSection;