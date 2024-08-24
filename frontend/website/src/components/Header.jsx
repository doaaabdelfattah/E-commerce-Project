import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory } from "../redux/reducers/productsSlice";
import {
  getUser,
  loadUserFromToken,
  logOutUser,
} from "../redux/reducers/authSlice";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import {
  FaPhone,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaUser,
  FaLock,
  FaRegHeart,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import SearchBar from "./SearchBar";
import { selectTotalQuantity } from "../redux/reducers/cartSlice";
import {
  setQuery,
  clearResults,
  fetchSearch,
} from "../redux/reducers/SearchResults";

const Header = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const { userId, userName, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart");
  };
  const { pathname } = useLocation();
  const [showSideBar, setshowSideBar] = useState(true);
  const [showCategory, setshowCategory] = useState(true);

  const [wishlist, setWishlist] = useState(0);

  const handleCategoryClick = (categoryId) => {
    dispatch(fetchProductsByCategory(categoryId));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !isAuthenticated) {
      dispatch(loadUserFromToken(token));
    }
  }, [isAuthenticated, dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logOutUser());
    navigate("/Login");
  };

  const [category, setCategory] = useState("All Categories");

  // ========================== Cart
  const cart = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector(selectTotalQuantity);

  //====== Search bar ======//
  const [input, setInput] = useState("");
  const { results, loading, error } = useSelector((state) => state.search);
  const handleSearchChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    dispatch(setQuery(input));
    dispatch(fetchSearch(input));
  };

  //====== Search bar ======//
  const [searchItem, setSearchItem] = useState("");

  return (
    <div className="w-full bg-white">
      <div className="header-top bg-[#FAF9F7] md-lg:hidden ">
        <div className="w-[85%] lg:w[90%] mx-auto">
          <div className="flex w-full justify-between items-center h-[60px] text-[#0F233C]">
            {/* =========== topHeader - Left side ========= */}
            <ul className="flex justify-start items-center gap-8 font-semibold">
              <li className="flex relative justify-center items-center gap-2 after:absolute after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px] hover:text-[#BC9B80]">
                <span>
                  <MdEmail />
                </span>
                <span>support@gmail.com</span>
              </li>
              <li className="flex relative justify-center items-center gap-2 hover:text-[#BC9B80]">
                <span>
                  <FaPhone />
                </span>
                <span>+1234545667</span>
              </li>
            </ul>
            {/* =========== topHeader - right side ========= */}
            <div className="relative">
              <div className="flex justify-center items-center gap-10 ">
                {/* - - Social Links - - */}
                <div className="flex justify-center items-center gap-4 text-[1.5rem]">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className="hover:text-[#BC9B80]" href="#">
                    <FaFacebook />
                  </a>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className="hover:text-[#BC9B80]" href="#">
                    <FaTwitter />
                  </a>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a className="hover:text-[#BC9B80] " href="#">
                    <FaLinkedin />
                  </a>
                </div>
                {/* - -  User Name - - */}
                {isAuthenticated ? (
                  <div className="flex items-center gap-4">
                    <Link
                      className="flex cursor-pointer justify-center items-center gap-2 text-slate-600 hover:text-[#BC9B80]"
                      to="/dashboard"
                    >
                      <FaUser />
                      <span>Welcome, {userName} </span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="ml-4 text-slate-600 font-semibold hover:text-[#BC9B80] focus:outline-none"
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <Link
                    className="flex cursor-pointer justify-center items-center gap-2 text-slate-600 hover:text-[#BC9B80]"
                    to="/login"
                  >
                    <FaLock />
                    <span>Login</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  ============== Main HEADER ======== */}

      <div className="w-white mt-6 pt-4">
        <div className="w-[85%] h-[120px] md-lg:h[120px] lg:w[90%] mx-auto">
          <div className=" md-lg:h[100px] flex justify-between items-center flex-wrap">
            {/* ===== Left part ====== */}
            <div className="md-lg:w-full w-3/12 ">
              <div className="flex justify-between items-center">
                <Link to="/">
                  <img
                    src="http://localhost:3000/images/logo-only.png"
                    alt=" logo"
                    style={{ width: "220px" }}
                  />
                </Link>
                <div className="flex gap-3">
                  <div
                    className="justify-center items-center cursor-pointer lg:hidden xl:hidden md-lg:flex hidden"
                    onClick={() => setshowSideBar(!showSideBar)}
                  >
                    <span>
                      <GiHamburgerMenu size="40px" color="#4B505E" />
                    </span>
                  </div>
                  <div className="lg:hidden xl:hidden md-lg:flex hidden">
                    <span className="flex relative justify-center items-center cursor-pointer rounded-full w-[40px] h-[40px]  text-slate-600 hover:text-[#BC9B80]">
                      <span onClick={handleCartClick} className="text-3xl">
                        <FiShoppingCart />
                      </span>
                      <span className="absolute w-[20px] h-[20px] bg-[#BC9B80] text-white flex justify-center items-center rounded-full -top-[3px] -right-[6px]">
                        {totalQuantity}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* ====== two-third part ====== */}
            <div className="w-9/12 md-lg:w-full">
              <div className="flex justify-between items-center md-lg:justify-center flex-wrap pl-8">
                {/* - - Menu - - */}
                <ul className="flex justify-start items-start gap-8 uppercase md-lg:hidden text-lg ">
                  <li>
                    <Link
                      to="/"
                      className={`p-2 block ${
                        pathname === "/" ? "text-[#BC9B80]" : "text-slate-600"
                      } hover:text-[#BC9B80]`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/shop"
                      className={`p-2 block ${
                        pathname === "/shop"
                          ? "text-[#BC9B80]"
                          : "text-slate-600"
                      } hover:text-[#BC9B80]`}
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/blog"
                          ? "text-[#BC9B80]"
                          : "text-slate-600"
                      } hover:text-[#BC9B80]`}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <ScrollLink
                      to="footer"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className={`p-2  cursor-pointer block ${
                        pathname === "/about"
                          ? "text-[#BC9B80]"
                          : "text-slate-600"
                      } hover:text-[#BC9B80]`}
                    >
                      about us
                    </ScrollLink>
                  </li>
                </ul>
                {/* - - Icons - - */}
                <div className="flex md-lg:hidden justify-center items-center gap-5">
                  <div className="flex justify-center gap-5">
                    {/* Wishlist */}
                    <div className="flex relative justify-center items-center cursor-pointer rounded-full w-[40px] h-[40px]  text-[#1F212A] hover:text-[#BC9B80]">
                      <span className="text-3xl">
                        <FaRegHeart />
                      </span>
                      <div className="absolute w-[20px] h-[20px] bg-[#BC9B80] text-white flex justify-center items-center rounded-full -top-[3px] -right-[6px]">
                        {wishlist}
                      </div>
                    </div>
                    {/* Shopping Cart */}
                    <div className="flex relative justify-center items-center cursor-pointer rounded-full w-[40px] h-[40px] text-[#1F212A] hover:text-[#BC9B80]">
                      <span onClick={handleCartClick} className="text-3xl">
                        <FiShoppingCart />
                      </span>
                      <div className="absolute w-[20px] h-[20px] bg-[#BC9B80] text-white flex justify-center items-center rounded-full -top-[3px] -right-[6px]">
                        {totalQuantity}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========= Menu when press burger icon =========== */}
      <div className="hidden md-lg:block">
        <div
          onClick={() => setshowSideBar(true)}
          className={`fixed duration-500 transition-all ${
            showSideBar ? "invisible" : "visible"
          } w-screen h-screen md-lg:block  bg-[rgba(188,155,128,0.55)] mt-5 top-0 left-0 z-50`}
        ></div>
        <div
          className={`w-[300px] z-[100] transition-all duration-500 fixed ${
            showSideBar
              ? "-left-[300px]"
              : "left-0 top-0 overflow-auto bg-white h-screen py-6 px-8 "
          }`}
        >
          <Link to="/">
            <img
              src="http://localhost:3000/images/logo-sm.png"
              alt=" logo"
              style={{ width: "220px", marginTop: "20px" }}
            />
          </Link>
          {/* - - Menu - - */}
          <ul className="m-4 pt-3 flex flex-col h-[60%] justify-start items-start gap-5 uppercase text-lg ">
            <li>
              <Link
                to="/"
                className={`py-2 block ${
                  pathname === "/" ? "text-[#BC9B80]" : "text-slate-600"
                } hover:text-[#BC9B80]`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className={`py-2 block ${
                  pathname === "/shop" ? "text-[#BC9B80]" : "text-slate-600"
                } hover:text-[#BC9B80]`}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                className={`py-2 block ${
                  pathname === "/blog" ? "text-[#BC9B80]" : "text-slate-600"
                } hover:text-[#BC9B80]`}
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                className={`py-2 block ${
                  pathname === "/about" ? "text-[#BC9B80]" : "text-slate-600"
                } hover:text-[#BC9B80]`}
              >
                about us
              </Link>
            </li>
            <li>
              <Link
                className={`py-2 block ${
                  pathname === "/contact" ? "text-[#BC9B80]" : "text-slate-600"
                } hover:text-[#BC9B80]`}
              >
                contact us
              </Link>
            </li>
          </ul>
          {/* - - Social Links - - */}
          <div className="flex justify-center items-center gap-4 text-[1.5rem]">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="hover:text-[#BC9B80]" href="#">
              <FaFacebook />
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="hover:text-[#BC9B80]" href="#">
              <FaTwitter />
            </a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="hover:text-[#BC9B80] " href="#">
              <FaLinkedin />
            </a>
          </div>
          {/* User */}
          <div className="m-4 border-t-2 pt-3">
            {isAuthenticated ? (
              <Link
                className="flex cursor-pointer justify-center items-center gap-2"
                to="/dashboard"
              >
                <span>
                  <FaUser />
                </span>
                <span>Welcome, {userName} </span>
              </Link>
            ) : (
              <Link
                className="flex cursor-pointer justify-center items-center gap-2"
                to="/"
              >
                <span>
                  <FaLock />
                </span>
                <span>Login </span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* =============== Second Line Main HEADER ============= */}

      <div className="w-[85%] border-t-[1.5px] lg:w-[90%] mx-auto">
        <div className="flex w-full flex-wrap md-lg:gap-4">
          {/* Part ONE I All Categories Button */}
          <div className="w-3/12 md-lg:w-full">
            <div className="bg-white relative">
              {/* Category Button */}
              <div
                onClick={() => setshowCategory(!showCategory)}
                className=" duration-500 transition-all text-[#1F212A] h-[60px] mt-5 flex justify-center md-lg:justify-between md-lg:px-6 items-center gap-3 font-semibold cursor-pointer bg-[#FAF9F7] custom-before pt-2"
              >
                <div className="flex justify-center items-center gap-3">
                  <span className="text-2xl"></span>
                  <span>All categories</span>
                </div>
                <span className="text-2xl">
                  <MdKeyboardArrowDown />
                </span>
              </div>

              {/* Category list */}
              <div
                className={`${
                  showCategory ? "h-[0]" : "h-fit"
                } overflow-hidden transition-all md-lg:relative duration-500 absolute z-[20] w-full bg-[#FAF9F7]`}
              >
                <ul className="py-2 m-[10px] font-medium">
                  {categories.map((category) => (
                    <li
                      key={category.id}
                      className="flex justify-start m-[10px] relative hover:translate-x-3 transition-all duration-500 gap-2 items-center py-[6px] px-[24px]"
                    >
                      <Link
                        className="block"
                        onClick={() => handleCategoryClick(category.id)}
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

         <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
