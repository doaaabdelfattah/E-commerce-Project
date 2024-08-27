import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Footer from "../components/Footer";
import Header from "../components/Header";
import { fetchProductsByCategory } from "../redux/reducers/productsSlice";
import FeaturedProducts from '../components/product/FeaturedProducts';
import { FaRegHeart, FaEye } from 'react-icons/fa';
import { RiShoppingCartLine } from 'react-icons/ri';
import Rating from '../components/Rating';
import ProductCard from '../components/product/ProductCard';

function ProductOfCategory() {
  const dispatch = useDispatch();
  const { category } = useParams();
  const products = useSelector((state) => state.products.products);
 

  useEffect(() => {
    if (category) {
      dispatch(fetchProductsByCategory(category));
       
    }
  }, [dispatch, category]);

  return (
    <>
      <Header />
      <div>
        
        <div>
          {products.length > 0 ? (
            <div className="flex flex-wrap mb-5">
              <div className="w-full">
                <div className="text-center flex justify-center items-center flex-col text-3xl mt-4  text-slate-600 font-semibold relative pb-[45px]">
                
                  
                </div>
              </div>
              <div className="w-full flex justify-center flex-wrap gap-5">
                {products.slice(0, 8).map((product, id) => (
                  <div
                    key={id}
                    className="border group w-[300px] transition-all duration-500 hover:shadow-md hover:-mt-3 cursor-pointer"
                  >
                    {/* <div className="relative p-[25px] overflow-hidden">
                      <img
                        className="sm:w-full w-full h-[240px]"
                        src={product.image}
                        alt={product.title}
                      />
                      <ul className="flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3">
                        <li className="w-[38px] h-[38px] cursor-pointer bg-[#BC9B80] flex justify-center items-center rounded-full hover:bg-[#BC9B80] hover:text-white hover:rotate-[720deg] transition-all">
                          <FaRegHeart />
                        </li>
                        <li className="w-[38px] h-[38px] cursor-pointer bg-[#BC9B80] flex justify-center items-center rounded-full hover:bg-[#BC9B80] hover:text-white hover:rotate-[720deg] transition-all">
                          <FaEye />
                        </li>
                        <li className="w-[38px] h-[38px] cursor-pointer bg-[#BC9B80] flex justify-center items-center rounded-full hover:bg-[#BC9B80] hover:text-white hover:rotate-[720deg] transition-all">
                          <RiShoppingCartLine />
                        </li>
                      </ul>
                    </div> */}
                    <ProductCard product={product} key={product.id} />
                    {/* <div className="py-3 text-slate-600 p-4 mt-2">
                      <h2 className="font-semibold text-slate-600 text-lg ">
                        {product.title}
                      </h2>
                      <div className="flex justify-start flex-col items-start gap-3">
                        <span className="text-lg mt-3">{product.price}$</span>
                        <div className="flex">
                          <Rating rating={product.rating} />
                        </div>
                      </div>
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>No products found in this category.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductOfCategory;