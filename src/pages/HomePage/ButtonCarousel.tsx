import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ButtonCarousel.scss';

const ButtonCarousel = () => {
  return (
    <div className='carousel mx-auto'>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showArrows={false}>
        <button className='Galeri-btn'>Galeri Wisudawan</button>
        <button className='Gather-btn'>Gather Town</button>
        <button className='Majalah-btn'>Majalah</button>
      </Carousel>
    </div>
  );
};

export default ButtonCarousel;