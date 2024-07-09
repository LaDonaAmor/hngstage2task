/* src/components/PaymentInfo.js */
import React from 'react';
import './PaymentInfo.css';
import { Link } from 'react-router-dom'; // Import Link for navigation

const PaymentInfo = () => {
  return (
    <div className="payment-info">
      <h2>Payment Info</h2>
      <form>
        <div className="payment-method">
          <label className='method'>Choose Payment Method</label>
          <div>
            <label>
              <input type="radio" name="payment" value="verve" /> Verve
            </label>
            <label>
              <input type="radio" name="payment" value="mastercard" defaultChecked /> Master Card
            </label>
            <label>
              <input type="radio" name="payment" value="visa" /> Visa
            </label>
          </div>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Card Holder Name" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Card Number" />
        </div>
        <div className="expiry-cv-group">
          <div className="form-group">
            <input type="text" placeholder="Expiry Date" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="CV" />
          </div>
        </div>
        <Link to="/success" className="checkout-link">
          <button type="button" className="checkout-btn">Checkout</button>
        </Link>
      </form>
    </div>
  );
};

export default PaymentInfo;
