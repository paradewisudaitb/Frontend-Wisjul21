import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'wouter';

const red_darker = '80, 10, 7'; // RGB of #590a07

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
  let open = false;
  const drops = document.getElementById('drops');
  const but = document.getElementById('toggle');

  if (drops && but) {
    if (!drops.className.includes('active')) {
      but.className += ' toggle-active';
      drops.className += ' drops-active';
      open = true;
    } else {
      but.className = but.className.replace('toggle-active', '').trim();
      drops.className = drops.className.replace('drops-active', '').trim();
      open = false;
    }
  }
};

interface INavbarHome {
  homePage?: boolean
}

export const Navbar = ({ homePage }: INavbarHome) => {
  const [opacity, setOpacity] = useState(0);
  const handleScroll = () => {
    let offsetY = (window.pageYOffset / window.innerHeight);
    if (offsetY > 1) offsetY = 1;
    setOpacity(offsetY);
  };
  // console.log(document.getElementById('navbar-home')?.style.backgroundColor);
  console.log(opacity);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="navbar-container">
        <nav className={`navbar ${homePage ? '' : 'default-color'} px-2 px-xl-3`} style={{ backgroundColor: `rgba(${red_darker}, ${opacity})`}}>
          <Brand />
          <div className="navbar-nav ms-auto">
            <NavbarLinks />
          </div>
          <button className="burger-button" onClick={toggleOpen}>
            <div id='toggle' className='toggle'/>
          </button>
        </nav>
        <div className={`drops ${homePage ? 'homepage-color' : 'default-color'} `} id='drops'>
          <NavbarLinks />
        </div>
      </div>
    </>
  );
};