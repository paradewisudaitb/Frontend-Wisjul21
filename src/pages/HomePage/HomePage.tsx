import React, { useEffect, useState } from 'react';
import './HomePage.scss';
import { Link } from 'wouter';


//Asset
import Logo from '../../images/logo/logo-dark-2020.png';
import Cloud from '../../images/bg/cloud.png';
import Background from '../../images/bg/header.png';

const HomePage = () => {

  const ASSET_URL = 'https://wisjul21.sgp1.cdn.digitaloceanspaces.com';

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
      {/* Header Background */}
      <div className='bg mt-5' style={{ backgroundImage: `url(${ASSET_URL}/assets/images/background/header.jpg)`}} >
        {/* Clouds */}
        <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/main/awan%201-01.png`} style={{ transform: `translateY(-${offsetY * 0.6}px)`, zIndex: 6 }} />
        <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/main/awan%202-01.png`} style={{ transform: `translateY(-${offsetY * 0.7}px)`, zIndex: 7 }} /> 
        <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/main/awan%203-01.png`} style={{ transform: `translateY(-${offsetY * 0.2}px)`, zIndex: 2 }} />
        <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/main/awan%204-01.png`} style={{ transform: `translateY(-${offsetY * 0.3}px)`, zIndex: 3 }} />
        <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/main/awan%205-01.png`} style={{ transform: `translateY(-${offsetY * 0.4}px)`, zIndex: 4 }} />
        <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/header/awan%20kanan.png`} style={{ transform: `translateY(-${offsetY * 0.5}px)`, zIndex: 5 }} />
        <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/header/awan%20kiri.png`} style={{ transform: `translateY(-${offsetY * 0.1}px)`, zIndex: 1 }} />
        {/* Volcano */}
        <img className='smoke' alt='Asap' src={`${ASSET_URL}/assets/images/vistock/header/asap.png`} />
        <img className='volcanoes' alt='Gunung Berapi' src={`${ASSET_URL}/assets/images/vistock/header/gunung%20pinggir.png`} />
        <img className='volcano' alt='Gunung Berapi Meletus' src={`${ASSET_URL}/assets/images/vistock/header/gunung%20tengah.png`} />
      </div>

      {/* Header Content */}
      <div className='home-container pt-5'>
        <div className='logotagline'>
          <img src={`${ASSET_URL}/assets/logo/min.png`} alt='Logo Wisuda Juli 2021' className='logo' />
          <h5 className='tagline'>Metamorphose to find the path to the blossom.</h5>
        </div>
        <button className='youtube mx-auto'>Youtube</button>
      </div>

      <div className='main-container' style={{ backgroundImage: `url(${ASSET_URL}/assets/images/background/main.jpg)`}}>
        {/* Visi-Misi */}
        <div className='visi-misi'>
          <h1 className='VISI'>VISI</h1>
          <p className='visi'>“Perayaan Wisuda Juli 2021 sebagai wadah apresiasi purnastudi dengan kolaborasi seluruh elemen yang bergelora dan memberikan inspirasi dalam meraih mimpi.”</p>
          <h1 className='MISI'>MISI</h1>
          <p className='misi'>misi msis sismsi misis msims smis smisms misms msimis smismism smismis smismis ms smsi smsims msims s Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        {/* Buttons */}
        <h1 className="text-center">Wisuda Juli 2021</h1>
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
    </div>
  );
};

export default HomePage;