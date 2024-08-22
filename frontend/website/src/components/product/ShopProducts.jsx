import React, { useEffect } from "react";
import { FaEye, FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import Rating from "../Rating";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  add_to_cart,
  addToCart,
  selectAllCart,
} from "../../redux/reducers/cartSlice";

const ShopProducts = ({ style, isSorted }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  const cart = useSelector(selectAllCart);
  const { sortedProductsArray } = useSelector((state) => state.sortedProducts);
  const { user } = useSelector((state) => state.auth);

  const handleClickAddToCart = (e, product) => {
    e.stopPropagation();
    if (user) {
      dispatch(
        add_to_cart({
          userId: user.id,
          productId: product.id,
          quantity: 1,
        })
      );
    } else {
      navigate("/login");
    }
    // dispatch(
    //   addToCart({
    //     productId: product.id,
    //     quantity: 1,
    //   })
    // );
  };

  // ========= debugging code :
  useEffect(() => {
    console.log("Cart items updated:", cart);
  }, [cart]);

  const productsToDisplay = isSorted ? sortedProductsArray : products;
  useEffect(() => {
    // console.log("Products to display:", productsToDisplay);
  }, [productsToDisplay]);

  return (
    <div className="w-full flex justify-center flex-wrap gap-5">
      {productsToDisplay.map((product, index) => (
        <div
          key={product.id}
          className={`border group w-[300px] transition-all duration-500 hover:shadow-md hover:-mt-3 cursor-pointer ${
            style === "grid"
              ? ""
              : "flex flex-col justify-start items-start md-lg:flex-row md-lg:justify-start md-lg:items-start"
          }`}
          onClick={() => console.log("Product clicked:", product)}
        >
          <div
            className={`relative p-[25px] overflow-hidden ${
              style === "grid" ? "" : "md-lg:w-[50%]"
            }`}
          >
            <Link to={`/${product.id}`}>
              <img
                className="sm:w-full w-full h-[240px]"
                src={product.image}
                alt={product.title}
              />
            </Link>

            <ul
              className={`flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3 ${
                style === "grid"
                  ? ""
                  : "md-lg:flex-col md-lg:justify-start md-lg:items-start md-lg:top-0 md-lg:right-0"
              }`}
            >
              <li className="w-[38px] h-[38px] cursor-pointer bg-[#BC9B80] flex justify-center items-center rounded-full hover:bg-[#BC9B80] hover:text-white hover:rotate-[720deg] transition-all">
                <FaRegHeart />
              </li>
              <li className="w-[38px] h-[38px] cursor-pointer bg-[#BC9B80] flex justify-center items-center rounded-full hover:bg-[#BC9B80] hover:text-white hover:rotate-[720deg] transition-all">
                <FaEye />
              </li>
              <li
                className="w-[38px] h-[38px] cursor-pointer bg-[#BC9B80] flex justify-center items-center rounded-full hover:bg-[#BC9B80] hover:text-white hover:rotate-[720deg] transition-all"
                onClick={(e) => handleClickAddToCart(e, product)}
              >
                <RiShoppingCartLine />
              </li>
            </ul>
          </div>

          <div
            className={`py-3 text-slate-600 p-4 mt-2 ${
              style === "grid" ? "" : "flex-1 md-lg:w-[50%] md-lg:p-4"
            }`}
          >
            <h2 className="font-semibold text-slate-600 text-lg">
              {product.title}
            </h2>
            <div className="flex justify-start flex-col items-start gap-3">
              <span className="text-lg mt-3">{product.price}$</span>
              <div className="flex">
                <Rating rating={product.rating} />
              </div>
              <div className="h-[50px]">
                <button
                  onClick={(e) => handleClickAddToCart(e, product)}
                  className="h-full uppercase font-semibold px-[4rem] text-white bg-[#1F212A] hover:bg-[#BC9B80] transition-all duration-300"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopProducts;
