import React from 'react';
import logo from './assets/srm-logo';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="myImage">
        <img src={logo} width="75" height="75" />
      </div>
      <span className="navbar-text">Ocular Image Classification</span>
    </div>
  );
}

export default Navbar;
