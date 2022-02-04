import React from 'react';
import logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div>
      <header className="home-header">
        <img src={logo} alt="logo" className="home-logo" />

      </header>
    </div>
  );
};

export default Header;
