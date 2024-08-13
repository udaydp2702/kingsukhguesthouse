import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container" id='Contact'>
      <div className="contact-info">
        <h2>Contact Info</h2><br />
        <h3>Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</h3><br />
        <h3>kkghosh0099@gmail.com</h3><br />
        <div className="contact-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://wa.me/919007062180" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <form className="contact-form">
        <h1>Send a Message</h1>
        <label>First Name</label>
        <input type="text" placeholder="First Name" id="a" />
        <label>Last Name</label>
        <input type="text" placeholder="Last Name" id="b" />
        <label>Email Address</label>
        <input type="email" placeholder="Email Address" id="c" />
        <label>Mobile Number</label>
        <input type="tel" placeholder="Mobile Number" id="d" />
        <label>Write Your Message Here</label>
        <textarea id="e" placeholder="Your Message"></textarea>
        <center><input type="submit" value="Send" /></center>
      </form>
    </div>
  );
};

export default Contact;
