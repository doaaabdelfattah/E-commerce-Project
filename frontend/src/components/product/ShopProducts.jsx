import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import Rating from "../Rating";
const ShopProducts = ({ style }) => {
  return (
    <div
      className={`w-full grid ${
        style === "grid"
          ? "grid-cols-3 md-lg:grid-cols-2 md:grid-cols-2"
          : "grid-cols-1 md-lg:grid-cols-2 md:grid-cols-2"
      } gap-3`}
    >
      {/* =========== main container =============== */}
      {[1, 2, 3, 4, 5].map((p, i) => (
        <div
          key={i}
          className={`flex transition-all duration-700 hover:shadow-md hover:-translate-y-3 ${
            style === "grid"
              ? "flex-col justify-start items-start"
              : "justify-start items-center md-lg:flex-col md-lg:justify-start md-lg:items-start"
          } w-full gap-4 bg-white p-1 rounded-md`}
        >
          {/* =============== image and icons  =======  */}
          <div
            className={
              style === "grid"
                ? "w-full relative group h-[350px] md:h-[270px] xs:h-[170px] overflow-hidden"
                : "md-lg:w-full relative group h-[320px] md:h-[270px] overflow-hidden"
            }
          >
            <img
              className="h-full rounded-md w-full object-cover"
              src={`http://localhost:3000/images/products/${i + 1}.webp`}
              alt=""
            />
            <ul className="flex transition-all duration-700 -bottom-15 justify-center items-center gap-2 absolute w-full group-hover:bottom-3">
              <li className="w-[45px] h-[45px] cursor-pointer bg-white hover:text-white flex justify-center items-center rounded-full hover:bg-[#BC9B80] hover:rotate-[720deg] transition-all">
                <MdOutlineShoppingCart />
              </li>
              <li className="w-[45px] h-[45px] cursor-pointer bg-white hover:text-white flex justify-center items-center rounded-full hover:bg-[#BC9B80] hover:rotate-[720deg] transition-all">
                <CiHeart />
              </li>
              <li className="w-[45px] h-[45px] cursor-pointer bg-white hover:text-white flex justify-center items-center rounded-full hover:bg-[#BC9B80] hover:rotate-[720deg] transition-all">
                <FaEye />
              </li>
            </ul>
          </div>

          <div className="p-2 flex justify-start items-start flex-col">
            <h2 className="font-semibold text-lg">Product Name</h2>
            <div className="flex justify-start items-center gap-3"></div>
            <span className="text-md font-semibold">$656</span>
            <div className="flex">
              <Rating rating={4.5} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopProducts;
