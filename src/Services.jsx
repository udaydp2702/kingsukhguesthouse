import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faPhoneAlt, faUtensils, faCar } from '@fortawesome/free-solid-svg-icons';
import service from "./assests/service.jpg-page-001.jpg";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container" id='Services'>
      <div className="services-image">
        <img src={service} alt="Services" />
      </div>
      <div className="services-content">
        <h3>SERVICES_____</h3>
        <h2>Strive Only For The Best.</h2>
        <h3><FontAwesomeIcon icon={faShieldAlt} /> High Class Security</h3>
        <h3><FontAwesomeIcon icon={faPhoneAlt} /> 24 Hours Room Service</h3>
        <h3><FontAwesomeIcon icon={faUtensils} /> Restaurant</h3>
        <h3><FontAwesomeIcon icon={faCar} /> Tourist Guide Support</h3>
      </div>
    </div>
  );
};

export default Services;
