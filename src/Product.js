import React from "react";
import "./Product.css";

function Product({ title, price }) {
  return (
    <div className="product">
      <h2>{title}</h2>
      <h3>Price: ${price}</h3>
    </div>
  );
}

export default Product;
