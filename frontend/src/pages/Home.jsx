import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Category from "../components/Category";
import ProductFeatures from "../components/product/ProductFeatures";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Category />
      <div className="py-[50px]">
      <ProductFeatures />
      </div>
    </div>
  );
};

export default Home;
