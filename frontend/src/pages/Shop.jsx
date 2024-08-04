import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Range } from "react-range";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

import StarRating from "../utils/StarRating";
const Shop = () => {
  const [filter, setFilter] = useState(true);
  const [priceValues, setPriceValues] = useState([50, 3000]);
  const [rating, setRating] = useState(0);

  const categories = Array.from(
    { length: 5 },
    (_, i) => `Category Nu. ${i + 1}`
  );
  return (
    <div>
      <Header />

      {/* ================== Banner =============== */}
      <section
        className="h-[400px] md-lg:h-[300px] bg-cover mt-5 bg-no-repeat bg-center relative w-full "
        style={{
          backgroundImage: "url(http://localhost:3000/images/banner/3.jpg)",
        }}
      >
        {/* Black Overlay */}
        <div className="custom-black-overlay">
          <div className="h-full mx-auto w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%]">
            <div className="flex flex-col justify-center gap-2 items-center h-full text-white">
              <h2 className="font-semibold text-3xl">Shop</h2>
              <div className="flex justify-center items-center gap-4 text-xl w-full">
                <Link to="/"> Home</Link>
                <span>
                  <MdKeyboardArrowRight />
                </span>
                <span>Shop</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== Side Section =========== */}
      <section className="py-16">
        <div className="h-full mx-auto w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%]">
          {/* Filter button to be visible on small screens */}
          <div className={`md:block hidden ${!filter ? "mb-6" : "mb-0"}`}>
            <button
              className="text-center w-full py-3 px-3 bg-[#BC9B80] text-white "
              onClick={() => setFilter(!filter)}
            >
              Filter Product
            </button>
          </div>

          <div className="w-full flex flex-wrap">
            <div
              className={`w-3/12 md-lg:w-4/12 md:w-full pr-8 ${
                filter
                  ? "md:h-0 md:overflow-hidden md:mb-6"
                  : "md:h-auto md:overflow-auto md:mb-0"
              }`}
            >
              <h2 className="text-3xl text-slate-600 mb-3 font-semibold">
                Category
              </h2>

              {/* - - Select Category - -  */}
              <div className="py-2">
                {categories.map((category, index) => (
                  <div className="flex justify-start items-center gap-2 py-1 px-4">
                    <input type="checkbox" id={category} />
                    <label className="text-slate-500" htmlFor={category}>
                      {category}
                    </label>
                  </div>
                ))}
              </div>

              {/* - - - - Price Range - - - - */}
              <div className="py-2 flex flex-col gap-5">
                <h2 className="text-3xl text-slate-600 mb-3 font-semibold">
                  Price
                </h2>
                <Range
                  step={5}
                  min={50}
                  max={3000}
                  values={priceValues}
                  onChange={(values) => setPriceValues(values)}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      className=" w-full h-[6px] bg-slate-200 rounded-full cursor-pointer"
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ props }) => (
                    <div
                      className="w-[15px] h-[15px] rounded-full bg-[#BC9B80]"
                      {...props}
                    />
                  )}
                />
              </div>

              <span className="text-slate-600 font-semibold text-lg ">
                ${Math.floor(priceValues[0])} - ${Math.floor(priceValues[1])}
              </span>

              {/* Rating */}

              <div className="flex flex-col gap-4 py-5">
                <h2 className="text-3xl text-slate-600 mb-1 font-semibold">
                  Rating
                </h2>
                <div className="flex flex-col gap-3">
                  <div>
                    <StarRating max={5} />
                  </div>

                  {/*- - - - 🔅 5 stars - - -  */}
                  <div
                    onClick={() => setRating(5)}
                    className="text-orange-500 flex justify-start items-start gap-2 text-xl cursor-pointer"
                  >
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                  </div>
                  {/* - - - - - 4 stars - - - - */}
                  <div
                    onClick={() => setRating(4)}
                    className="text-orange-500 flex justify-start items-start gap-2 text-xl cursor-pointer"
                  >
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaRegStar />
                    </span>
                  </div>
                  {/* - - - - - 3 stars - - - - */}
                  <div
                    onClick={() => setRating(3)}
                    className="text-orange-500 flex justify-start items-start gap-2 text-xl cursor-pointer"
                  >
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>

                    <span>
                      <FaRegStar />
                    </span>
                    <span>
                      <FaRegStar />
                    </span>
                  </div>
                  {/* - - - - - 2 stars - - - - */}
                  <div
                    onClick={() => setRating(2)}
                    className="text-orange-500 flex justify-start items-start gap-2 text-xl cursor-pointer"
                  >
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaRegStar />
                    </span>
                    <span>
                      <FaRegStar />
                    </span>
                    <span>
                      <FaRegStar />
                    </span>
                  </div>
                  {/* - - - - - 1 star - - - - */}
                  <div
                    onClick={() => setRating(1)}
                    className="text-orange-500 flex justify-start items-start gap-2 text-xl cursor-pointer"
                  >
                    <span>
                      <FaStar />
                    </span>
                    <span>
                      <FaRegStar />
                    </span>
                    <span>
                      <FaRegStar />
                    </span>
                    <span>
                      <FaRegStar />
                    </span>
                    <span>
                      <FaRegStar />
                    </span>
                  </div>
                  {/* End Stars ====== */}
                </div>
              </div>

              {/* - - - Products - - - - */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Shop;
