import React from 'react';
import { Link } from 'wouter';

import './Navbar.scss';

import { NavbarLinks } from './NavbarLinks';

export const Brand = () => {
  return (
    <Link to='/'>          
      <h4 className="float-start me-2">LOGO</h4>
      <h4 className="float-start">WISJUL 2021</h4>
    </Link>
  );
};

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="ms-xl-5 ms-2 h-100">
        <Brand />
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
        <div className="navbar-nav ms-auto me-xl-4 me-2">
          <NavbarLinks />
        </div>
      </div>
    </nav>
  );
};