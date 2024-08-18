import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";

const ProductDetails = () => {
  const { products } = useSelector((state) => state.products);
  const { id } = useParams();

  const [productDetails, setProductsDetails] = useState(null);
  // const navigate = useNavigate();
  useEffect(() => {
    const findDetails = products.find((product) => product.id === parseInt(id));
    if (findDetails) {
      setProductsDetails(findDetails);
    }
  }, [id, products]);

  return (
    <div>
      <Header />
      {productDetails ? (
        <div className="flex justify-center items-center ">
          <h1 className="text-3xl">{productDetails.title}</h1>
          <p>Product number: {productDetails.id}</p>
          <p>Description: {productDetails.description}</p>
          {/* Add other product details as needed */}
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetails;
