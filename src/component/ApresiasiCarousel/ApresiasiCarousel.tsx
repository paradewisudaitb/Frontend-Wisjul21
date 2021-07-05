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

  const isApresiasiImage = (tipeApresiasi: string) => {
    return (tipeApresiasi == 'poster' || tipeApresiasi == 'puisi' || tipeApresiasi == 'lainnya');
  };

  const RenderComponent = (data: IKontenApresiasi) => {
    switch (data.tipeKonten) {
      case 'video':
        return <video controls src={data.linkKonten} />;
      case 'musik':
        return <div className="audio-apresiasi"><audio controls src={data.linkKonten} /></div>;
      case 'website':
        return <a href={data.linkKonten}></a>;
      default:
        return (
          <div className='apresiasi-image-container'>
            <small className='apresiasi-warning-label'><i className="fa fa-exclamation-triangle"></i> Klik gambar untuk memperbesar</small>
            <img
              src={data.linkKonten}
              id='img-01'
            />
          </div>

        );
    }
  };

  const onClickCarousel = (i: number) => {
    if (isApresiasiImage(data[i].tipeKonten)) {
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
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          onChange={(e) => setSlide(e)}
          onClickItem={(e) => onClickCarousel(e)}
        >
          {data.map((row: IKontenApresiasi, i: number) => (
            <div
              key={i}
              className='apresiasi-item'
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