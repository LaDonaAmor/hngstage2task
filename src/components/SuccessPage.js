import React from 'react';
import { Link } from 'react-router-dom';
import './SuccessPage.css';
import successImage from '../assets/emoji.png'; // Adjust the path as needed

const SuccessPage = () => {
  return (
    <div className="success-page-container">
      <main className="main-content">
        <img src={successImage} alt="Success" className="success-image" />
        <h1 className="success-title">Successful</h1>
        <p className="success-message">Thanks for shopping with us</p>
        <Link to="/shop" className="explore-more-button">Explore More</Link>
      </main>
    </div>
  );
};

export default SuccessPage;
