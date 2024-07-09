import React, { useState } from 'react';
import './ContactUs.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (for example, logging form data)
    console.log('Form submitted:', formData);

    // Show alert message
    window.alert('Your message has been submitted!');

    // You can reset the form data if needed
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-form-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group left-group">
          <p className='name'>Your name</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div className="form-group left-group">
          <p className='email'>Your email</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div className="form-group right-group">
          <p className='message'>Your message</p>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="textarea-field"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
