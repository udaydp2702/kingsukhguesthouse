import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footermain">
        <div className="footer1">
          <h2><a href="/">Kingsukh Guest House</a></h2>
          <b>Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.</b><br /><br /><br />
          <div className="buttton">
            <button> <h2><a href="https://api.whatsapp.com/send?phone=919007062180">BOOKNOW</a></h2></button>
          </div>
        </div>
        <div className="footer2">
          <h2><a href="/">QUICK LINKS</a></h2>
          <h3>Browse Destinations<br /><br />
            Special Offers & Packages<br /><br />
            Room Types & Amenities<br /><br />
            Customer Reviews & Ratings<br /><br />
            Travel Tips & Guides</h3><br /><br />
        </div>
        <div className="footer3">
          <h2><a href="/">OUR SERVICES</a></h2>
          <h3>Concierge Assistance<br /><br />
            Flexible Booking Options<br /><br />
            Airport Transfers<br /><br />
            Wellness & Recreation</h3><br />
        </div>
        <div className="footer4">
          <h2><a href="/">CONTACT US</a></h2>
          <h3>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156<br /><br />
            kkghosh0099@gmail.com<br /><br />
            +91 9007062180</h3><br /><br /><br /><br />
          <div className="icon">
            <a href="/Home" target="./blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.instagram.com/kingsukhguesthouse/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="/Home" target="./blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="/Home" target="./blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2024 Kingsukh Guest House. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
