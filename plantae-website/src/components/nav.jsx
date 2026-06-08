import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        
        {/*---------------- Logo -----------*/ }
          <div className="logo-box">
        <img src="/logo.png" alt="Plantae" className="logo" />
         </div>
        
        </div>

    </nav>
   
    
  );
};

export default Nav;