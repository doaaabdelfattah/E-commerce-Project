import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllCart } from "../../redux/reducers/cartSlice";
import ProductCard from "./ProductCard";

const ShopProducts = ({ isSorted }) => {
  const { products } = useSelector((state) => state.products);
  const cart = useSelector(selectAllCart);
  const { sortedProductsArray } = useSelector((state) => state.sortedProducts);
  // ========= debugging code :
  useEffect(() => {
    console.log("Cart items updated:", cart);
  }, [cart]);

  const productsToDisplay = isSorted ? sortedProductsArray : products;
  useEffect(() => {}, [productsToDisplay]);

  return (
    <div className="w-full flex justify-center flex-wrap gap-5">
      {productsToDisplay.map((product, index) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ShopProducts;
