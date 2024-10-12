// src/App.js
import React from 'react';
import FullPage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage';
import Header from './components/Header';
import './App.scss';
import ProductSection from './components/ProductSection';
import ContactForm from './components/ContactForm'
import AboutSection from './components/About';

const App = () => {
  return (
    // {/* //#9cd7ff  #06acff #000000 and #fafafa  */ }
    <div>
      <Header />
      <FullPage>
        <FullPageSections>
          <FullpageSection style={{ backgroundColor: '#ffffff', height: '100vh', width: '100vw' }}>
            <section className="about-section" style={{
              backgroundColor: '#06acff', border: '1px  solid black'
            }}>
              <AboutSection />
            </section>
          </FullpageSection>

          <FullpageSection style={{ backgroundColor: ' #f5f5f5', height: '100vh', width: '100vw' }}>
            <section className="project-section" style={{
              backgroundColor: ' #f5f5f5', border: '1px  solid black'
            }}>
              <ProductSection />
              {/* Products or Project details */}
            </section>
          </FullpageSection>

          <FullpageSection style={{ backgroundColor: '#ffffff', height: '100vh', width: '100vw' }}>
            <section className="contact-section" style={{
              backgroundColor: 'black', border: '1px  solid black'
            }}>
              <ContactForm />
            </section>
          </FullpageSection>
        </FullPageSections>
      </FullPage>
    </div>
  );
};

export default App;
