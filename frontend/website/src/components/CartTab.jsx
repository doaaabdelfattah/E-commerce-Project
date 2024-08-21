import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  selectAllCart,
  clearCart,
  toggleStatusTab,
} from "../redux/reducers/cartSlice";
import CartItem from "./CartItem";

const CartTab = () => {
  // const [isVisible, setIsVisible] = useState(true);
  const cart = useSelector(selectAllCart);
  const dispatch = useDispatch();

  const statusTab = useSelector((state) => state.cart.statusTab);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleClose = () => {
    dispatch(toggleStatusTab());
  };

  return (
    toggleStatusTab && (
      <div
        className={`fixed z-50 bg-gray-700/50 top-0 right-0 shadow-2xl w-[500px] lg:w-[400px] md:w-[300px] h-full grid grid-rows-[60px_1fr_60px] py-10 px-3 transform transition-all duration-700 ease-in-out ${
          statusTab ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <h2 className="p-5 text-white text-3xl text-center">Shopping Cart</h2>
          <button
            className="h-full text-white bg-transparent border-2 hover:bg-[#BC9B80] transition-all duration-300 px-10 py-[10px]"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
        <div className="m-5">
          {cart.map((item, index) => (
            <CartItem
              key={index}
              productId={item.productId}
              quantity={item.quantity}
            />
          ))}
        </div>
        <div className="grid grid-cols-2">
          <button className="bg-black text-white" onClick={handleClose}>
            Close
          </button>
          <button className="bg-[#BC9B80] text-white">Checkout</button>
        </div>
      </div>
    )
  );
};

export default CartTab;
