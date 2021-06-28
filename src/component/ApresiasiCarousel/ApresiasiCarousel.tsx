import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Apresiasi } from '../WisudawanCard/Interface';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ApresiasiCarousel.scss';

const ApresiasiCarousel = ({ data } : { data: Apresiasi[] }) => {

  const RenderComponent = (data: Apresiasi) => {
    if (data.tipeKontenApresiasi === 'video') 
      return <video controls src={data.linkKeKonten} />;
    else if (data.tipeKontenApresiasi === 'audio') 
      return <audio controls src={data.linkKeKonten} />;
    else if (data.tipeKontenApresiasi === 'poster')
      return <img src={data.linkKeKonten} />;
  };

  return (
    <div className='carousel'>
      <Carousel 
        autoPlay 
        infiniteLoop 
        showThumbs={false} 
        showStatus={false} 
        showArrows={false}
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
  );
};

export default ApresiasiCarousel;