
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory } from "../redux/reducers/productsSlice";

const  SearchBar = () => {

  const [input, setInput] = useState("");



  //====== Search bar ======//
  const { results, loading, error } = useSelector((state) => state.search);
  const handleSearchChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    dispatch(setQuery(input));
    dispatch(fetchSearch(input));
  };
  const handleCategoryClick = (categoryId) => {
    dispatch(fetchProductsByCategory(categoryId));
  };

  return (
    <div className="w-9/12 flex-1 pl-8 md-lg:pl-0 md-lg:full">
            <div className="flex flex-wrap w-full justify-between items-center md-lg:gap-6">
              <div className="w-full">
                <div className="flex border h-[60px] mt-5 relative items-center gap-6">
                  {/* - - Select menu - -  */}
                  <div className="pl-4 relative after:absolute after:h-[30px] after:w-[1px] after:-right-[15px] after:bg-[#afafaf] md:hidden">
                    <select
                      onChange={(e) => {
                        const selectedCategory = e.target.value;
                        setCategory(selectedCategory);
                        handleCategoryClick(selectedCategory);
                      }}
                      className="font-semibold text-slate-600 px-2 h-full outline-0 border-none"
                      value={category}
                    >
                      <option value="">Select Category</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* - - - search input - - -  */}
                  <input
                    className="border-0 bg-transparent w-full text-slate-500 relative outline-0 px-3 h-full"
                    onChange={handleSearchChange}
                    value={input}
                    type="text"
                    placeholder="What do you need?"
                  />
                  <button
                    className="h-full uppercase font-semibold px-[4rem] text-white bg-[#1F212A] hover:bg-[#BC9B80] transition-all duration-300"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Displaying Search Results */}
            <div className="mt-4">
              {loading && <p>Loading...</p>}
              {error && <p className="text-red-500">{error.message}</p>}
              {results.length > 0 && (
                <ul>
                  {results.map((product) => (
                    <li key={product._id} className="py-2 border-b">
                     <Link to='/'>
                     {product.title}
                     </Link> 
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
  )
}

export default 