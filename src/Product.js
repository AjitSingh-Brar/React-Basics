import React, { useEffect, useState } from "react";
import "./Product.css";

function Product({ title, price }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
      if (count % 2 === 0){
          console.log("It is EVEN");
      }
      else{
          console.log("It is ODD");
      }
  }, [count])

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
