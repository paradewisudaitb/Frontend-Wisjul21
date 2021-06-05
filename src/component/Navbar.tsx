import React from 'react';
import { Link } from 'wouter';

import './Navbar.scss';

import { NavbarLinks } from './NavbarLinks';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link to='/' className='ms-5 navbar-brand'>          
        <h4 className="float-start me-2">LOGO</h4>
        <h4 className="float-start">WISJUL 2021</h4>
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
        <div className="navbar-nav ms-auto me-4">
          <NavbarLinks />
        </div>
      </div>
    </nav>
  );
};