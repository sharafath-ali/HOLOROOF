import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css'; // Import styles
import './ProductSection.scss'; // Custom styles

const ProductSection = () => {
  const splideOptions = {
    type: 'loop', // Infinite scrolling
    perPage: 1,   // One card at a time
    perMove: 1,   // Move one card per slide
    autoplay: true,
    pauseOnHover: true,
    arrows: true, // Enable arrows for sliding
    pagination: true,
    speed: 600,
    cover: true,
    gap: '10px',
    breakpoints: {
      640: {
        arrows: false, // Hide arrows on smaller screens
        pagination: true,
      },
    },
  };

  return (
    <section className="product-section">
      <h2>Our Products</h2>
      <Splide options={splideOptions} className="product-slider">
        {Array.from({ length: 4 }).map((_, index) => (
          <SplideSlide key={index}>
            <div className="product">
              <img
                src={`/assets/product${index + 1}.png`}
                alt={`Product ${index + 1}`}
                className="product-image"
              />
              <h3>Product {index + 1}</h3>
              <p>A great product with unique features.</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default ProductSection;





