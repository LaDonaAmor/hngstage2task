import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import CartItem from './CartItem';
import PaymentInfo from './PaymentInfo';
import Totals from './Totals';
import './CartPage.css'; // Import CSS for CartPage
import backArrow from '../assets/svg/iconOutlined.svg';
import image1 from '../assets/shoes/shoe1.png';
import image2 from '../assets/shoes/shoe2.png';
import image3 from '../assets/shoes/shoe3.png';
import image4 from '../assets/shoes/shoe4.png';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, image: image1, name: 'Air Max', price: 'N63,999', quantity: 1 },
    { id: 2, image: image2, name: 'Air Max', price: 'N63,999', quantity: 1 },
    { id: 3, image: image3, name: 'Air Max', price: 'N63,999', quantity: 1 },
    { id: 4, image: image4, name: 'Air Max', price: 'N63,999', quantity: 1 },
  ]);

  const handleUpdateQuantity = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="cart-page">
      <div className="cart-items-section">
        <div className="cart-header">
          <Link to="/product/1" className="back-arrow"><img src={backArrow} alt='back'></img></Link>
          <h2>Shopping Cart <span className="cart-count">{cartItems.length}</span></h2>
        </div>
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              {...item}
              onRemove={handleRemoveItem}
              onUpdateQuantity={handleUpdateQuantity}
            />
          ))}
        </div>
        <div className="totals-section">
          <Totals />
        </div>
      </div>
      <div className="payment-info-section">
        <PaymentInfo />
      </div>
    </div>
  );
};

export default CartPage;
