import React, { useEffect, useState } from 'react';
import './Template.scss';

const Template = () => {
  //Parallax
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return(
    <div className='bg' style={{ transform: `background-position(-${offsetY * 0.5}px)` }}>
      <div className='layer-1'></div>
      <div className='layer-2'></div>
      <div className='layer-3'></div>
    </div>
  );
};

export default Template;