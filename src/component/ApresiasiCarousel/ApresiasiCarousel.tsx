import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ApresiasiCarousel.scss';
import IKontenApresiasi from '../../interfaces/IKontenApresiasi';

const ApresiasiCarousel = ({ data } : { data: IKontenApresiasi[] }): JSX.Element => {
  const [slide, setSlide] = useState(0);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [openedImageIdx, setOpenedImageIdx] = useState(0);
  const outsideElement = document.getElementById('img-01')!;
  const judul = data[slide].tipeKonten;

  document.addEventListener('mousedown', (e) => {
    if (!(e.target == outsideElement)) {
      setIsImageOpen(false);
    }
  });

  const RenderComponent = (data: IKontenApresiasi) => {
    switch (data.tipeKonten) {
      case 'video':
        return <video controls src={data.linkKonten} />;
      case 'musik':
      case 'lagu':
        return <audio controls src={data.linkKonten} />;
      case 'website':
        return <a href={data.linkKonten}></a>;
      default:
        return <img
          src={data.linkKonten}
          id='img-01'
        />;
    }
    // if (data.tipeKonten == 'video')

    // else if (data.tipeKonten == 'musik')
    // else if (data.tipeKonten == 'poster'
    //          || data.tipeKonten  == 'puisi'
    //          || data.tipeKonten == 'lainnya')
  };

  const onClickCarousel = (i: number) => {
    if (data[i].tipeKonten == 'poster'
      || data[i].tipeKonten == 'puisi'
      || data[i].tipeKonten == 'lainnya'
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
          {data.map((row: IKontenApresiasi, i: number) => (
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
          <img src={data[openedImageIdx].linkKonten} className='clicked-img' id='clicked-img' />
        </div>
      }
    </div>

  );
};

export default ApresiasiCarousel;