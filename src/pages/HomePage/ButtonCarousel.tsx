import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ButtonCarousel.scss';
import Logo from '/mnt/d/Cave/Wisjul2021/Frontend-Wisjul21/src/images/logo/logo-dark-2020.png';

const ButtonCarousel = () => {
  return (
    <div className='carousel'>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showArrows={false}>
        <div>
          <button className='Galeri-btn'>Galeri Wisudawan</button>
        </div>
        <div>
          <button className='Gather-btn'>Gather Town</button>
        </div>
        <div>
          <button className='Majalah-btn'>Majalah</button>
        </div>
      </Carousel>
    </div>
  );
};

export default ButtonCarousel;