import { FaEye, FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import Rating from "../Rating";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory } from "../../redux/reducers/productsSlice";
import { addToCart } from "../../redux/reducers/cartSlice";

const FeaturedProducts = ({ categoryId }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
      dispatch(fetchProductsByCategory(categoryId));
  }, [dispatch, categoryId]);

  const handleClickAddToCart = (e, product) => {
    e.stopPropagation();
    dispatch(
      addToCart({
        productId: product.id,
        quantity: 1,
      })
    );
  };

  return (
    <div className="flex flex-wrap mx-auto">
      <div className="w-full">
        <div className="text-center flex justify-center items-center flex-col text-3xl mt-4 text-slate-600 font-semibold relative pb-[45px]">
          <h2>Featured Products</h2>
          <div className="w-[100px] h-[2px] bg-[#BC9B80] mt-4"></div>
        </div>
      </div>

      <div className="w-full flex justify-center flex-wrap  gap-5">
        {products.slice(0, 8).map((product) => (
          <div
            key={product._id}
            className="border group w-[300px] transition-all  duration-500 hover:shadow-md hover:-mt-3 cursor-pointer"
          >
            <div className="relative p-[25px] overflow-hidden">
              {/* if discount ============ */}
              {/* <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                30%
              </div> */}
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
                <li className="w-[38px] h-[38px] cursor-pointer bg-[#BC9B80] flex justify-center items-center rounded-full hover:bg-[#BC9B80] hover:text-white hover:rotate-[720deg] transition-all">
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

            <div className="py-3 text-slate-600 p-4 mt-2">
              <h2 className="font-semibold text-slate-600 text-lg ">
                {""}
                {product.title}
              </h2>
              <div className="flex justify-start flex-col items-start gap-3">
                <span className="text-lg mt-3">{product.price}$</span>
                <div className="flex">
                  <Rating rating={product.rating} />
                </div>
                <div className="h-[50px]">
                  <button
                    onClick={(e) => handleClickAddToCart(e, product)}
                    className="h-full uppercase font-semibold px-[4rem] text-white bg-[#1F212A] hover:bg-[#BC9B80] transition-all duration-300"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FeaturedProducts;
