import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/colour=onDark2.png';
import search from '../assets/svg/search.svg';
import cart from '../assets/svg/cart.svg';
import heart from '../assets/svg/outline-heart.svg';
import { Link, NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className={isMobileMenuOpen ? 'mobile-menu' : ''}>
        <ul>
          <li><NavLink exact to="/" onClick={handleMenuClose} activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/shop" onClick={handleMenuClose} activeClassName="active">Shop</NavLink></li>
          <li><NavLink to="/contactus" onClick={handleMenuClose} activeClassName="active">Contact</NavLink></li>
        </ul>
      </nav>
      <div className="icons">
        <Link to="/shop" className="icon-button hidden-mobile"><img src={search} alt='search' /></Link>
        <Link to="/cart" className="icon-button">
          <img src={cart} alt='cart' />
          <span className="cart-notification"></span>
        </Link>
        <Link to="/cart" className="icon-button hidden-mobile"><img src={heart} alt='fav' /></Link>
        <button className="hamburger" onClick={handleMenuToggle}>
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;
