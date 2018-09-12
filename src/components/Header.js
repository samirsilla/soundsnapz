import React from 'react';
import logo from '../images/logo.svg';

const Header = () => (
  <div className="header-wrapper contain-pad">
    <img className="logo" src={logo} alt="logo"/>
    <nav>
      <li>Charts</li>
      <li>Apps</li>
      <li>Music</li>
      <li>Artists</li>
      <li><span>Download</span></li>
    </nav>
  </div>
);

export default Header;