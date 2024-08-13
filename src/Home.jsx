import React from 'react';
import header from "./assests/header.jpg-page-001 (1).jpg"; // Adjust the path if needed
import "./hero.css"; // Import the CSS file

const Hero = () => {
  return (
    <div className="hero-container" id='Home'>
      <marquee><h1 className="welcome-text">Welcome To Kingsukh Guest House</h1></marquee>
      <div className="imgcont">
        <div className="text-container">
          <h3>Simple - Unique - Friendly</h3>
          <h1>Make Yourself At Home<br />In Our</h1>
          <h1 className="highlight">Guest House.</h1>
        </div>
        <img src={header} alt="Hero" className="hero-image" />
      </div>
      <div className="book">
        <button className="book-button"><h2><a href="https://api.whatsapp.com/send?phone=919007062180">BOOK NOW</a></h2></button>
      </div>
    </div>
  );
};

export default Hero;
