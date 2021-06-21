import React from 'react';

import { Navbar } from '../../component/NavbarFooter/Navbar';
import { Footer } from '../../component/NavbarFooter/Footer';

import './KirimPesanPage.scss';

const maxMessageLength = 512;
const maxSenderNameLength = 30;

export const KirimPesanPage = () => {
  const charCount = (text: string, disp: HTMLElement, maxchar: number) => {
    disp.innerHTML =  text.length.toString() + '/' + maxchar;
  };

  const messageCount = (text: string) => {
    const display = document.getElementById('message-char-counter');
    if (display) charCount(text, display, maxMessageLength);
  };

  const senderCount = (text: string) => {
    const display = document.getElementById('sender-char-counter');
    if (display) charCount(text, display, maxSenderNameLength);
  };

  return (
    <div className="kirimpesan m-5">
      <div className="receiver d-flex flex-row">
        <div className='nama-wisudawan position-relative'>
          <div className='mt-2'>NIM Nama Wisudawan</div>
        </div>
        <div className="ms-3 mt-4 position-absolute">
          <img className='foto-wisudawan' src={'https://cdn0-production-images-kly.akamaized.net/Ja9uA3RnIVYicjGXzUK84Gm2I1Y=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2833449/original/006374100_1561027516-foto_diambil_dalam_waktu_yang_pas.jpg'} alt="Foto Wisudawan" />
        </div>
      </div>
      <div className="sender float-md-end m-5">
        <form action="">
          <div className="sender-name row mx-4 mt-4">
            <label className='sender-name-label col-2'>Dari :</label>
            <div className="col-10 text-start sender-name-input-background">
              <input className="sender-name-input w-75 float-start" maxLength={maxSenderNameLength} onChange={(e) => senderCount(e.target.value)}/>
              <label className='float-end small' id='sender-char-counter'>0/{maxSenderNameLength}</label>
            </div>
          </div>
          <div className="message-label row mx-4 mt-3">
            <div className='message-content-label col-2'>Pesan :</div>
            <div className="message-content-toolbar col-10">nanti diisi text format toolbar</div>
          </div>
          <div className="message-content-content mx-4 px-3">
            <textarea name='message' id='message-content' className='w-100 message-content' maxLength={maxMessageLength} onChange={(e) => messageCount(e.target.value)}/>
            <input type="submit" value="Submit" className='float-end btn btn-primary submit-button' />
            <label className="message-char-counter small float-end m-2" id='message-char-counter'>0/{maxMessageLength}</label>
          </div>
        </form>
      </div>
    </div>
  );
};