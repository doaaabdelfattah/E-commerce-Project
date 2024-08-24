import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsByCategory } from '../redux/reducers/productsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  setQuery,
  clearResults,
  fetchSearch,
} from "../redux/reducers/SearchResults";
import { Link } from 'react-router-dom';

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
    <div className="w-9/12 flex-1 pl-8 md-lg:pl-0 md-lg:full">
      {/* Middle Section (Search / Select) */}
      <div className="flex flex-wrap w-[700px] justify-between items-center md-lg:gap-6">
        <div className="w-full ">
          <div className="flex border h-[60px] mt-5 relative items-center gap-6 rounded-lg">
            {/* - - Select menu - -  */}
            
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
            
            <button className="bg-slate-600 w-[200px] text-white h-full px-4 uppercase font-semibold">Search</button>
          </div>
        </div>
      </div>

      {/* Displaying Search Results */}
      <div className="mt-4">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500 ml-[150px]">{error.message}</p>}
        {results.length > 0 && (
          
          <ul >
            
            
            {results.map((product) => (
              
              <li key={product._id} className="py-1 border w-[500px]">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-10 h-10 object-cover rounded-md mr-2"
                  />
                  <Link to={`/${product.id}`} className='font-semibold cursor-pointer'>
                    {product.title}
                  </Link>

                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchBar;