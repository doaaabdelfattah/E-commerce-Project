import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../redux/reducers/cartSlice";

const CartItem = ({ productId, quantity }) => {
  const [productDetails, setProductsDetails] = useState([]);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const findDetails = products.filter(
      (product) => product.id === productId
    )[0];
    setProductsDetails(findDetails);
  }, [productId, products]);

  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };

  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };
  if (!productDetails) {
    return null; // or a loading spinner if needed
  }

  return (
    <div className="flex justify-around items-center bg-white text-black p-2 my-3 border-b-2 border-slate-700 gap-10">
      <div className="flex justify-center items-center">
        <img
          src={productDetails.image}
          alt={productDetails.title}
          className=""
        ></img>
      </div>
      <h3>{productDetails.title}</h3>
      <p>${productDetails.price * quantity}</p>
      <div className="w-28 flex justify-between items-center">
        <button
          className="h-full w-10 font-bold text-2xl hover:text-[#BC9B80] flex justify-center items-center"
          onClick={handlePlusQuantity}
        >
          +
        </button>
        <span>{quantity}</span>
        <button
          className="h-full w-10 font-bold text-2xl hover:text-[#BC9B80] flex justify-center items-center"
          onClick={handleMinusQuantity}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CartItem;
