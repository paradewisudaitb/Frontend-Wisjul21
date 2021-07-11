import './Stage1.scss';

import { Navbar } from '../../component/NavbarFooter/Navbar';
import Sponsor from '../../component/Sponsor/Sponsor';

const Stage1 = () => {
  return (
    <>
      <Navbar />
      <div className='page-container'>
        <div className='congrats'>
          <img className='info-icon' alt='Info' />
          <h2>Congratulations!</h2>
        </div>
        <div className='stage1'>
          <h1>STAGE 1</h1>
          <img
            className='stage1-image'
            src='https://wisjul21.sgp1.cdn.digitaloceanspaces.com/assets/puzzle/Stage%201/full.png'
            alt='Gambar stage 1'
          />
        </div>
        <div className='take-picture'>
          <h2>Take Picture</h2>
          <a
            href='https://wisjul21.sgp1.cdn.digitaloceanspaces.com/assets/puzzle/Stage%201/full-ori.png'
            target='_blank'
          >
            <img className='cam-icon' alt='Kamera' />
          </a>
          <img className='door-icon' alt='Pintu keluar' />
        </div>
      </div>
      <Sponsor />
    </>
  );
};

export default Stage1;
