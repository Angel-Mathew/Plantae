
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        
        {/*---------------- Logo -----------*/ }
          <div className="logo-box">
        <img src="/logo.png" alt="Plantae" className="logo" />
         </div>
        
        </div>
        <ul className= "nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li
               className="contact-dropdown"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <span className="contact-trigger">Contact us</span>
          
          {dropdownVisible && (
            <div className="dropdown-menu">
              <p>plantae2026@gmail.com</p>
            </div>
          )}
            </li>
        </ul>

    </nav>
   
    
  );
};

export default Nav;