import React from "react";
import { removeFromDb } from "../../utilities/fakedb";
import "./Cart.css";
const Cart = ({ cart }) => {
  // console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // product.quantity = product.quantity || 1
    if (product.quantity === 0) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = total * 0.07; // 7% tax on total

  const grandTotal = total + tax + shipping;

  return (
    <div className="cart">
      <h2>Order summary</h2>
      <p>Selected items: {quantity}</p>
      <p>Total price:{total.toFixed(2)}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
  
    </div>
  );
};

function clearLocal() {
  localStorage.clear();
  console.log("Local storage cleared.");
  window.location.reload();
}

export default Cart;
