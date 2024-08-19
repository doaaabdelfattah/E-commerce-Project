import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Shipping from "./pages/Shipping";
import Register from "./pages/register";
import Login from "./pages/login";
import ProductDetails from "./pages/ProductDetails";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/reducers/productsSlice";
import { fetchCategories } from "./redux/reducers/categoriesSlice";
import ScrollToTop from "./utils/ScrollToTop";
import ProductOfCategory from "./pages/productOfCategory";
function App() {
  // ======= Centralized Data Fetching for products
  const dispatch = useDispatch();
  // const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
       <Route path="/category/:category" element={<ProductOfCategory />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
