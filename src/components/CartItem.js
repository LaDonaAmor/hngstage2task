import React from 'react';
import './CartItem.css';
import close from '../assets/svg/cancel.svg';

const CartItem = ({ id, image, brand, name, price, quantity, onRemove, onUpdateQuantity }) => {
  const handleIncrement = () => {
    onUpdateQuantity(id, quantity + 1);
  };

  const handleDecrement = () => {
    onUpdateQuantity(id, quantity - 1);
  };

  const handleRemoveClick = () => {
    onRemove(id);
  };

  return (
    <div className="cart-item"> 
      <img src={image} alt={name} className="cart-item-image" />
      <div className="cart-item-details">
        <div className="cart-item-brand">Nike</div>
        <div className="cart-item-name">{name}</div>
        <div className="cart-item-price">{price}</div>
        <div className="cart-item-quantity">
          <button className='decrease' onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button className='increase' onClick={handleIncrement}>+</button>
        </div>
      </div>
      <button className="remove-btn" onClick={handleRemoveClick}>
        <img src={close} alt='close'/>
      </button>
    </div>
  );
};

export default CartItem;
