// src/components/Hero.js

import React from 'react';
import './Hero.css';
import shoeImage from '../assets/heroImg.png';


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Upgrade Your Collections</h1>
        <p>Browse through our unique collections <br/>and shop away.</p>
        <button>Shop Now</button>
        
      </div>
      <div className="hero-image">
        <img src={shoeImage} alt="Shoe" />
      </div>
    </section>
  );
}

export default Hero;
