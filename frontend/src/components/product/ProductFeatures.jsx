import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

const ProductFeatures = () => {
  const pricesOff = [8, 10, 12, 15, 20, 25];
  return (
    <div className="w-[85%] flex flex-wrap mx-auto">
      <div className='w-full'>
        <div className='text-center flex justify-center items-center flex-col text-4xl text-slate-600 font-bold relative pb-[45px]'>
          <h2>Product Features</h2>
          <div className="w-[100px] h-[2px] bg-[#059473] mt-4"></div>
        </div>
        <div className='w-full grid grid-cols-4 md-lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
          {
           [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div key={index} className='border group transition-all duration-500 hover:shadow-md hover:-mt-3'>
              <div className='relative overflow-hidden flex justify-center items-center'>
                <div className='flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs top-2 left-2'>
                  {pricesOff[index]}%
                </div>
                <img src={`http://localhost:3000/images/products/${item + 1}.webp`} alt="product" className='sm:w-full w-full cursor-pointer h-[240px]' />
                <ul className='flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3'>
                  <li className='w-[38px] h-[38px] cursor-pointer bg-white hover:text-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:rotate-[720deg] transition-all'>
                    <MdOutlineShoppingCart />
                  </li>
                  <li className='w-[38px] h-[38px] cursor-pointer bg-white hover:text-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:rotate-[720deg] transition-all'>
                    <CiHeart />
                  </li>
                  <li className='w-[38px] h-[38px] cursor-pointer bg-white hover:text-white flex justify-center items-center rounded-full hover:bg-[#059473] hover:rotate-[720deg] transition-all'>
                    <FaEye />
                  </li>
                </ul>
              </div>
            </div>
          ))
          }

        </div>
    </div>
    </div>
  );

};

export default ProductFeatures;