import React, { useState } from 'react';
import ProductCard from './ProductCard';
import styles from './ProductList.module.css';
import backArrow from '../assets/svg/iconOutlined.svg';
import image1 from '../assets/shoes/shoe1.png';
import image2 from '../assets/shoes/shoe2.png';
import image4 from '../assets/shoes/shoe4.png';
import image6 from '../assets/shoes/shoe6.png';
import image7 from '../assets/shoes/shoe7.png';
import image8 from '../assets/shoes/shoe8.png';
import image9 from '../assets/shoes/shoe9.png';
import image10 from '../assets/shoes/shoe10.png';

const products = [
  { id: 1, brand: 'Nike', name: 'Air Max', price: '₦69,999', color: '#735CFF', image: image1, sizes: ['sm', 'md', 'lg', 'xl', 'xxl'], type: 'Popular', gender: 'Both' },
  { id: 2, brand: 'Adidas', name: 'Ultra Boost', price: '₦75,000', color: '#8F8F8F', image: image2, type: 'Popular', gender: 'Male' },
  { id: 3, brand: 'PUMA', name: 'Air Veezy', price: '₦58,000', color: '#E5E92E', image: image9, type: 'Popular', gender: 'Female' },
  { id: 4, brand: 'Vans', name: 'Air Max', price: '₦63,999', color: '#D55CFF', image: image4, type: 'Popular', gender: 'Both' },
  { id: 5, brand: 'ASICS', name: 'Air Boost', price: '₦63,999', color: '#FF9292', image: image7, type: 'Popular', gender: 'Female' },
  { id: 6, brand: 'Nike', name: 'Air Max', price: '₦63,589', color: '#36D199', image: image6, type: 'Popular', gender: 'Male' },
  { id: 7, brand: 'Nike', name: 'Air Max', price: '₦67,999', color: '#DA70D6', image: image7, type: 'Popular', gender: 'Male' },
  { id: 8, brand: 'Nike', name: 'Air Max', price: '₦53,999', color: '#D55CFF', image: image8, type: 'Popular', gender: 'Both' },
  { id: 9, brand: 'Nike', name: 'Air Max', price: '₦60,999', color: '#8F8F8F', image: image9, type: 'New Releases', gender: 'Male' },
  { id: 10, brand: 'Nike', name: 'Air Max', price: '₦85,999', color: '#36D199', image: image10, type: 'Recommended', gender: 'Both' },
];

function ProductList() {
  const [activeCategory, setActiveCategory] = useState('Popular');
  const [activeGender, setActiveGender] = useState('Both');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const handleGenderChange = (gender) => {
    setActiveGender(gender);
  };

  const filteredProducts = products.filter(product => 
    (activeCategory === 'All' || product.type === activeCategory) &&
    (activeGender === 'Both' || product.gender === activeGender)
  );

  const featuredProduct = products[0];
  const otherProducts = filteredProducts.slice(1);

  return (
    <div className={styles.container}>
      <div className={styles.featuredContainer}>
        <div className={styles.popularHeader}>
          <a href="/shop" className={styles.shopLink}>
            <img src={backArrow} alt='back' className={styles.arrow}></img>       
          </a>
          <h2 className={styles.header}>Popular</h2>
        </div>
        <ProductCard product={featuredProduct} featured />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <span>Features:</span>
            <button className={activeCategory === 'Popular' ? styles.active : ''} onClick={() => handleCategoryChange('Popular')}>Popular</button>
            <button className={activeCategory === 'New Releases' ? styles.active : ''} onClick={() => handleCategoryChange('New Releases')}>New Release</button>
            <button className={activeCategory === 'Recommended' ? styles.active : ''} onClick={() => handleCategoryChange('Recommended')}>Recommended</button>
          </div>
          <div className={styles.filterGroup}>
            <span>Gender:</span>
            <button className={activeGender === 'Both' ? styles.active : ''} onClick={() => handleGenderChange('Both')}>Both</button>
            <button className={activeGender === 'Male' ? styles.active : ''} onClick={() => handleGenderChange('Male')}>Male</button>
            <button className={activeGender === 'Female' ? styles.active : ''} onClick={() => handleGenderChange('Female')}>Female</button>
          </div>
        </div>
        <div className={styles.horizontalScroll}>
          {otherProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
