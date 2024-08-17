import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Products({ title }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const products = [
    [1, 2, 3],
    [4, 5, 6],
  ];

  const CustomButton = ({ next, prev }) => {
    return (
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold text-slate-600">{title}</div>
        <div className="flex justify-center items-center gap-3 text-slate-600 mr-10">
          <button
            onClick={() => prev()}
            className="w-[30px] h-[30px] bg-slate-300 flex justify-center items-center "
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={() => next()}
            className="w-[30px] h-[30px] bg-slate-300 hover:bg-slate-500 flex justify-center items-center "
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col-reverse gap-4">
      <Carousel
        autoPlay={false}
        infinite={false}
        arrows={false}
        responsive={responsive}
        renderButtonGroupOutside={true}
        customButtonGroup={<CustomButton />}
      >
        {products.map((p, i) => {
          return (
            <div
              key={i}
              className="flex flex-col justify-start items-start gap-4"
            >
              {p.map((pl, j) => (
                <Link
                  key={j}
                  to="#"
                  className="flex justify-start items-start custom-hover-effect "
                >
                  <img
                    className="w-[140px] h-[140px]  "
                    src={`http://localhost:3000/images/products/${pl}.webp`}
                    alt=""
                  />
                  <div className="hover:text-[#BC9B80] py-3 px-3 flex flex-col justify-start items-start gap-1">
                    <h2 className="hover:text-[#BC9B80] text-slate-600">
                      Product Name
                    </h2>
                    <span className="text-slate-600 text-lg font-semibold hover:text-[#BC9B80]">
                      $545
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Products;
