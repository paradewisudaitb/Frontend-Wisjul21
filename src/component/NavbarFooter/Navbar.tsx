import React, { useState } from 'react';
import { Link } from 'wouter';

import './Navbar.scss';

import { NavbarLinks } from './NavbarLinks';

export const Brand = () => {
  return (
    <Link to='/' className="brand float-start my-auto">          
      <h4 className="float-start me-2">LOGO</h4>
      <h4 className="float-start">WISJUL 2021</h4>
    </Link>
  );
};

const toggleOpen = () => {
  const drops = document.getElementById('drops');
  const but = document.getElementById('toggle');

  if (drops && but) {
    if (!drops.className.includes('active')) {
      but.className += ' toggle-active';
      drops.className += ' drops-active';
    } else {
      but.className = but.className.replace('toggle-active', '').trim();
      drops.className = drops.className.replace('drops-active', '').trim();
    }
  }
};

export const Navbar = () => {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <nav className="navbar px-2 px-xl-5">
        <Brand />
        <div className="navbar-nav ms-auto">
          <NavbarLinks />
        </div>
        <button className="burger-button" onClick={toggleOpen}>
          <div id='toggle' className='toggle'/>
        </button>
      </nav>
      <div className="drops" id='drops'>
        <NavbarLinks />
      </div>
    </>
  );
};