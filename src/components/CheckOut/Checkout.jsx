import React from 'react';
import './Checkout.css'; // import the CSS file for the class

const Checkout = () => {
  return (
    <>
      <div className="checkout-container">
        <h2>Checkout</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" required />

          <label htmlFor="card-number">Card Number:</label>
          <input type="text" id="card-number" name="card-number" required />

          <label htmlFor="expiration-date">Expiration Date:</label>
          <input type="text" id="expiration-date" name="expiration-date" required />

          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" name="cvv" required />

          <button type="submit">Checkout</button>
        </form>
      </div>
    </>
  );
};

export default Checkout;
