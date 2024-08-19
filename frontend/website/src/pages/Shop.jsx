import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Range } from "react-range";
import { useDispatch } from "react-redux";
// import { fetchProducts } from "../redux/reducers/productsSlice"; <dont need it anymore>
import {
  sortProductsByPriceAsc,
  sortProductsByPriceDesc,
  fetchSortedProducts,
} from "../redux/reducers/sortedProductSlice";
import StarRating from "../utils/StarRating";
import { BsFillGridFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import ShopProducts from "../components/product/ShopProducts";
import Pagination from "../components/Pagination";
import Products from "../components/product/Products";
import CartTab from "../components/CartTab";

const Shop = () => {
  const [filter, setFilter] = useState(true);
  const [priceValues, setPriceValues] = useState([50, 3000]);
  const [rating, setRating] = useState(0);
  const [styleView, setStyleView] = useState("grid");
  const dispatch = useDispatch();
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    // console.log("Fetching products...");
    dispatch(fetchSortedProducts());
  }, [dispatch]);

  const handleSortChange = (e) => {
    const selectedValue = e.target.value;
    console.log("Selected sort order:", selectedValue);
    if (selectedValue === "ascending") {
      console.log("Sorting products by ascending price...");
      dispatch(sortProductsByPriceAsc());
      setIsSorted(true);
    } else if (selectedValue === "descending") {
      console.log("Sorting products by descending price...");
      dispatch(sortProductsByPriceDesc());
      setIsSorted(true);
    } else {
      console.log("Resetting sort...");
      setIsSorted(false);
    }
  };

  const categories = Array.from(
    { length: 5 },
    (_, i) => `Category Nu. ${i + 1}`
  );

  return (
    <div>
      {/* <CartTab></CartTab> */}
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
              <div className="py-2 mb-5">
                {categories.map((category, index) => (
                  <div
                    className="flex justify-start items-center gap-2 py-1 px-4"
                    key={index}
                  >
                    <input type="checkbox" id={category} />
                    <label className="text-slate-500" htmlFor={category}>
                      {category}
                    </label>
                  </div>
                ))}
              </div>

              {/* - - - - Price Range - - - - */}
              <div className="border-t-2 py-8 flex flex-col gap-5 mb-5">
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
                      className=" w-[80%] h-[5px] bg-slate-200 rounded-full cursor-pointer"
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ props }) => (
                    <div
                      className="w-[20px] h-[20px] rounded-full 
                      bg-white border-[#BC9B80] border-2"
                      {...props}
                    />
                  )}
                />
                <span className="text-slate-600">
                  Price Range:{" "}
                  <span className="text-[#BC9B80]">
                    ${Math.floor(priceValues[0])} - $
                    {Math.floor(priceValues[1])}
                  </span>
                </span>
              </div>

              {/* - - - - - Rating - - - - - */}

              <div className="flex flex-col gap-4 py-5 border-t-2">
                <h2 className="text-3xl text-slate-600 mb-1 font-semibold">
                  Rating
                </h2>
                <div className="flex flex-col gap-3">
                  {/* - - -  stars - - - */}
                  <div>
                    <StarRating
                      max={5}
                      color="#BC9B80"
                      size="35"
                      onSetRating={setRating}
                    />
                  </div>
                </div>
              </div>
              {/* - - - Products - - - - */}
              <div className="py-5 flex flex-col gap-4 md:hidden">
                <Products title="Latest Products" />
              </div>
            </div>

            {/* =========== Middle Part ===================== */}
            <div className="w-9/12 md-lg:w-8/12 md:w-full">
              <div className="pl-8 md:pl-0">
                <div className="py-4 bg-white mb-10 px-5 rounded-sm flex justify-between border items-start">
                  <h2 className="text-slate-600 font-medium">products: </h2>
                  <div className="flex justify-center items-center gap-3">
                    <select
                      onChange={handleSortChange}
                      className="p-1 border outline-0 text-slate-600 "
                      name=""
                      id=""
                    >
                      <option value=""> Sort By</option>
                      <option value="ascending"> Low to High Price </option>
                      <option value="descending"> High to Low price</option>
                    </select>

                    <div className="flex justify-center items-center gao-4 md-lg:hidden">
                      <div
                        onClick={() => setStyleView("grid")}
                        className={`${
                          styleView === "grid" && "bg-slate-300"
                        } p-2 text-slate-600 hover:bg-slate-300 cursor-pointer rounded-sm`}
                      >
                        <BsFillGridFill />
                      </div>
                      <div
                        onClick={() => setStyleView("list")}
                        className={`${
                          styleView === "list" && "bg-slate-300"
                        } p-2 text-slate-600 hover:bg-slate-300 cursor-pointer rounded-sm`}
                      >
                        <FaThList />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pb-8">
                  <ShopProducts style={styleView} isSorted={isSorted} />
                </div>

                <div>
                  <Pagination
                    pageNumber={1}
                    setPageNumber={20}
                    totalItem={4}
                    perPage={5}
                    btnShowItem={5}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Shop;
