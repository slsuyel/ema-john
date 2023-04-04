import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Card/Cart";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("products.json").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const clearBtn = () => {
    setCart([]);
    deleteShoppingCart();
  };

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    // step 1: get id of the addedProduct
    for (const id in storedCart) {
      // step 2: get product from products state by using id
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        // step 3: add quantity
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        // step 4: add the added product to the saved cart
        savedCart.push(addedProduct);
      }
      // console.log('added Product', addedProduct)
    }
    // step 5: set the cart
    setCart(savedCart);
  }, [products]);

  const addToCartBtn = (p) => {
    // p = product
    const newCart = [...cart, p]; // p = product
    setCart(newCart);
    addToDb(p.id); // p = product
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
        <Cart cart={cart} clearBtn={clearBtn}>
        <Link to ='/order' className="Clear-btn">
            Review order
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              width={'25px'}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
