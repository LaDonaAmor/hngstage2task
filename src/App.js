// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Header from './components/Header';
import ContactUs from './components/ContactUs';
import ProductDetails from './components/ProductDetails';
import SuccessPage from './components/SuccessPage';
import CartPage from './components/CartPage'; // Import CartPage component
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} /> {/* Use CartPage component for /cart route */}
          <Route path="/success" element={<SuccessPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
