import React from "react";
import { useSelector } from "react-redux";

const ProductCart = () => {
  const cart = useSelector((state) => state.cart.items);

  return <div>ProductCart</div>;
};

export default ProductCart;
