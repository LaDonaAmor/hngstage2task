import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/productsData';
import './ProductDetails.css';
import search from '../assets/svg/search.svg';
import cart from '../assets/svg/cart.svg';

const ProductDetails = () => {
  const { productId } = useParams();
  const [currentProduct, setCurrentProduct] = useState(
    productsData.find((p) => p.id === parseInt(productId))
  );
  const [activeSize, setActiveSize] = useState('xl');

  if (!currentProduct) {
    return <div>Product not found</div>;
  }

  const similarProducts = productsData.filter(
    (p) => p.id !== currentProduct.id && p.type === currentProduct.type
  );

  const handleCardClick = (product) => {
    setCurrentProduct(product);
  };

  return (
    <div className="product-details-container">
      <button className="back-button" onClick={() => window.history.back()}>&larr; Popular</button>
      <div className="main-product-section">
        <div className="product-details-card" style={{ backgroundColor: currentProduct.color }}>
          <div className="product-info-section-top">
            <div className="product-naming">
              <p className="product-brand">{currentProduct.brand}</p>
              <p className="product-name">{currentProduct.name}</p>
            </div>
            <button className="favorite-btn">♡</button>
          </div>
          <div className="product-image-section">
            <img src={currentProduct.image} alt={currentProduct.name} className="product-image" />
          </div>
          <p className="product-price">{currentProduct.price}</p>
        </div>
        <div className="similar-products-section">
          <div className="similar-products-grid">
            {similarProducts.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="similar-product-card"
                style={{ backgroundColor: product.color }}
                onClick={() => handleCardClick(product)}
              >
                <div className="product-info">
                  <span className="product-brand">{product.brand}</span>
                  <h3 className="product-name">{product.name}</h3>
                  <span className="product-price">{product.price}</span>
                </div>
                <img src={product.image} alt={`${product.brand} ${product.name}`} className="product-image" />
                <button className="details-btn">→</button>
              </div>
            ))}
          </div>
          <div className="size-selection">
            <h3>Select size:</h3>
            <div className="sizes">
              {['sm', 'md', 'lg', 'xl', 'xxl'].map((size) => (
                <button
                  key={size}
                  className={`size-button ${activeSize === size ? 'active' : ''}`}
                  onClick={() => setActiveSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="product-actions">
            <button className="add-to-cart"><img src={search} alt="search" /></button>
            <Link to="/cart" className="icon-button">
              <img src={cart} alt="cart" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
