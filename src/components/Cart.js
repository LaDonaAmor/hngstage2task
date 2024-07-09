// src/components/Cart.js
import React from 'react';
import CartItem from './CartItem';
import './Cart.css';
import shoe1 from '../assets/shoes/shoe1.png';
import shoe2 from '../assets/shoes/shoe2.png';
import shoe3 from '../assets/shoes/shoe3.png';
import shoe4 from '../assets/shoes/shoe4.png';

const Cart = () => {
  const cartItems = [
    { id: 1, image: shoe1, name: 'Air Max', price: 'N63,999', quantity: 1 },
    { id: 2, image: shoe2, name: 'Air Max', price: 'N63,999', quantity: 1 },
    { id: 3, image: shoe3, name: 'Air Max', price: 'N63,999', quantity: 1 },
    { id: 4, image: shoe4, name: 'Air Max', price: 'N63,999', quantity: 1 },
  ];

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
