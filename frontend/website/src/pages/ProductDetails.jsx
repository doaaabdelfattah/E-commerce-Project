import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { addToCart } from "../redux/reducers/cartSlice.js";
import Footer from "../components/Footer";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [productDetails, setProductsDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { products } = useSelector((state) => state.products);
  const { id } = useParams();

  // ======== Get Product details
  useEffect(() => {
    const findDetails = products.find((product) => product.id === parseInt(id));
    if (findDetails) {
      setProductsDetails(findDetails);
    }
  }, [id, products]);

  // ======== Cart Handle functions
  const handleClickAddToCart = (e, product) => {
    dispatch(
      addToCart({
        productId: product.id,
        quantity: quantity,
      })
    );
  };

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };
  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <Header />
      {productDetails ? (
        <div className="mx-auto w-[85%] md-lg:h-fit md-lg:mb-5 md-lg:pb-10 h-screen mt-[100px]">
          <div className="grid grid-cols-2 md-lg:flex md-lg:flex-col  mt-9 mx-auto px-[20px]">
            <div className="flex justify-center items-center">
              <img
                src={productDetails.image}
                alt=""
                className="w-[400px] p-10"
              ></img>
            </div>

            <div className="p-[70px] bg-[#FAF9F7] ">
              <h1 className="text-4xl font-bold md-lg:text-3xl">
                {productDetails.title}
              </h1>
              <h3 className="pt-3 overflow-hidden mb-5 hover:text-[#BC9B80]">
                <Link to="">{productDetails.category}</Link>
              </h3>
              {/* ============ */}
              <hr></hr>
              <div className="my-[40px] line-clamp-3 text-lg ">
                <p>{productDetails.description}</p>
              </div>
              {/* ============ */}
              <hr></hr>

              <div className="p-5">
                <div className="mt-5 px-10 gap-4 flex md-lg:justify-center md-lg:flex-wrap items-center">
                  <h3 className="text-xl">Price:</h3>
                  <p className="text-5xl font-semibold">
                    {productDetails.price}$
                  </p>
                </div>
                <div className="mt-5 gap-4 px-10 flex md-lg:justify-center md-lg:flex-wrap items-center">
                  <h3 className="text-xl">Rating:</h3>
                  <div className="flex">
                    <Rating rating={productDetails.rating.rate} size={30} />
                  </div>
                  <p className="text-md font-semibold">
                    {productDetails.rating.rate}
                  </p>
                </div>
              </div>
              {/* ======== add to cart buttons */}
              <div className="h-[50px] md-lg:mb-5 gap-5 mt-10 md-lg:flex-wrap flex justify-center">
                <div className=" bg-white p-2  text-black flex gap-2 justify-center items-center">
                  <button
                    className=" h-full w-10 font-bold text-xl flex justify-center hover:text-[#BC9B80] items-center"
                    onClick={(e) => handlePlusQuantity(e, productDetails)}
                  >
                    +
                  </button>
                  <span className="h-full w-10 font-bold text-xl flex justify-center items-center">
                    {quantity}
                  </span>
                  <button
                    className=" h-full w-10 font-bold text-2xl hover:text-[#BC9B80] flex justify-center items-center"
                    onClick={() => handleMinusQuantity()}
                  >
                    -
                  </button>
                </div>
                <button
                  onClick={(e) => handleClickAddToCart(e, productDetails)}
                  className="h-full uppercase font-semibold px-[4rem] text-white bg-[#1F212A] hover:bg-[#BC9B80] transition-all duration-300"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
      <Footer />
    </div>
  );
};

export default ProductDetails;
