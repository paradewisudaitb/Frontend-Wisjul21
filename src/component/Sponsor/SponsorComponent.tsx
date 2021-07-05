import React from 'react';

interface ISponsor {
  nama: string,
  items: string[],
}

export const SponsorComponent = ({nama, items}: ISponsor) => {
  return (
    <div className='sponsors-group'>
      <h1 className='text-center my-3'>{ nama }</h1>
      <div className="sponsor-container">
        { items.map(image => (
          <img src={image} alt={
            image.split('/')[image.split('/').length - 1]
              .replace(/.(((jpe?)|(pn))g)/gi, '')
          } />
        )) }
      </div>
    </div>
  );
};

