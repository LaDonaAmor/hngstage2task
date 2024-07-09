import React, { useState } from 'react';
import '../components/Shop.css';
import { Link } from 'react-router-dom';
import arrowRightSvg from '../assets/svg/arrowRight.svg';
import outlineHeart from '../assets/svg/outline-heart.svg';
import filledHeart from '../assets/svg/filled-heart.svg'; // Assuming you have a filled heart SVG

const Product = ({ id, brand, name, price, color, image, onClick, brandFontSize, nameFontSize, priceFontSize }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const productInfoStyle = {
    color: 'white',
    position: 'relative',
    top: '20px',
    left: '-80px',
  };

  const brandStyle = {
    fontSize: brandFontSize || '12px', // Default font size for brand
  };

  const nameStyle = {
    fontSize: nameFontSize || '18px', // Default font size for name
    fontWeight: 'bold',
    marginTop: '5px',
    marginRight: '-40px', // Adjusted margin for spacing
  };

  const priceStyle = {
    fontSize: priceFontSize || '16px', // Default font size for price
    marginBottom: '-45px', // Adjusted margin top to separate from name
    display: 'block', // Ensures the price appears on a new line
    marginTop: '2px',
    marginRight: '52px', // Adjusted margin for spacing
  };

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="product-card" style={{ backgroundColor: color }}>
      <div className="product-info" style={productInfoStyle}>
        <span className="product-brand" style={brandStyle}>{brand}</span>
        <h3 className="product-name" style={nameStyle}>{name}</h3>
        <span className="product-price" style={priceStyle}>{price}</span>
      </div>
      <button className="favorite-btn" onClick={handleFavoriteClick}>
        <img src={isFavorited ? filledHeart : outlineHeart} alt="fav" />
      </button>
      <img src={image} alt={`${brand} ${name}`} className="product-image" />
      <Link to={`/product/${id}`} className="details-btn">
        <img src={arrowRightSvg} alt="arrow-right" />
      </Link>
    </div>
  );
};

export default Product;