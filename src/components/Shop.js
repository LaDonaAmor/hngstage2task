import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Shop.css';
import Product from '../data/products';
import image1 from '../assets/shoes/shoe1.png';
import image2 from '../assets/shoes/shoe2.png';
import image3 from '../assets/shoes/shoe3.png';
import image4 from '../assets/shoes/shoe4.png';
import image5 from '../assets/shoes/shoe5.png';
import image6 from '../assets/shoes/shoe6.png';
import image7 from '../assets/shoes/shoe7.png';
import image8 from '../assets/shoes/shoe8.png';
import image9 from '../assets/shoes/shoe9.png';
import image10 from '../assets/shoes/shoe10.png';
import image11 from '../assets/shoes/shoe11.png';
import image12 from '../assets/shoes/shoe12.png';
import image13 from '../assets/shoes/shoe13.png';
import image14 from '../assets/shoes/shoe14.png';
import image15 from '../assets/shoes/shoe15.png';
import image16 from '../assets/shoes/shoe16.png';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('Popular');
  const [activeGender, setActiveGender] = useState('Both');
  const navigate = useNavigate();

  const categories = ['Popular', 'New Releases', 'Recommended'];
  const genders = ['Both', 'Male', 'Female'];

  const categoryProducts = [
    { id: 1, brand: 'Nike', name: 'Air Max', price: '₦60,000', color: '#735CFF', image: image1, type: 'Popular' },
    { id: 2, brand: 'Adidas', name: 'Ultra Boost', price: '₦75,000', color: '#8F8F8F', image: image2, type: 'Popular' },
    { id: 3, brand: 'PUMA', name: 'Air Veezy', price: '₦58,000', color: '#E5E92E', image: image9, type: 'Popular' },
    { id: 4, brand: 'Vans', name: 'Air Max', price: '₦63,999', color: '#D55CFF', image: image4, type: 'Popular' },
    { id: 5, brand: 'ASICS', name: 'Air Boost', price: '₦63,999', color: '#FF9292', image: image7, type: 'Popular' },
    { id: 6, brand: 'Nike', name: 'Air Max', price: '₦63,589', color: '#36D199', image: image6, type: 'Popular' },
    { id: 7, brand: 'Nike', name: 'Air Max', price: '₦67,999', color: '#DA70D6', image: image7, type: 'Popular' },
    { id: 8, brand: 'Nike', name: 'Air Max', price: '₦53,999', color: '#D55CFF', image: image8, type: 'Popular' },
    { id: 9, brand: 'Nike', name: 'Air Max', price: '₦60,999', color: '#8F8F8F', image: image9, type: 'New Releases' },
    { id: 10, brand: 'Nike', name: 'Air Max', price: '₦85,999', color: '#36D199', image: image10, type: 'Recommended' },
    { id: 11, brand: 'Nike', name: 'Air Max', price: '₦63,000', color: '#735CFF', image: image11, type: 'Recommended' },
    { id: 12, brand: 'Nike', name: 'Air Max', price: '₦64,000', color: '#DA70D6', image: image12, type: 'New Releases' },
    { id: 13, brand: 'Nike', name: 'Air Max', price: '₦40,000', color: '#FF69B4', image: image13, type: 'New Releases' },
    { id: 14, brand: 'Adidas', name: 'Ultra Boost', price: '₦70,000', color: '#FF6347', image: image14, type: 'Popular' },
    { id: 15, brand: 'Adidas', name: 'Ultra Boost', price: '₦70,000', color: '#4682B4', image: image15, type: 'Popular' },
    { id: 16, brand: 'Adidas', name: 'Ultra Boost', price: '₦70,000', color: '#9ACD32', image: image16, type: 'Recommended' },
    { id: 17, brand: 'Vans', name: 'Air Max', price: '₦63,999', color: '#D55CFF', image: image4, type: 'Recommended' },
    { id: 18, brand: 'ASICS', name: 'Air Boost', price: '₦63,999', color: '#FF9292', image: image5, type: 'Recommended' },
    { id: 19, brand: 'Nike', name: 'Air Max', price: '₦63,999', color: '#36D199', image: image6, type: 'Recommended' },
    { id: 20, brand: 'Nike', name: 'Air Max', price: '₦63,999', color: '#DA70D6', image: image7, type: 'New Releases' },
    { id: 21, brand: 'Nike', name: 'Air Max', price: '₦63,999', color: '#D55CFF', image: image8, type: 'New Releases' },
    { id: 22, brand: 'Nike', name: 'Air Max', price: '₦63,999', color: '#8F8F8F', image: image9, type: 'New Releases' },
  ];

  const genderProducts = [
    { id: 23, brand: 'Reebok', name: 'Air Boost', price: '₦80,000', color: '#D55CFF', image: image9, gender: 'Both' },
    { id: 24, brand: 'Nike', name: 'Air Max', price: '₦68,999', color: '#36D199', image: image6, gender: 'Both' },
    { id: 25, brand: 'Nike', name: 'Air Max', price: '₦68,999', color: '#735CFF', image: image15, gender: 'Both' },
    { id: 26, brand: 'Nike', name: 'Air Max', price: '₦68,999', color: '#8F8F8F', image: image12, gender: 'Both' },
    { id: 27, brand: 'Nike', name: 'Air Max', price: '₦68,999', color: '#E5E92E', image: image14, gender: 'Both' },
    { id: 28, brand: 'Nike', name: 'Air Max', price: '₦68,999', color: '#FF9292', image: image11, gender: 'Both' },
    { id: 29, brand: 'Adidas', name: 'Ultra Boost', price: '₦70,000', color: '#FF6347', image: image1, gender: 'Male' },
    { id: 30, brand: 'Vans', name: 'Ultra Air', price: '₦50,000', color: '#4682B4', image: image7, gender: 'Female' },
    { id: 31, brand: 'PUMA', name: 'Ultra Max', price: '₦95,000', color: '#FF4500', image: image14, gender: 'Male' },
    { id: 32, brand: 'Nike', name: 'Air Max', price: '₦63,999', color: '#4682B4', image: image10, gender: 'Male' },
    { id: 33, brand: 'Nike', name: 'Air Max', price: '₦68,999', color: '#DA70D6', image: image3, gender: 'Male' },
    { id: 34, brand: 'Vans', name: 'Air Max', price: '₦54,999', color: '#DA70D6', image: image12, gender: 'Female' },
    { id: 35, brand: 'PUMA', name: 'Air Max', price: '₦71,999', color: '#FF69B4', image: image13, gender: 'Female' },
    { id: 36, brand: 'Adidas', name: 'Ultra Boost', price: '₦66,000', color: '#FF6347', image: image14, gender: 'Male' },
    { id: 37, brand: 'Adidas', name: 'Ultra Boost', price: '₦40,000', color: '#4682B4', image: image15, gender: 'Male' },
    { id: 38, brand: 'Adidas', name: 'Ultra Boost', price: '₦91,000', color: '#8B4513', image: image5, gender: 'Female' },
  ];

  const filteredCategoryProducts = categoryProducts.filter(product => product.type === activeCategory);
  const filteredGenderProducts = genderProducts.filter(product => activeGender === 'Both' || product.gender === activeGender);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="shop-container">
      <div className="category-filter">
        {categories.map((category) => (
          <button 
            key={category} 
            className={category === activeCategory ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="product-grid horizontal-scroll">
        {filteredCategoryProducts.map(product => (
          <Product 
            key={product.id} 
            {...product} 
            onClick={() => handleProductClick(product.id)} 
          />
        ))}
      </div>
      <div className="gender-filter">
        {genders.map((gender) => (
          <button 
            key={gender} 
            className={gender === activeGender ? 'active' : ''}
            onClick={() => setActiveGender(gender)}
          >
            {gender}
          </button>
        ))}
      </div>
      <div className="product-grid horizontal-scroll">
        {filteredGenderProducts.map(product => (
          <Product 
            key={product.id} 
            {...product} 
            onClick={() => handleProductClick(product.id)} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
