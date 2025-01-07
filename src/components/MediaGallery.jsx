// MediaGallery.jsx
import React, { useState } from 'react';
import '../assets/style/statsGall.css';
import image6 from '../assets/images/6.jpg'
import image7 from '../assets/images/next8.jpg'
import image8 from '../assets/images/next7.jpg'
import image9 from '../assets/images/next4.jpg'
import image10 from '../assets/images/next5.jpg'
import image11 from '../assets/images/next6.jpg'

const MediaGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const galleryItems = [
    { type: 'image', url: image6, thumbnail: image6 },
    { type: 'image', url: image7, thumbnail: image7 },
    { type: 'image', url: image8, thumbnail: image8 },
    { type: 'image', url: image9, thumbnail: image9 },
    { type: 'image', url: image10, thumbnail: image10 },
    { type: 'image', url: image11, thumbnail: image11 }
  ];

  return (
    <section className="media-gallery-section" id="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="glitch-title">IDIN CODE/</h2>
          <div className="title-line"></div>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className={`gallery-item ${item.type}`}
              onClick={() => {
                if (item.type === 'video') {
                  setIsVideoPlaying(true);
                } else {
                  setSelectedImage(item.url);
                }
              }}
            >
              <div className="item-overlay">
                {item.type === 'video' && (
                  <div className="play-button">
                    <i className="play-icon"></i>
                  </div>
                )}
              </div>
              <img src={item.thumbnail} alt={`Gallery item ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for image preview */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img src={selectedImage} alt="Preview" />
            <button className="close-button">×</button>
          </div>
        </div>
      )}

      {/* Modal for video player */}
      {isVideoPlaying && (
        <div className="modal-overlay" onClick={() => setIsVideoPlaying(false)}>
          <div className="modal-content video-player">
            <video controls autoPlay>
              <source src={galleryItems[1].url} type="video/mp4" />
            </video>
            <button className="close-button">×</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MediaGallery;