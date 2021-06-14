import React from 'react';
import './Wisudawan.scss';
import PesanAnonim from '../../component/PesanAnonim/PesanAnonim';

export default function Wisudawan() {
  return (
    <div className='wisudawan'>
      {/* pesan anonim */}
      <div className='pesan-anonim'>
        <div className='pesan-anonim-wrapper'>
          <PesanAnonim />
        </div>
        <div className='kirim-button-wrapper'>
          <button className='kirim-button'>Kirim Ucapan</button>
        </div>
      </div>
    </div>
  );
}
