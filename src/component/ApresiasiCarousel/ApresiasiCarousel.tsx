import React, { useState } from 'react';
import { Apresiasi } from '../WisudawanCard/Interface';
import { ASSET_URL } from '../../api';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ApresiasiCarousel.scss';


const ApresiasiCarousel = ({ data } : { data: Apresiasi[] }) => {
  const [slide, setSlide] = useState(0);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [openedImageIdx, setOpenedImageIdx] = useState(0);
  const outsideElement = document.getElementById('img-01')!;
  const judul = data[slide].tipeKontenApresiasi;

  document.addEventListener('mousedown', (e) => {
    if (!(e.target == outsideElement)) {
      setIsImageOpen(false);
    }
  });

  const RenderComponent = (data: Apresiasi) => {
    if (data.tipeKontenApresiasi == 'video')
      return <video controls src={data.linkKeKonten} />;
    else if (data.tipeKontenApresiasi == 'audio')
      return <audio controls src={data.linkKeKonten} />;
    else if (data.tipeKontenApresiasi == 'poster'
             || data.tipeKontenApresiasi == 'puisi'
             || data.tipeKontenApresiasi == 'lainnya')
      return <img
        src={data.linkKeKonten}
        id='img-01'
      />;
  };

  const onClickCarousel = (i: number) => {
    if (data[i].tipeKontenApresiasi == 'poster'
      || data[i].tipeKontenApresiasi == 'puisi'
      || data[i].tipeKontenApresiasi == 'lainnya'
    ) {
      setIsImageOpen(true);
      setOpenedImageIdx(i);
    }
  };

  return (
    <div className='carousel-container'>
      <h3>
        {judul.charAt(0).toUpperCase() + judul.slice(1)}
      </h3>
      <div className='carousel'>
        <Carousel
          // autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          // width={'75vw'}
          // dynamicHeight={true}
          onChange={(e) => setSlide(e)}
          onClickItem={(e) => onClickCarousel(e)}
        >
          {data.map((row: Apresiasi, i: number) => (
            <div
              key={i}
            >
              {RenderComponent(row)}
            </div>
          ))}
        </Carousel>
      </div>
      {isImageOpen &&
        <div className='opened-img'>
          <img src={data[openedImageIdx].linkKeKonten} className='clicked-img' id='clicked-img' />
        </div>
      }
    </div>

  );
};

export default ApresiasiCarousel;