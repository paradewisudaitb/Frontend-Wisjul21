import React, { useState } from 'react';
import { Link } from 'wouter';

import './Navbar.scss';

import { NavbarLinks } from './NavbarLinks';

export const Brand = () => {
  return (
    <Link to='/' className="brand d-flex my-auto">          
      <img src="https://wisjul21.sgp1.cdn.digitaloceanspaces.com/assets/logo/min.png" id="brand-logo" alt="Logo Wisjul" />
      <h2 className="" id="brand-text">WISJUL 2021</h2>
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
      <div className="navbar-container">
        <nav className="navbar px-2 px-xl-3">
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
      </div>
    </>
  );
};