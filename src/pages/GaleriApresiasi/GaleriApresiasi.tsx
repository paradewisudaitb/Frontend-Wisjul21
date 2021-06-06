import React from 'react';
import WisudawanCardContainer from '../../component/WisudawanCard/WisudawanCardContainer';
import Logo from '../../images/ukj.png';
import ApresiasiCarousel from '../../component/ApresiasiCarousel/ApresiasiCarousel';
import './GaleriApresiasi.scss';

const GaleriApresiasi = () => {
  // const logoHimpunan = '../../images/ukj.png';

  return (
    <div className='galeri-apresiasi-page'>
      <div className='himpunan'>
        <h1>Himpunan A</h1>
        <img src={Logo} className='himpunan-logo'/>
      </div> 
      
      <div className='apresiasi-wisudawan'>
        <h1>Apresiasi Wisudawan</h1>
        <h2>Judul/Keterangan</h2>
        <ApresiasiCarousel />
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