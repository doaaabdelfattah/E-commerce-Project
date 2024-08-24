import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory } from "../redux/reducers/productsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  setQuery,
  clearResults,
  fetchSearch,
} from "../redux/reducers/SearchResults";
import { Link } from "react-router-dom";

function SearchBar() {
  const categories = useSelector((state) => state.categories.categories);
  const [category, setCategory] = useState("All Categories");
  const dispatch = useDispatch();

  const handleCategoryClick = (categoryId) => {
    dispatch(fetchProductsByCategory(categoryId));
  };

  //====== Search bar ======//
  const [input, setInput] = useState("");

  const { results, loading, error } = useSelector((state) => state.search);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (input) {
        dispatch(setQuery(input));
        dispatch(fetchSearch(input));
      } else {
        dispatch(clearResults());
      }
    }, 300); // Adjust the debounce delay as needed

    return () => clearTimeout(delayDebounceFn);
  }, [input, dispatch]);

  const handleSearchChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="w-8/12 flex justify-center ">
      <div className="flex-1">
        <div className="flex border h-[60px] mt-5 relative items-center gap-6 ">
          {/* - - - search input - - -  */}
          <input
            className="border-0 bg-transparent w-full text-slate-500 relative outline-0 px-3 h-full"
            onChange={handleSearchChange}
            value={input}
            type="text"
            placeholder="What do you need?"
          />
          {results.length > 0 && (
            <button
              className="h-full uppercase font-semibold px-[1.5rem] text-slate-600"
              onClick={() => {
                dispatch(clearResults(input));
                setInput("");
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          )}

          <button className="h-full uppercase font-semibold px-[4rem] text-white bg-[#1F212A] hover:bg-[#BC9B80] transition-all duration-300">
            Search
          </button>
        </div>

        <div className="mt-4 absolute z-100 bg-white">
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500 ml-[150px]">{error.message}</p>}
          {results.length > 0 && (
            <ul className="">
              {results.map((product) => (
                <li
                  key={product._id}
                  className="py-1 cursor-pointer hover:scale-105 transition-transform duration-300 hover:bg-gray-100 border-b w-[500px]"
                >
                  <div className="flex items-center">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-10 h-10 object-cover  mx-2"
                    />
                    <Link
                      to={`/${product.id}`}
                      className="font-semibold cursor-pointer"
                    >
                      {product.title}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
