import React, { useEffect, useState } from 'react';
import './HomePage.scss';
import { Link } from 'wouter';


//Asset
import Youtube from '../../icons/YoutubeIcon.svg';

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
      <div className='filter'>
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
          <button className='youtube mx-auto' style={{ backgroundImage: Youtube, transform: `translateY(-${offsetY * 0.6}px)`, opacity: `${1-(offsetY/window.outerHeight)}` }}></button>
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
            <p className='misi'>
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
            </p>
          </div>

          

          {/* Buttons */}
          <div className='event-buttons'>
            <h1>Ada apa di Perayaan Wisuda Juli ITB 2021?</h1>
            <div className='btn-container'>
              <button className='arrow' onClick={prev}></button>
              <div className='btns'>
                <Link to='/majalah'><button className={'button'+((clickCount)%3+1)} style={{ backgroundImage: `url('${ASSET_URL}/assets/images/home-buttons/majalah.png')` }}><h2>Majalah</h2></button></Link>
                <Link to='/galeri-apresiasi'><button className={'button'+((clickCount+1)%3+1)} style={{ backgroundImage: `url('${ASSET_URL}/assets/images/home-buttons/hmj.png')` }}><h2>Galeri Apresiasi</h2></button></Link>
                <button className={'button'+((clickCount+2)%3+1)} style={{ backgroundImage: `url('${ASSET_URL}/assets/images/home-buttons/gathertown.png')` }}><h2>Gather Town</h2></button>
              </div>
              <button className='arrow' onClick={next}></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;