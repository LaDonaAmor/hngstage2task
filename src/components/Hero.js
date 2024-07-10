// src/components/Hero.js

import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import shoeImage from '../assets/heroImg.png';


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Upgrade Your Collections</h1>
        <p>Browse through our unique collections <br/>and shop away.</p>
        <Link to="/shop"><button>Shop Now</button></Link>
        
      </div>
      <div className="hero-image">
        <img src={shoeImage} alt="Shoe" />
      </div>
    </section>
  );
}

export default Hero;
