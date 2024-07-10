import React from 'react';
import CartItem from './CartItem';
import './Cart.css';
import shoe1 from '../assets/shoes/shoe6.png';
import shoe2 from '../assets/shoes/shoe1.png';
import shoe3 from '../assets/shoes/shoe9.png';
import shoe4 from '../assets/shoes/shoe4.png';

const Cart = () => {
  const cartItems = [
    { id: 1, image: shoe1, brand: 'Nike', name: 'Air Max', price: 'N52,000', quantity: 1 },
    { id: 2, image: shoe2, brand: 'Reebok', name: 'Ultra Air', price: 'N48,999', quantity: 1 },
    { id: 3, image: shoe3, brand: 'Adidas', name: 'Ultra Boost', price: 'N95,000', quantity: 1 },
    { id: 4, image: shoe4, brand: 'PUMA', name: 'Air Veezy', price: 'N63,000', quantity: 1 },
  ];

  const handleRemove = (id) => {
    console.log(`Remove item with id: ${id}`);
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    console.log(`Update quantity of item with id: ${id} to ${newQuantity}`);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem 
            key={item.id} 
            {...item} 
            onRemove={handleRemove}
            onUpdateQuantity={handleUpdateQuantity}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
