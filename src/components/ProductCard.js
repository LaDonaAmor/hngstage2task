import React, { useState } from 'react';
import styles from './ProductCard.module.css';
import cart from '../assets/svg/cart.svg';
import plus from '../assets/svg/plus.svg';

function ProductCard({ product, featured }) {
  const [activeSize, setActiveSize] = useState(null); // State to track the active size

  const handleSizeClick = (size) => {
    setActiveSize(size); // Set the clicked size as active
  };

  return (
    <div className={`${styles.productCard} ${featured ? styles.featured : ''}`} style={{ backgroundColor: product.color }}>
      {featured ? (
        <div className={styles.featuredImageContainer}>
          <img src={product.image} alt={product.name} className={styles.featuredProductImage} />
          <button className={styles.favoriteButton}>♡</button>
        </div>
      ) : (
        <div className={styles.imageContainer}>
          <img src={product.image} alt={product.name} className={styles.productImage} />
          <button className={styles.favoriteButton}>♡</button>
        </div>
      )}
      <div className={styles.productInfo}>
        <span className={styles.brand}>{product.brand}</span>
        <h3 className={styles.productName}>{product.name}</h3>
        <span className={styles.price}>{product.price}</span>
      </div>
      {featured && (
        <div className={styles.sizeSelector}>
          <p className={styles.sizeText}>Select Size:</p>
          {product.sizes.map((size, index) => (
            <SizeButton
              key={index}
              size={size}
              isActive={activeSize === size}
              onClick={() => handleSizeClick(size)} // Pass the click handler
            />
          ))}
        </div>
      )}
      <div className={styles.addToCart}>
        {featured && (
          <>
            <button className={styles.incrementButton}>
              <img src={plus} alt='add' className="add" />
            </button>
            <button className={styles.cartButton}>
              <img src={cart} alt='cart' className="cart" />
            </button>      
          </>
        )}
      </div>
    </div>
  );
}

function SizeButton({ size, isActive, onClick }) {
  return (
    <button
      className={`${styles.sizeButton} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      {size}
    </button>
  );
}

export default ProductCard;
