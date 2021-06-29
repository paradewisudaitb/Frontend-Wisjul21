import React from 'react';

interface ISponsor {
  nama: string,
  items: {
    namaSponsor: string,
    image: string,
  }[]
}

export const SponsorComponent = ({nama, items}: ISponsor) => {
  return (
    <div className='sponsors-group'>
      <h1 className='text-center m-3'>{ nama }</h1>
      <div className="sponsor-container">
        { items.map(({namaSponsor, image}) => (
          <img src={image} alt={namaSponsor} />
        )) }
      </div>
    </div>
  );
};

