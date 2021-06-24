import React, { useEffect, useState } from 'react';
import './HomePage.scss';
import { Link } from 'wouter';


//Asset
import Logo from '../../images/logo/logo-dark-2020.png';
import Cloud from '../../images/bg/cloud.png';
import Background from '../../images/bg/header.png';

const HomePage = () => {

  const ASSET_URL = 'https://wisjul21.sgp1.cdn.digitaloceanspaces.com';
  const youtubelogo = 'https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png';
  const galeri = 'https://wisjul21.sgp1.cdn.digitaloceanspaces.com/assets/images/home-buttons/hmj.png';

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
    <div className='main pb-5'>
      {/* THIS IS AN 'I HAVE NO IDEA HOW TO COVER THE WHOLE SCREEN WITH CLOUDS MOMENT, PLS HELP MAKE THIS MORE EFFICIENT */}
      {/* Clouds */}
      
      
      {/* Header */}
      <div className='bg-container mt-5'>
        {/* Volcano */}
        <div className='bg' style={{ backgroundImage: `url(${ASSET_URL}/assets/images/background/header.jpg)`, opacity: `${1-(offsetY/window.outerHeight)*1.7}` }}></div>
        <img className='smoke' alt='Asap' src={`${ASSET_URL}/assets/images/vistock/header/asap.png`} style={{ transform: `translateY(-${offsetY * 0.3}px)`, opacity: `${1-(offsetY/window.outerHeight)*2}` }} />
        <img className='volcanoes' alt='Gunung Berapi' src={`${ASSET_URL}/assets/images/vistock/header/gunung%20pinggir.png`} style={{ opacity: `${1-(offsetY/window.outerHeight)*1.7}` }} />
        <img className='volcano' alt='Gunung Berapi Meletus' src={`${ASSET_URL}/assets/images/vistock/header/gunung%20tengah.png`} style={{ transform: `translateY(-${offsetY * 0.2}px)`, opacity: `${1-(offsetY/window.outerHeight)*1.5}` }} />
      </div>

      {/* Header Content */}

      {/* (Kinda Inventive) Shadows */}
      <div className='tagline'>
        <h3 className='tagline1-shadow' style={{ transform: `translateY(${offsetY*0.21 - offsetY*offsetY*0.00015}vh) translateX(${offsetY*0.03}vw) scale(${1-(offsetY/window.innerHeight)*0.6})` }}>Metamorphose to find</h3>
        <h3 className='tagline2-shadow' style={{ transform: `translateY(${offsetY*0.195 - offsetY*offsetY*0.00015}vh) translateX(-${offsetY * 0.03}vw) scale(${1-(offsetY/window.innerHeight)*0.6}` }}>the path to the blossom</h3>
      </div>

      <div className='tagline'>
        <h1 className='tagline1' style={{ transform: `translateY(${offsetY*0.21 - offsetY*offsetY*0.00015}vh) translateX(${offsetY*0.03}vw) scale(${1-(offsetY/window.innerHeight)*0.6}` }}>Metamorphose to find</h1>
        <h1 className='tagline2' style={{ transform: `translateY(${offsetY*0.195 - offsetY*offsetY*0.00015}vh) translateX(-${offsetY * 0.03}vw) scale(${1-(offsetY/window.innerHeight)*0.6}` }}>the path to the blossom</h1>
      </div>
      
      <div className='home-container pt-5'>
        <div className='logotagline'>
          <img src={`${ASSET_URL}/assets/logo/min.png`} alt='Logo Wisuda Juli 2021' className='logo' style={{ transform: `translateY(${offsetY*0.2 - offsetY*offsetY*0.00015}vh)` }} />
          {/*<h5 className='tagline'>Metamorphose to find the path to the blossom.</h5>*/}
        </div>
        <button className='youtube mx-auto' style={{ backgroundImage: `url(${youtubelogo})`, transform: `translateY(-${offsetY * 0.6}px)`, opacity: `${1-(offsetY/window.outerHeight)}` }}>Youtube</button>
      </div>

      <div className='main-container'>

        <div className='cloud-container1'>
          <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/main/awan%201-01.png`}  />
          <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/main/awan%202-01.png`}  /> 
          <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/main/awan%203-01.png`}  />
          <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/main/awan%204-01.png`}  />
          <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/main/awan%205-01.png`}  />
          <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/header/awan%20kanan.png`}  />
          <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/header/awan%20kiri.png`}  />
        </div>

        {/* Visi-Misi */}
        <div className='visi-misi'>
          <h1 className='VISI'>VISI</h1>
          <p className='visi'>“Perayaan Wisuda Juli 2021 sebagai wadah apresiasi purnastudi dengan kolaborasi seluruh elemen yang bergelora dan memberikan inspirasi dalam meraih mimpi.”</p>
          <h1 className='MISI'>MISI</h1>
          <p className='misi'>misi msis sismsi misis msims smis smisms misms msimis smismism smismis smismis ms smsi smsims msims s Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        

        {/* Buttons */}
        <div className='event-buttons'>
          <h1>Wisuda Juli 2021</h1>
          <div className='btn-container'>
            <button className='Arrow' onClick={prev}>-</button>
            <div className='btns'>
              <Link to='/majalah'><button className={'button'+((clickCount)%3+1)} style={{ backgroundImage: `url('${ASSET_URL}/assets/images/home-buttons/majalah.png')` }}>Majalah</button></Link>
              <Link to='/galeri-apresiasi'><button className={'button'+((clickCount+1)%3+1)} style={{ backgroundImage: `url('${ASSET_URL}/assets/images/home-buttons/hmj.png')` }}>Galeri Apresiasi</button></Link>
              <button className={'button'+((clickCount+2)%3+1)} style={{ backgroundImage: `url('${ASSET_URL}/assets/images/home-buttons/gathertown.png')` }}>Gather Town</button>
            </div>
            <button className='Arrow' onClick={next}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;