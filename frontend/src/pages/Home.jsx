import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Category from "../components/Category";
import ProductFeatures from "../components/product/ProductFeatures";
import Products from "../components/Product"
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Category />
      <div className="py-[50px]">
      <ProductFeatures />
      </div>
      <div className="py-10">
        <div className="w-[85%] flex flex-wrap mx-auto"  >
          <div className="grid w-full grid-cols-3 md-lg:grid-cols-2 md:grid-cols-1 gap-7" >
            <div className="overflow-hidden" >
              <Products />
            </div>
            <div className="overflow-hidden" >
              <Products />
            </div>
            <div className="overflow-hidden" >
              <Products />
            </div>
            
          </div>

        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Home;
