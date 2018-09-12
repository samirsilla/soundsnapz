import React from "react";
import havana from '../images/havana.jpg';
import khalid from '../images/khalid.jpg';
import malone from '../images/malone.jpg';

const Hero = () => (
  <React.Fragment>
    <div className="hero-wrapper contain-pad">
      <div className="hero-copy-container">
        <h1>
          Top artists and thousands of songs now on <span>SoundSnapz</span>.
        </h1>
        <a className="cta-btn" href="#">
          Stream Free Now
        </a>
      </div>
      <div className="albums-container contain-pad">
      <img src={havana} alt="havana album cover"/>
      <img src={khalid} alt="khalid album cover"/>
      <img src={malone} alt="malone album cover"/>
    </div>
    </div>
    
  </React.Fragment>
);

export default Hero;
