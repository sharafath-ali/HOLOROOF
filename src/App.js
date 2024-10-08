// src/App.js
import React from 'react';
import FullPage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import Header from './components/Header';
import './App.scss';
import ProductSection from "./components/ProductSection"

const App = () => {
  return (
    <div>
      <Header />
      <FullPage>
        <FullPageSections>
          <FullpageSection style={{ backgroundColor: '#f0f0f0', height: '100vh', paddingTop: '40px' }}>
            <section className="about-section">
              <h2>About Us</h2>
              <p>We provide the ultimate weather guard with Holo Roof.</p>
            </section>
          </FullpageSection>

          <FullpageSection style={{ backgroundColor: '#e0e0e0', height: '100vh', paddingTop: '40px' }}>
            <section className="project-section">
              <ProductSection />
              {/* Products or Project details */}
            </section>
          </FullpageSection>

          <FullpageSection style={{ backgroundColor: '#d0d0d0', height: '100vh', paddingTop: '40px' }}>
            <section className="contact-section">
              <h2>Contact Us</h2>
              <p>Get in touch for more information about our products.</p>
            </section>
          </FullpageSection>
        </FullPageSections>
      </FullPage>
    </div>
  );
};

export default App;
