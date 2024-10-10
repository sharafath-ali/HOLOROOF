import React, { useEffect, useRef } from 'react';
import './ProductSection.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProductSection = () => {
  const productRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(productRef.current, { opacity: 0, y: 50 }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: productRef.current,
        start: "top 80%", // Trigger when top of the section hits 80% of the viewport
        toggleActions: "play none none none",
      }
    });
  }, []);

  return (
    <section className="product-section" style={{ backgroundColor: 'green', height: '100vh', width: '100vw' }}>
      <h2>Our Products</h2>
      <div className="products" ref={productRef}>
        <div className="product">
          <img src="/assets/product1.png" alt="Product 1" />
          <h3>Product 1</h3>
        </div>
        <div className="product">
          <img src="../assets/product2.png" alt="Product 2" />
          <h3>Product 2</h3>
        </div>
        <div className="product">
          <img src="../assets/product3.png" alt="Product 3" />
          <h3>Product 3</h3>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;



