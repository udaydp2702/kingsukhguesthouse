import React, { useState, useEffect } from "react";
import about from "./assests/out.jpg-1.jpg";
import "./App.css";
import { Button } from "react-bootstrap";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading time (2 seconds)

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="main" id="About">
      <div className="content-container">
        <div className="about-image">
          <img src={about} alt="About Us" />
        </div>
        <div className="box2">
          <h3>ABOUT US_______</h3>
          <br />
          <h1>
            The Best Holidays Start <br />
            Here!
          </h1>
          <br />
          <p>
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped by
            the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill,
            Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the
            captivating Panchat Dam. Revel in the embrace of comfort, relish
            delightful meals, and unwind in our verdant garden oasis. Your ideal
            retreat beckons, promising a harmonious blend of nature's beauty and
            heartfelt hospitality. Explore the hidden gems of Purulia, creating
            memories that linger long after your stay.
          </p>
          <h2>
            <b>
              Address:
              <a href="https://maps.app.goo.gl/RWtLScqj3Mnt6Kf96">
                Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
                72315
              </a>
            </b>
          </h2>
          <h2>
            Contact Us : <a href="https://api.whatsapp.com/send?phone=919007062180">919007062180</a>
          </h2>
          <div className="btn">
            <Button>
              <a href="https://api.whatsapp.com/send?phone=919007062180">BOOK NOW</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
