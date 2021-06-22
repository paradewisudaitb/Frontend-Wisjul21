import React, { useEffect, useState, Component } from 'react';
import './HomePage.scss';
import { Link } from 'wouter';

//Asset
import Logo from '../../images/logo/logo-dark-2020.png';
import Cloud from '../../images/bg/cloud.png';

const HomePage = () => {
  //Parallax
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);  

  //Carousel
  const [clickCount, setClickCount] = useState(0);
  const prev = () => {
    setClickCount(clickCount+2);
  };
  const next = () => {
    setClickCount(clickCount+1);
  };

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
        <button className='Arrow' onClick={prev}>-</button>
        <div className='btns'>
          <Link to='/majalah'><button className={'button'+((clickCount)%3+1)} style={{ backgroundImage: 'https://i.pinimg.com/originals/24/33/43/243343f8b1aa8fa14d6193e6080281fe.jpg' }}>Majalah</button></Link>
          <Link to='/galeri-apresiasi'><button className={'button'+((clickCount+1)%3+1)} style={{ backgroundImage: 'https://i.pinimg.com/originals/50/40/49/504049f26228049add642b58dc8dfcf1.jpg' }}>Galeri Wisudawan</button></Link>
          <button className={'button'+((clickCount+2)%3+1)} style={{ backgroundImage: 'https://i.pinimg.com/originals/fb/f6/8b/fbf68b12f8aaaa6fbd0a8abe21225450.jpg' }}>Gather Town</button>
        </div>
        <button className='Arrow' onClick={next}>+</button>
      </div>
    </div>
  );
};

export default HomePage;