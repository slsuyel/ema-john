import React, { useEffect, useState } from "react";

import axios from "axios";

import "./Shop.css";

import Product from "../Product/Product";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("products.json").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const addToCartBtn = (p) => {
    const newCart = [...cart, p];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            addToCartBtn={addToCartBtn}
          />
        ))}
      </div>
      <div className="cart-container">
        <h2>Order summary</h2>
        <p>Selected items: {cart.length}</p>
        {/* <p>
          Total price:{" "}
          {cart.reduce((total, c) => total + c.price, 0).toFixed(2)}
        </p>
        <p>
          Shipping :{" "}
          {cart.reduce((total, c) => total + c.shipping, 0).toFixed(2)}
        </p>
        <p>
          Tax (10%):{" "}
          {(
            cart.reduce((total, c) => total + c.price + c.shipping, 0) * 0.1
          ).toFixed(2)}
        </p>
        <p>
          Grand Total:{" "}
          {(
            cart.reduce((total, c) => total + c.price + c.shipping, 0) * 1.1
          ).toFixed(2)}
        </p> */}

      </div>
    </div>
  );
};

export default Shop;
