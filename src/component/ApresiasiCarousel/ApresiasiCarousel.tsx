import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Apresiasi } from '../WisudawanCard/Interface';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ApresiasiCarousel.scss';

const ApresiasiCarousel = ({ data } : { data: Apresiasi[] }) => {
  const [slide, setSlide] = useState(0);
  const judul = data[slide].tipeKontenApresiasi;

  const RenderComponent = (data: Apresiasi) => {
    if (data.tipeKontenApresiasi === 'video')
      return <video controls src={data.linkKeKonten} />;
    else if (data.tipeKontenApresiasi === 'audio') 
      return <audio controls src={data.linkKeKonten} />;
    else if (data.tipeKontenApresiasi === 'poster')
      return <img src={data.linkKeKonten} />;
  };

  return (
    <div className='carousel-container'>
      <h3>
        {judul.charAt(0).toUpperCase() + judul.slice(1)}
      </h3>
      <div className='carousel'>
        <Carousel 
          autoPlay 
          infiniteLoop 
          showThumbs={false} 
          showStatus={false} 
          showArrows={false}
          onChange={(e) => setSlide(e)}
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
    </div>
  );
};

export default ApresiasiCarousel;