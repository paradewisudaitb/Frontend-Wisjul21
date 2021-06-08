import React from 'react';

import { Navbar } from '../../component/HeaderFooter/Navbar';
import { Footer } from '../../component/HeaderFooter/Footer';

import './KirimPesanPage.scss';

export const KirimPesanPage = () => {
  return (
    <>
      <Navbar />
      <div className="kirimpesan">
        <div className="receiver m-5 d-flex flex-row">
          <div className='nama-wisudawan position-relative'>
            <div className='mt-2'>NIM Nama Wisudawan</div>
          </div>
          <div className="ms-3 mt-4 position-absolute">
            <img className='foto-wisudawan' src={'https://cdn0-production-images-kly.akamaized.net/Ja9uA3RnIVYicjGXzUK84Gm2I1Y=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2833449/original/006374100_1561027516-foto_diambil_dalam_waktu_yang_pas.jpg'} alt="Foto Wisudawan" />
          </div>
        </div>
        <div className="sender float-md-end me-5">
          <div className="sender-name row mx-5 mt-4">
            <div className='sender-name-label col-2'>Dari :</div>
            <div className="sender-name-content col-10 text-start">Nama Pengirim</div>
          </div>
          <div className="message-label row mx-5 mt-3">
            <div className='message-content-label col-2'>Pesan :</div>
            <div className="message-content-toolbar col-10">nanti diisi text format toolbar</div>
          </div>
          <div className="message-content-content mx-5 text-align-justify">
            Helo
          </div>
            
        </div>
      </div>
      <Footer />
    </>
  );
};