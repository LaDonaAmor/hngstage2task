/* src/components/Totals.js */
import React from 'react';
import './Totals.css';

const Totals = () => {
  return (
    <div className="totals">
      <div className="totals-item">
        <input type="checkbox" />
        <span className="totals-label">Sub total:</span>
        <span className="totals-value">N60,000</span>
      </div>
      <div className="totals-item">
        <input type="checkbox" />
        <span className="totals-label">VAT:</span>
        <span className="totals-value">N999</span>
      </div>
      <div className="totals-item">
        <input type="checkbox" />
        <span className="totals-label">Delivery:</span>
        <span className="totals-value">N3,000</span>
      </div>
      <div className="totals-total">
        <span className="totals-label">Total:</span>
        <span className="totals-value">N60,999</span>
      </div>
    </div>
  );
};

export default Totals;
