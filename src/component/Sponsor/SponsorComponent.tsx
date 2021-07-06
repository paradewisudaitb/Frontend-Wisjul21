import React from 'react';

interface ISponsor {
  nama: string,
  items: string[],
}

export const SponsorComponent = ({nama, items}: ISponsor) => {
  const itemS = items.filter(image => (image.includes('S_')));
  const itemM = items.filter(image => (image.includes('M_')));
  const itemL = items.filter(image => (image.includes('L_') && !image.includes('XL_')));
  const itemXL = items.filter(image => (image.includes('XL_')));

  return (
    <div className='sponsors-group'>
      <h1 className='text-center my-3'>{ nama }</h1>
      <div className="sponsor-container">

        { itemXL.map(image => (
          <div className='item-xl'>
            <img src={image} alt={
              image.split('/')[image.split('/').length - 1]
                .replace(/.(((jpe?)|(pn))g)/gi, '')
            } />
          </div>
        )
        ) }

        { itemL.map(image => (

          <div className='item-l'>
            <img src={image} alt={
              image.split('/')[image.split('/').length - 1]
                .replace(/.(((jpe?)|(pn))g)/gi, '')
            } />
          </div>
        )
        ) }
        { itemM.map(image => (

          <div className='item-m'>
            <img src={image} alt={
              image.split('/')[image.split('/').length - 1]
                .replace(/.(((jpe?)|(pn))g)/gi, '')
            } />
          </div>
        )
        ) }

        { itemS.map(image => (

          <div className='item-s'>
            <img src={image} alt={
              image.split('/')[image.split('/').length - 1]
                .replace(/.(((jpe?)|(pn))g)/gi, '')
            } />
          </div>
        )
        ) }

      </div>
    </div>
  );
};
