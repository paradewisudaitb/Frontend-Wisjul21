import React, { useEffect, useState } from 'react';
import './HomePage.scss';
import { Link } from 'wouter';
import { ASSET_URL } from '../../api';

import { MAJALAH_PAGE, GALERI_HMJ_PAGE, GATHERTOWN_PAGE } from '../../routes/routes';
import { ToTop } from '../../component/ScrollToTop/ScrollToTop';

//Asset
import Stroke from '../../images/bg/Stroke.png';

const HomePage = (): JSX.Element => {
  //Parallax
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset/window.innerHeight);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //Carousel
  const [clickCount, setClickCount] = useState(0);
  const prev = () => {
    setClickCount(clickCount+1);
  };
  const next = () => {
    setClickCount(clickCount+2);
  };

  return (
    <div className='homepage'>
      {/* HEADER ASSETS */}
      {/* Clouds */}
      <div className='cloud-container'>
        <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/main/awan%201-01.png`} style={{ transform: `translateY(-${offsetY * 674}px)` }} />
        <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/main/awan%202-01.png`} style={{ transform: `translateY(-${offsetY * 746}px)` }} />
        <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/main/awan%203-01.png`} style={{ transform: `translateY(-${offsetY * 800}px)` }} />
        <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/main/awan%204-01.png`} style={{ transform: `translateY(-${offsetY * 723}px)` }} />
        <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/main/awan%205-01.png`} style={{ transform: `translateY(-${offsetY * 653}px)` }} />
        <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/header/awan%20kanan.png`} style={{ transform: `translateY(-${offsetY *634}px)` }} />
        <img className='cloud' src={`${ASSET_URL}/assets/images/vistock/header/awan%20kiri.png`} style={{ transform: `translateY(-${offsetY * 673}px)` }} />
      </div>
      <div className='bg-container mt-5'>
        {/* Volcano */}
        <div className='bg' style={{ backgroundImage: `url(${ASSET_URL}/assets/images/background/header.jpg)`, opacity: `${1-(offsetY)*1.7}` }}></div>
        <img className='smoke' alt='Asap' src={`${ASSET_URL}/assets/images/vistock/header/asap.png`} style={{ transform: `translateY(-${offsetY * 200}px)`, opacity: `${1-(offsetY)*2}` }} />
        <img className='volcanoes' alt='Gunung Berapi' src={`${ASSET_URL}/assets/images/vistock/header/gunung%20pinggir.png`} style={{ transform: `translateY(${offsetY * 100}px)`, opacity: `${1-(offsetY)*1.7}` }} />
        <img className='volcano' alt='Gunung Berapi Meletus' src={`${ASSET_URL}/assets/images/vistock/header/gunung%20tengah.png`} style={{ transform: `translateY(-${offsetY * 200}px)`, opacity: `${1-(offsetY)*1.5}` }} />
      </div>

      {/* HEADER CONTENT */}
      {/* Desktop Tagline */}
      <div className='tagline-container'>
        <h3 className='tagline1' style={{ transform: `translateY(${offsetY*230 - offsetY*offsetY*175}vh) translateX(${(offsetY * 32.5)%(window.innerWidth/20)}vw) scale(${1-(offsetY*0.6)})` }}>Metamorphose to find</h3>
        <h3 className='tagline2' style={{ transform: `translateY(${offsetY*211 - offsetY*offsetY*175}vh) translateX(-${(offsetY * 32.5)%(window.innerWidth/20)}vw) scale(${1-(offsetY*0.6)}` }}>the path to the blossom</h3>
      </div>
      <div className='tagline-container'>
        <h1 className='tagline1' style={{ transform: `translateY(${offsetY*230 - offsetY*offsetY*175}vh) translateX(${(offsetY * 32.5)%(window.innerWidth/20)}vw) scale(${1-(offsetY*0.6)}` }}>Metamorphose to find</h1>
        <h1 className='tagline2' style={{ transform: `translateY(${offsetY*211 - offsetY*offsetY*175}vh) translateX(-${(offsetY * 32.5)%(window.innerWidth/20)}vw) scale(${1-(offsetY*0.6)}` }}>the path to the blossom</h1>
      </div>
      {/* Logo, Phone Tagline, and Youtube Button */}
      <div className='header-container pt-5'>
        <div className='logotagline' style={{ transform: `translateY(${offsetY*215 - offsetY*offsetY*175}vh)` }}>
          <img src={`${ASSET_URL}/assets/logo/min.png`} alt='Logo Wisuda Juli 2021' className='logo' />
          <h6 className='tagline' style={{ backgroundImage: `url(${Stroke})` }}>Metamorphose to find <br /> the path to the blossom.</h6>
        </div>
        <a href='https://www.youtube.com'
          target='_blank'
          rel='noopener noreferrer'
          className='youtube mx-auto'
          style={{ transform: `translateY(-${offsetY * 648}px)`, opacity: `${1-offsetY}` }}>
        </a>
      </div>

      {/* MAIN ASSETS */}
      <div className='main-container'>
        {/* Clouds */}
        <img className='cloud-main1' src={`${ASSET_URL}/assets/images/vistock/main/awan%204-01.png`} />
        <img className='cloud-main2' src={`${ASSET_URL}/assets/images/vistock/main/awan%202-01.png`} />

        {/* MAIN CONTENT */}
        {/* Visi-Misi */}
        <div className='visi-misi'>
          <img className='feather1' src={`${ASSET_URL}/assets/images/vistock/main/bulu.png`} />
          <h1 className='VISI'>VISI</h1>
          <p className='visi'>“Perayaan Wisuda Juli 2021 sebagai wadah apresiasi purnastudi dengan kolaborasi seluruh elemen yang bergelora dan memberikan inspirasi dalam meraih mimpi.”</p> 
          <h1 className='MISI'>MISI</h1>
          <div className='misi'>
            <ol>
              <li>
                Menjadikan Perayaan Wisuda Juli 2021 sebagai wadah apresiasi purnastudi dengan melibatkan elemen dalam ITB.
                <ul>
                  <li>Membuat acara apresiasi wisudawan dimana massa kampus dapat berperan aktif di dalamnya.</li>
                  <li>Menyediakan wadah untuk menampung aspirasi dari massa kampus sebagai salah satu bentuk kolaborasi.</li>
                </ul>
              </li>
              <br />
              <li>
                Menjadikan Perayaan Wisuda Juli 2021 sebagai sarana pengembangan diri dan pemenuhan profil bagi wisudawan dan mahasiswa.
                <ul>
                  <li>Menyediakan wadah pendidikan dan pelatihan kepada panitia dalam bidangnya masing-masing untuk mengoptimalkan potensinya dalam kepanitiaan.</li>
                  <li>Menyediakan wadah konsultasi kepada wisudawan mengenai kehidupan pasca kelulusan.</li>
                </ul>
              </li>
              <br />
              <li>
                Menjadikan Perayaan Wisuda Juli 2021 sebagai pemantik semangat bagi seluruh elemen yang terlibat untuk bermimpi lebih dan terlibat dalam kemajuan peradaban Indonesia.
                <ul>
                  <li>Membuat acara dimana terjadi interaksi antara mahasiswa, wisudawan, dan masyarakat melalui forum diskusi dan pengabdian masyarakat.</li>
                  <li>Menciptakan suatu karya yang memuat mimpi dan cerita wisudawan yang menginspirasi.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        {/* Buttons */}
        <div className='event-buttons'>
          <h1 className='btn-title text-center'>Ada apa saja di Perayaan Wisuda Juli ITB 2021?</h1>
          <img className='feather2' src={`${ASSET_URL}/assets/images/vistock/main/bulu.png`} />
          <div className='btn-container'>
            <button className='arrow' onClick={prev}><i className="fa fa-chevron-left fa-lg"></i></button>
            <div className='btns'>
              <Link onClick={ToTop} to={MAJALAH_PAGE.path}><button className={'button'+((clickCount)%3+1)} style={{ backgroundImage: `url('${ASSET_URL}/assets/images/home-buttons/majalah.png')` }}><h2>Majalah Metamorfosis</h2></button></Link>
              <Link onClick={ToTop} to={GALERI_HMJ_PAGE.path}><button className={'button'+((clickCount+1)%3+1)} style={{ backgroundImage: `url('${ASSET_URL}/assets/images/home-buttons/hmj.png')` }}><h2>Galeri Apresiasi</h2></button></Link>
              <Link onClick={ToTop} to={GATHERTOWN_PAGE.path}><button className={'button'+((clickCount+2)%3+1)} style={{ backgroundImage: `url('${ASSET_URL}/assets/images/home-buttons/gathertown.png')` }}><h2>Gather Town</h2></button></Link>
            </div>
            <button className='arrow' onClick={next}><i className="fa fa-chevron-right fa-lg"></i></button>
          </div>
          <img className='cloud-main3' src={`${ASSET_URL}/assets/images/vistock/main/awan%205-01.png`} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;