import { FaEye, FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import Rating from "../Rating";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { add_to_cart, selectAllCart } from "../../redux/reducers/cartSlice";
import AddToCartButton from "../../utils/AddToCartButton";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useSelector((state) => state.auth);

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
      className="border group w-[300px] transition-all duration-500 hover:shadow-md hover:-mt-3 cursor-pointer"
      onClick={() => console.log("Product clicked:", product)}
    >
      <div className="relative p-[25px] overflow-hidden ">
        <Link to={`/${product.id}`}>
          <img
            className="sm:w-full w-full h-[240px]"
            src={product.image}
            alt={product.title}
          />
        </Link>

        <ul className="flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3">
          <li className="w-[38px] h-[38px] cursor-pointer bg-[#BC9B80] flex justify-center items-center rounded-full hover:bg-[#BC9B80] hover:text-white hover:rotate-[720deg] transition-all">
            <FaRegHeart />
          </li>
          <li
            className="w-[38px] h-[38px] cursor-pointer bg-[#BC9B80] flex justify-center items-center rounded-full hover:bg-[#BC9B80] hover:text-white hover:rotate-[720deg] transition-all"
            onClick={() => handleShowProduct(product)}
          >
            <FaEye />
          </li>
          <li
            className="w-[38px] h-[38px] cursor-pointer bg-[#BC9B80] flex justify-center items-center rounded-full hover:bg-[#BC9B80] hover:text-white hover:rotate-[720deg] transition-all"
            onClick={(e) => handleClickAddToCart(e, product)}
          >
            <RiShoppingCartLine />
          </li>
        </ul>
      </div>

      <div className="py-3 text-slate-600 p-4 mt-2 ">
        <h2 className="font-semibold text-slate-600 text-lg">
          {product.title}
        </h2>
        <div className="flex justify-start flex-col items-start gap-3">
          <span className="text-lg mt-3">{product.price}$</span>
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
