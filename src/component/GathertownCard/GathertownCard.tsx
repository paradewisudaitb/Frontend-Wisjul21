import './GathertownCard.scss';
import LinkGathertown from '../LinkGathertown/LinkGathertown';
import { useState, useEffect } from 'react';
import { ASSET_URL } from '../../api';

const HMJCardContainer = (props: {
  namaHMJ: string;
  namaFakultas: string;
  linkGathertown: string;
  linkFoto: string;
}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 468;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const isMobile = width <= breakpoint;

  return (
    <div className='card-hmj-container'>
      <div className='card-hmj'>
        <div className='card-flex'>
          <div className='image-hmj'>
            <img
              alt={'logo ' + props.namaHMJ}
              src={props.linkFoto}
              width='185'
              height='185'
            />
          </div>
          <div className='info-hmj'>
            <h2>{props.namaHMJ}</h2>
            {!isMobile ? (
              <LinkGathertown
                className='link-hmj-web'
                linkGathertown={props.linkGathertown}
              />
            ) : (
              ''
            )}
          </div>
        </div>
        {isMobile ? (
          <LinkGathertown
            className='link-hmj-mobile'
            linkGathertown={props.linkGathertown}
          />
        ) : (
          ''
        )}
      </div>
      <img
        src={`${ASSET_URL}/assets/images/vistock/main/spark%201%20kanan%20atas-01.png`}
        alt='Percikan api'
        className='spark-card'
      />
    </div>
  );
};

export default HMJCardContainer;
