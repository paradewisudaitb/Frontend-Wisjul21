import React, { useEffect, useState, Component } from 'react';
import './HomePage.scss';
import Logo from '/mnt/d/Cave/Wisjul2021/Frontend-Wisjul21/src/images/logo/logo-dark-2020.png';
import Cloud from '/mnt/d/Cave/Wisjul2021/Frontend-Wisjul21/src/images/bg/cloud.png';
import Template from './Template';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ButtonCarousel from './ButtonCarousel';

const HomePage = () => {
  //Parallax
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='layers'>
        <img className='layer-1' src={Cloud} height='300px' style={{ transform: `translateY(-${offsetY * 0.5}px)` }}/>
        <img className='layer-2' src={Cloud} height='200px' style={{ transform: `translateY(-${offsetY * 0.3}px)` }}/>
      </div>
      <div className='container'>
        <div>
          <img src={Logo} alt='Logo Wisuda Juli 2021' className='logo' />
          <h6>Ini tagline Wisjul 2021 Lorem Ipsum Lorem Ipsum</h6>
        </div>
        <button className='youtube'>Youtube</button>
      </div>
      <div className='visi-misi'>
        <h1 className='VISI'>VISI</h1>
        <p className='visi'>visi visi visiii visisisiis viisiss viisisi visisiv isivisiiiv siisiiis viisivis ivisi iivisivi sivsi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h1 className='MISI'>MISI</h1>
        <p className='misi'>misi msis sismsi misis msims smis smisms misms msimis smismism smismis smismis ms smsi smsims msims s Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <h1>Wisuda Juli 2021</h1>
      <div className='btns'>
        <button className='Arrow'>-</button>
        <button className='Galeri-btn'>Galeri Wisudawan</button>
        <button className='Gather-btn'>Gather Town</button>
        <button className='Majalah-btn'>Majalah</button>
        <button className='Arrow'>+</button>
      </div>
      <ButtonCarousel />
    </>
  );
};

export default HomePage;