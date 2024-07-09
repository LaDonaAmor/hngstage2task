// src/components/Header.js

import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/colour=onDark2.png';
import search from '../assets/svg/search.svg';
import cart from '../assets/svg/cart.svg';
import heart from '../assets/svg/outline-heart.svg';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className={isMobileMenuOpen ? 'mobile-menu' : ''}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/contactus">Contact</Link></li>
        </ul>
      </nav>
      <div className="icons">
        <Link to="/shop" className="icon-button"><img src={search} alt='search' /></Link>
        <Link to="/cart" className="icon-button"><img src={cart} alt='cart' /></Link>
        <Link to="/cart" className="icon-button"><img src={heart} alt='fav' /></Link>
        <button className="hamburger" onClick={handleMenuToggle}>
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;
