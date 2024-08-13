import React from 'react';
import small from './assests/small.jpg-1.jpg';
import flower from './assests/flower.jpg-page-001.jpg';
import baranti from './assests/baranti.webp-1.jpg';
import mithondam from './assests/mithonDam.webp-1.jpg';
import palash from './assests/palash.webp-1.jpg';
import large from './assests/ayodhya.webp-page-001.jpg';
import './gallery.css';

const Gallery = () => {
  return (
    <div id='Gallery'>
      <div className="gallery" >
        <center><h2>GALLERY______</h2></center>
      </div>
      <div className="gallery-grid">
        <img src={small} alt="Gallery" />
        <img src={flower} alt="Gallery" />
        <img src={mithondam} alt="Gallery" />
        <img src={baranti} alt="Gallery" />
        <img src={palash} alt="Gallery" />
        <img src={large} alt="Gallery" />
      </div>
    </div>
  );
};

export default Gallery;
