import React from "react";
import { useSelector } from "react-redux";
import { selectAllCart } from "../redux/reducers/cartSlice";
import CartItem from "./CartItem";

const CartTab = () => {
  const cart = useSelector(selectAllCart);
  return (
    <div className="fixed z-100  bg-gray-700 top-0 right-0 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] ">
      <h2 className="p-5 text-white text-2xl ">Shopping Cart</h2>
      <div>
        {cart.map((item, index) => {
          <CartItem
            productId={item.productId}
            quantity={item.quantity}
          ></CartItem>;
        })}
      </div>
      <div className="grid grid-cols-2">
        <button>Close</button>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default CartTab;
