import React from 'react';
import WisudawanCardContainer from '../../component/WisudawanCard/WisudawanCardContainer';
import Logo from '../../images/ukj.png';
import ApresiasiCarousel from '../../component/ApresiasiCarousel/ApresiasiCarousel';
import './GaleriApresiasi.scss';

import { Footer } from '../../component/NavbarFooter/Footer';
import { Navbar } from '../../component/NavbarFooter/Navbar';

const GaleriApresiasi = () => {
  // const logoHimpunan = '../../images/ukj.png';

  const dataApresiasi = {
    'himpunan': 'hmif',
    'apresiasi':
    [
      {
        'tipeKontenApresiasi': 'poster',
        'linkKeKonten': 'https://townsquare.media/site/442/files/2013/05/TheFW_Up.jpg?w=630&h=932&q=75',
      },
      {
        'tipeKontenApresiasi': 'poster',
        'linkKeKonten': 'https://image.freepik.com/free-vector/space-vintage-colorful-horizontal-poster_225004-2209.jpg'
      },{
        'tipeKontenApresiasi': 'video',
        'linkKeKonten': 'https://storage.googleapis.com/spatial-thinker-315205/POS2B5695_EE/22a_1623528845_163209.mp4'
      },{
        'tipeKontenApresiasi': 'audio',
        'linkKeKonten': 'https://cdn.piapro.jp/mp3_a/s9/s9ihs6vgwgu9uv4u_20210306210143_audition.mp3'
      }]};

  return (
    <div className='galeri-apresiasi-page py-5'>
      <div className='himpunan'>
        <h1>Himpunan A</h1>
        <img src={Logo} className='himpunan-logo'/>
      </div> 
      
      <div className='apresiasi-wisudawan my-5'>
        <h1>Apresiasi Wisudawan</h1>
        <h2>Judul/Keterangan</h2>
        <ApresiasiCarousel {...dataApresiasi} />
      </div>
      
      <div className='daftar-wisudawan'>
        <h1>Daftar Wisudawan</h1>
        <form>
          <input
            placeholder='Cari Nama atau NIM'
            type='text'
          />
        </form>
        <div className='list-wisudawan'>
          <WisudawanCardContainer />
        </div>
      </div>

    </div>
  );
};

export default GaleriApresiasi;