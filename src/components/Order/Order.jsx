import React, { useState } from "react";
import Cart from "../Card/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReveiwItem from "../ReveiwItem/ReveiwItem";
import "./Order.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
const Order = () => {
  const savedCart = useLoaderData();
  //    console.log(savedCart);
  const [cart, setCart] = useState(savedCart);

  const deleteBtn = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const clearBtn = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="reveiw-container">
        {cart.map((pd) => (
          <ReveiwItem key={pd.id} pd={pd} deleteBtn={deleteBtn} />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearBtn={clearBtn}>
          <Link to="/checkout" className="Clear-btn">
            Proceed checkout
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              width={"30px"}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
