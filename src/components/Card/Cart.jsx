import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  //   const cart = props.cart;
  console.log(cart);
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = total * 0.07; // 7% tax on total

  const grandTotal = total + tax + shipping;

  return (
    <div className="cart">
      <h2>Order summary</h2>
      <p>Selected items: {cart.length}</p>
      <p>Total price:{total.toFixed(2)}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
