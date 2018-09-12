import React from 'react';
import logo from '../images/logo.svg';
import apple from '../images/apple.png';
import google from '../images/google.png';

const Footer = () => (
  <div className="footer-wrapper contain-pad">
    <div className="footer-logos">
      <img src={logo} alt="logo"/>
      <div className="footer-stores">
        <img src={apple} alt="apple store"/>
        <img src={google} alt="google store"/>
      </div>
      <p>Copyright SoundSnapz 2018. All rights reserved.</p>
    </div>
    <div className="links-wrapper">
      <div className="column">
        <li><span>Company</span></li>
        <li>Blog</li>
        <li>Brand Guidelines</li>
        <li>Careers</li>
        <li>Help</li>
      </div>
      <div className="column">
        <li><span>Business</span></li>
        <li>Brands</li>
        <li>Partnerships</li>
        <li>Press</li>
      </div>
      <div className="column">
        <li><span>Connect</span></li>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
        <li>Snapchat</li>
        <li>LinkedIn</li>
      </div>
    </div>
  </div>
);

export default Footer;