import React from 'react';
import './AboutSection.scss';

const AboutSection = () => {
  return (
    <section className="about-section" style={{ height: '100vh', width: '100vw' }}>
      <div className="image-side">
        {/* <img src="/p.jpg" alt="Roof Image" /> */}
        <img src="/assets/p.jpg" alt="Green steel roof" />

      </div>
      <div className="content-side">
        <h2>About Holo Roof</h2>
        <p>Holo Roof manufactures high-quality steel roofing that offers protection from extreme weather conditions, combining durability with a modern aesthetic.</p>
      </div>
    </section>
  );
};

export default AboutSection;