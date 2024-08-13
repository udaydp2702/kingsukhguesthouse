import React, { useState, useEffect } from 'react';

import './Navbar.css';


const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="king">
        <ul>
          <li><a href='/'>Kingsukh Guest House</a></li>
        </ul>
      </div>
      <div className="toggle-button" onClick={handleToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navlist ${menuOpen ? 'open' : '*'}`}>
        <li><a href='#Home'>Home</a></li>
        <li><a href='#About'>About</a></li>
        <li><a href='#Services'>Services</a></li>
        <li><a href='#Rooms'>Rooms</a></li>
        <li><a href='#Gallery'>Gallery</a></li>
        <li><a href='#Contact'>Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
