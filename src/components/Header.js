import React, { Component } from 'react';
import logo from '../images/logo.svg';

class Header extends Component {
  state = {
    isMenuOpen: false
  }

  toggleMenu = () => {
    this.setState((prevState, props) => ({
      isMenuOpen: !prevState.isMenuOpen
    }));

    this.state.isMenuOpen ? document.body.classList.remove('disable-scroll') : document.body.classList.add('disable-scroll');
    }

  render() {
    return (
      <React.Fragment>
      <div className="header-wrapper contain-pad">
        <img className="logo" src={logo} alt="logo"/>
        {this.state.isMenuOpen ? <svg onClick={this.toggleMenu} aria-hidden="true" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11 close-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg> : <svg onClick={this.toggleMenu} aria-hidden="true" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars fa-w-14 menu-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg> }
    
        <nav className="full-menu">
          <li>Charts</li>
          <li>Apps</li>
          <li>Music</li>
          <li>Artists</li>
          <li><span>Download</span></li>
        </nav>
      </div>
      {this.state.isMenuOpen ? <div className="mobile-menu-wrapper contain-pad">
      <nav className="mobile-menu">
      <li>Charts</li>
        <li>Apps</li>
        <li>Music</li>
        <li>Artists</li>
        <li>Download</li>
      </nav>
    </div> : '' }
      
        </React.Fragment>
    );
  }
} 

export default Header;