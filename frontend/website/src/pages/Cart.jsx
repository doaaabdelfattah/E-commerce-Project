import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCart } from "../redux/reducers/cartSlice";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { selectTotalQuantity, clearCart } from "../redux/reducers/cartSlice";
import CartItemsMain from "../components/CartItemsMain";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectAllCart);
  const quantity = useSelector(selectTotalQuantity);

  const navigate = useNavigate();
  const redirect = () => {
    navigate("/shipping", {
      state: {
        products: [],
        price: 500,
        shippingFee: 50,
        items: 2,
      },
    });
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <Header />
      <section className='bg-[url("http://localhost:3000/images/banner/shop.png")] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <div className="flex justify-center mt-[10%] gap-2 text-2xl w-full">
                <Link to="/" className="text-white">
                  Home
                </Link>
                <IoIosArrowForward className="text-white" />
                <span className="text-white ">Card</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-16">
          <h2 className="text-5xl font-semibold text-center">Your cart</h2>
          <div className="flex flex-wrap">
            <div className="w-[67%] md-lg:w-full">
              <div className="pr-3 md-lg:pr-0">
                <div className="flex flex-col gap-3">
                  <div className="bg-white p-4">
                    <h2 className="text-3xl ">
                      {`Total items in cart (${quantity})`}
                    </h2>
                  </div>
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex bg-white p-4 flex-col gap-2 border-b-2 mb-4"
                    >
                      <CartItemsMain
                        productId={item.productId}
                        quantity={item.quantity}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* ========= buttons */}
              <div className="flex justify-center items-center mt-5">
                {cart.length > 0 ? (
                  <button
                    className="h-full text-white bg-black hover:bg-[#BC9B80] transition-all duration-300 px-10 py-[10px]"
                    onClick={handleClearCart}
                  >
                    Clear Cart
                  </button>
                ) : (
                  <Link to="/shop">
                    <button className="h-full text-white bg-black hover:bg-[#BC9B80] transition-all duration-300 px-10 py-[10px]">
                      Shop Now
                    </button>
                  </Link>
                )}
              </div>
            </div>

            <div className="w-[33%] md-lg:w-full">
              <div className="pl-3 md-lg:pl-0 md-lg:mt-5">
                {cart.length > 0 && (
                  <div className="bg-white p-4 text-slate-600 flex flex-col gap-3">
                    <h2 className="text-xl font-bold">Order summary</h2>
                    <div className="flex justify-between items-center">
                      <span>Items</span>
                      <span>$300</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Shipping Fee</span>
                      <span>$30</span>
                    </div>
                    <div className="flex gap-2">
                      <input
                        className="w-full px-3 py-2 border border-slate-200 outline-0 focus:border-green-300 rounded-sm"
                        type="text"
                        placeholder="Voucher coupon"
                      />
                      <button className="bg-[#059473] text-white px-4 py-1 rounded-sm uppercase text-sm">
                        Apply
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Total</span>
                      <span className="text-lg text-[#059473]">$330</span>
                      <button
                        className="px-5 py-[6px] rounded-sm hover:shadow-red-500/50 hover:shadow-lg bg-red-500 text-sm uppercase text-white"
                        onClick={redirect}
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
