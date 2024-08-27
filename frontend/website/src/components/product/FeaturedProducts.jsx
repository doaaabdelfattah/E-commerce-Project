import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory, setPage } from "../../redux/reducers/productsSlice";
import ProductCard from "./ProductCard";
import Pagination from "../Pagination";

const FeaturedProducts = ({ categoryId, id='featured' }) => {
  const dispatch = useDispatch();
  const { products, page, totalPages } = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProductsByCategory({ categoryId, page }));
  }, [dispatch, categoryId, page]);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  return (
    <div className="flex flex-wrap mx-auto">
      <div className="w-full">
        <div className="text-center flex justify-center items-center flex-col text-3xl mt-4 text-slate-600 font-semibold relative pb-[45px]">
          <h2>Featured Products</h2>
          <div className="w-[100px] h-[2px] bg-[#BC9B80] mt-4"></div>
        </div>
      </div>

      <div className="w-full flex justify-center flex-wrap gap-5">
        {products && products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default FeaturedProducts;