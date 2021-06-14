import React, { useEffect, useState, Component } from 'react';
import './HomePage.scss';
import Logo from '../../images/logo/logo-dark-2020.png';
import Cloud from '../../images/bg/cloud.png';

import Template from './Template';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ButtonCarousel from './ButtonCarousel';

const HomePage = () => {
  //Parallax
  const [offsetY, setOffsetY] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [visible, setVisible] = useState('visible');
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const click = () => {
    setClickCount((clickCount+2)%3);
  };

  const ini = clickCount + 1;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);  

  useEffect(() => {
    console.log(clickCount);
  }, [clickCount]);

  return (
    <div className="pb-5">
      <div className='layers mt-5'>
        <img className='layer-1' src={Cloud} height='300px' style={{ transform: `translateY(-${offsetY * 0.5}px)` }} />
        <img className='layer-2' src={Cloud} height='200px' style={{ transform: `translateY(-${offsetY * 0.3}px)` }} /> 
      </div>
      <div className='home-container pt-5'>
        <div>
          <img src={Logo} alt='Logo Wisuda Juli 2021' className='logo' />
          <h5 className='tagline'>Ini tagline Wisjul 2021 Lorem Ipsum Lorem Ipsum</h5>
        </div>
        <button className='youtube mx-auto'>Youtube</button>
      </div>
      <div className='visi-misi'>
        <h1 className='VISI'>VISI</h1>
        <p className='visi'>visi visi visiii visisisiis viisiss viisisi visisiv isivisiiiv siisiiis viisivis ivisi iivisivi sivsi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h1 className='MISI'>MISI</h1>
        <p className='misi'>misi msis sismsi misis msims smis smisms misms msimis smismism smismis smismis ms smsi smsims msims s Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <h1>Wisuda Juli 2021</h1>
      <div className='btn-container'>
        <button className='Arrow' onClick={click}>{clickCount}</button>
        <div className='btns'>
          <button className='Galeri-btn' style={{ gridColumn: `${clickCount+1}`, zIndex: 4 }}>Galeri Wisudawan</button>
          <button className='Gather-btn' style={{ gridColumn: `${clickCount+2}` }}>Gather Town</button>
          <button className='Majalah-btn' style={{ gridColumn: `${clickCount+3}` }}>Majalah</button>
        </div>
        <button className='Arrow'>+</button>
      </div>
    </div>
  );
};

export default HomePage;