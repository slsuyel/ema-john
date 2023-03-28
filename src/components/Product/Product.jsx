import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";
const Product = (props) => {
  // console.log(props);
  const addToCartBtn = props.addToCartBtn;
  const { img, name, price, quantity, ratings, seller } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p className="price">Price :${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings} star</p>
      </div>
      <button
        onClick={() => {
          addToCartBtn(props.product);
        }}
        className="btn-add-cart"
      >
        Add to cart <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
  );
};

export default Product;
