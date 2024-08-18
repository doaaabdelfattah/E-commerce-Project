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
        <div className="mx-auto w-[85%] flex justify-center items-center mt-[100px]">
          <div className="grid grid-cols-2 gap-7 mt-9 mx-auto px-[20px]">
            <div className="flex justify-center">
              <img
                src={productDetails.image}
                alt=""
                className="w-full px-4"
              ></img>
            </div>
            <div className="">
              <h1 className="text-6xl">{productDetails.title}</h1>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetails;
