import React from 'react';
import '../assets/style/LibFoot.css';
import Image1 from '../assets/images/next1.jpg';
import Image2 from '../assets/images/next2.jpg';
import Image3 from '../assets/images/next3.jpg';
import Image4 from '../assets/images/next4.jpg';
import Image5 from '../assets/images/next5.jpg';
import Image6 from '../assets/images/next6.jpg';

const PictureLibrary = () => {
  const libraryImages = [
    {
      id: 1,
      src: '../assets/images/next1.jpg',
      alt: 'Game Screenshot 1',
      gridArea: 'span 2 / span 2',
    },
    {
      id: 2,
      src: Image2,
      alt: 'Game Screenshot 2',
      gridArea: 'span 1 / span 1',
    },
    {
      id: 3,
      src: Image3,
      alt: 'Game Screenshot 3',
      gridArea: 'span 2 / span 1',
    },
    {
      id: 4,
      src: Image4,
      alt: 'Game Screenshot 4',
      gridArea: 'span 1 / span 2',
    },
    {
      id: 5,
      src: Image5,
      alt: 'Game Screenshot 5',
      gridArea: 'span 1 / span 1',
    },
  ];

  return (
    <section className="picture-library-section">
      <div className="cyber-particles"></div>
      <div className="container">
        <div className="section-header">
          <h2 className="library-title glitch-effect">THE PICTURE LIBRARY/</h2>
          <div className="title-underline"></div>
        </div>

        <div className="library-grid">
          {libraryImages.map((image) => (
            <div
              key={image.id}
              className="library-item"
              style={{ gridArea: image.gridArea }}
            >
              <div className="image-container">
                <img src={image.src} alt={image.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PictureLibrary;