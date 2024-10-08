// src/components/Header.js
import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/assets/holo-logo.png" alt="Holo Roof Logo" className="logo" />
        <div className="text-container">
          <p>കാലാവസ്ഥയുടെ കാവൽക്കരൻ</p>
          <p>The Ultimate Weather Guard</p>
        </div>
      </div>
    </header>
  );
};

export default Header;



