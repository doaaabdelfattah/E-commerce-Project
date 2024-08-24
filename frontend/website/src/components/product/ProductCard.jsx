import { FaEye, FaRegHeart, FaHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import Rating from "../Rating";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { add_to_cart } from "../../redux/reducers/cartSlice";
import AddToCartButton from "../../utils/AddToCartButton";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useSelector((state) => state.auth);
  const [isWishlisted, setIsWishlisted] = useState(true);

  const handleShowProduct = (product) => {
    navigate(`/${product.id}`);
  };
  const handleClickAddToCart = (e, product) => {
    e.stopPropagation();

    // Calculate Discounted price
    const discountedPrice = product.discount
      ? product.price - (product.price * product.discount) / 100
      : product.price;
    // dispatch adding to cart action
    if (userId) {
      dispatch(
        add_to_cart({
          userId,
          productId: product.id,
          quantity: 1,
          // price: product.price,
          // discountedPrice, // Pass the calculated discounted price
        })
      );
    } else {
      navigate("/login"); // Redirect to login if the user is not logged in
    }
  };
  return (
    <div
      key={product.id}
      className="border relative group w-[300px] transition-all duration-500 hover:shadow-md hover:-mt-3 cursor-pointer"
      onClick={() => console.log("Product clicked:", product)}
    >
      <div className="relative p-[25px] overflow-hidden ">
        <span className="flex justify-center items-center absolute w-[38px] h-[38px] rounded-md bg-[#ffffffdb] border font-semibold text-xs right-2 top-2">
          <button
            // onClick={handleWishlistToggle}
            className="focus:outline-none hover:text-red-500"
          >
            {isWishlisted ? (
              <FaHeart className="text-xl text-red-500" />
            ) : (
              <FaRegHeart className="text-xl text-slate-400 hover:text-red-500" />
            )}
          </button>
        </span>
        {product.discount && (
          <span className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
            {product.discount}%
          </span>
        )}
        <Link to={`/${product.id}`}>
          <img
            className="sm:w-full w-full h-[240px]"
            src={product.image}
            alt={product.title}
          />
        </Link>
      </div>

      <div className="py-3 text-slate-600 p-4 mt-2 ">
        <h2 className="font-semibold text-slate-600 text-lg">
          {product.title}
        </h2>
        <div className="flex justify-start flex-col items-start gap-3 my-2">
          {product.discount ? (
            <div>
              <span className="text-lg mt-3 line-through">
                {product.price}$
              </span>
              <span className="text-lg mt-3 ml-7">
                {(product.price * product.discount) / 100}$
              </span>
            </div>
          ) : (
            <span className="text-lg mt-3">{product.price}$</span>
          )}
          <div className="flex">
            <Rating rating={product.rating} />
          </div>
          <div className="h-[50px]">
            <AddToCartButton product={product} userId={userId} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
