import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ApresiasiCarousel.scss';

interface DataApresiasi {
  himpunan: string,
  apresiasi: Apresiasi[]
}

interface Apresiasi {
  tipeKontenApresiasi: string,
  linkKeKonten: string
}

const ApresiasiCarousel = (data: DataApresiasi) => {

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
        {data.apresiasi.map((row: Apresiasi, i: number) => (
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