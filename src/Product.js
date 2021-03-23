import React, { useState } from "react";
import "./Product.css";

function Product({ title, price }) {
  const [count, setCount] = useState(0);

  return (
    <div className="product">
      <h2>{title}</h2>
      <h3>Price: ${price}</h3>
      <button onClick={(e) => setCount(count + 1)}>+</button>
      <h4>{count}</h4>
      <button onClick={(e) => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Product;
