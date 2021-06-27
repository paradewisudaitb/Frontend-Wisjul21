import { url } from 'inspector';
import React from 'react';

import './KirimPesanPage.scss';

const maxMessageLength = 255;
const maxSenderNameLength = 30;

export const KirimPesanPage = () => {
  const limit = 200;
  
  const nameinputresize = () => {
    const nameinput = document.getElementById('nameinput');
    if (nameinput) {
      console.log(nameinput.scrollHeight);
      nameinput.style.height = '';
      nameinput.style.height = Math.min(nameinput.scrollHeight, limit) + 'px';
    
    }
  };

  const wisudawan = {
    'nim':'13519188',
    'nama':'Josep Marcello',
    'foto':'https://cdn0-production-images-kly.akamaized.net/Ja9uA3RnIVYicjGXzUK84Gm2I1Y=/640x853/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2833449/original/006374100_1561027516-foto_diambil_dalam_waktu_yang_pas.jpg',
  };

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
    <div className="kirimpesan bg p-5">
      <img className='jeduar' src={'https://wisjul21.sgp1.cdn.digitaloceanspaces.com/assets/images/vistock/main/spark%202%20atas%20matahari.png'} alt="" />
      <img className='kumo' src={'https://wisjul21.sgp1.cdn.digitaloceanspaces.com/assets/images/vistock/header/awan%20kiri.png'} alt="" />
      <div className="receiver">
        <div className='nama-wisudawan'>
          <div className="text-center my-2">{ wisudawan.nim + ' ' + wisudawan.nama }</div>
        </div>
        <div className="foto-wisudawan-container">
          <img className='foto-wisudawan' src={wisudawan.foto} alt="Foto Wisudawan" />
        </div>
      </div>
      <div className="message">
        <form action="" className='mx-4'>
          <div className="sender-name mt-4">
            <label className='sender-name-label'>Dari</label>
            <div className="sender-name-input-container">
              <textarea id="nameinput" rows={1}  className="sender-name-input float-start" placeholder="Nama pengirim (opsional)" maxLength={maxSenderNameLength} onChange={(e) => senderCount(e.target.value)} onInput={nameinputresize}/>
              <label className='float-end small' id='sender-char-counter'>0/{maxSenderNameLength}</label>
            </div>
          </div>
          <div className="kirimpesan-line"></div>
          <div className="message-label">
            <div className='message-content-label'>Pesan</div>
          </div>
          <div className="message-content-content">
            <textarea name='message' placeholder="Ketik pesan di sini ... " id='message-content' className='w-100 message-content' maxLength={maxMessageLength} onChange={(e) => messageCount(e.target.value)}/>
          </div>
          <div className="mb-2 float-end">
            <label className="message-char-counter small m-2" id='message-char-counter'>0/{maxMessageLength}</label>
            <input type="submit" value="Submit" className='btn btn-primary submit-button' />
          </div>
        </form>
      </div>
    </div>
  ); 
};