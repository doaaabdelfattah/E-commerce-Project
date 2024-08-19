import React from "react";
import { useSelector } from "react-redux";
import { selectAllCart } from "../redux/reducers/cartSlice";
import CartItem from "./CartItem";
import { useEffect } from "react";

const CartTab = () => {
  const cart = useSelector(selectAllCart);
  const statusTab = useSelector((state) => state.cart.statusTab);
  useEffect(() => {
    console.log("Cart in tab:", cart);
  }, [cart]);
  return (
    <div
      className={`fixed z-100  bg-gray-700/50  top-0 right-0 shadow-2xl w-[500px] lg:w-[400px] md-w-[300px] h-full grid grid-rows-[60px_1fr_60px] py-10 px-3 justify-center transform 
      }
    `}
    >
      <h2 className="p-5 text-white text-2xl text-center ">Shopping Cart</h2>
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
        <button className="bg-black text-white">Close</button>
        <button className="bg-[#BC9B80] text-white">Checkout</button>
      </div>
    </div>
  );
};

export default CartTab;
