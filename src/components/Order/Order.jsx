import React, { useState } from "react";
import Cart from "../Card/Cart";
import { useLoaderData } from "react-router-dom";
import ReveiwItem from "../ReveiwItem/ReveiwItem";
import "./Order.css";
import { removeFromDb } from "../../utilities/fakedb";
const Order = () => {
  const savedCart = useLoaderData();
  //    console.log(savedCart);
  const [cart, setCart] = useState(savedCart);

  const deleteBtn = (id) => {
    console.log(id);
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  return (
    <div className="shop-container">
      <div className="reveiw-container">
        {cart.map((pd) => (
          <ReveiwItem key={pd.id} pd={pd} deleteBtn={deleteBtn} />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Order;
