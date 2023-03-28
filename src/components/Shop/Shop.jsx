import React, { useEffect, useState } from "react";

import axios from "axios";

import "./Shop.css";

import Product from "../Product/Product";
import Cart from "../Card/Cart";
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
       <Cart cart={cart}/>
      </div>
    </div>
  );
};

export default Shop;
