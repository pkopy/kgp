import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
  render () {
    return (
      <header className="Header">
      <div className="burger_menu" onClick={this.changeClass}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"/>
        </svg>
      </div>
        {/* <img src={logo} className="Header-logo" alt="logo" /> */}
        
          <div className="nav">
            <ul className="nav_list">
              <li className="nav_item"><Link to="/" className="nav_link">Home</Link></li>
              <li className="nav_item"><Link to="/info" className="nav_link">Info</Link></li>
              <li className="nav_item"><Link to="/x" className="nav_link">Contact</Link></li>
              <li className="nav_item">???</li>
            </ul>
          </div>
        
        
      </header>
    );
  };
};

export default Header