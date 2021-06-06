import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ApresiasiCarousel.scss';
import Logo from '../../images/ukj.png';

const ApresiasiCarousel = () => {
  return (
    <div className='carousel'>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showArrows={false}>
        <div>
          <img src={Logo} />
          <p>tes</p>
        </div>
        <div>
          <img src={Logo}/>
          <p>tes 2</p>
        </div>
      </Carousel>
    </div>
  );
};

export default ApresiasiCarousel;