import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

function Products() {
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
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "http://localhost:3000/images/products/1.webp",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "http://localhost:3000/images/products/2.webp",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image: "http://localhost:3000/images/products/3.webp",
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
      image: "http://localhost:3000/images/products/4.webp",
    },
    {
      id: 5,
      name: "Product 5",
      price: 500,
      image: "http://localhost:3000/images/products/5.webp",
    },
    {
      id: 6,
      name: "Product 6",
      price: 600,
      image: "http://localhost:3000/images/products/2.webp",
    },
  ];

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="custom-button-group">
        <button onClick={() => previous()} disabled={currentSlide === 0}>
          Prev
        </button>
        <button
          onClick={() => next()}
          disabled={currentSlide === products.length - 1}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="flex gap-8">
      <Carousel
        autoPlay={false}
        infinite={false}
        arrows={false}
        transitionDuration={500}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        responsive={responsive}
      >
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </Carousel>
      <div className="flex flex-col justify-start gap-2">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="product-link">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
