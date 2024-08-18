import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Shipping from "./pages/Shipping";
import Register from "./pages/register";
import Login from "./pages/login";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/:slug" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
