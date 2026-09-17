import React, { useMemo, useState } from "react";

function ProductCalculator() {
  const [productPrice, setProductPrice] = useState(100);
  const [productQuantity, setProductQuantity] = useState(1);

  const total = useMemo(() => {
    console.log("Calculating total...");

    return productPrice * productQuantity;
  }, [productPrice, productQuantity]);

  return (
    <div>
      <h2>Product Price Calculator</h2>

      <p>Product Price: ₹{productPrice}</p>
      <p>Quantity: {productQuantity}</p>
      <p>Total: ₹{total}</p>

      <button onClick={() => setProductPrice(productPrice + 50)}>
        Increase Price
      </button>

      <button onClick={() => setProductQuantity(productQuantity + 1)}>
        Increase Quantity
      </button>
    </div>
  );
}

export default ProductCalculator;