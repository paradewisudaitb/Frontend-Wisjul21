import React from 'react';
import WisudawanCard from './WisudawanCard';
import './WisudawanCardContainer.scss';

import IGaleriWisudawan from '../../interfaces/IGaleriWisudawan';

const WisudawanCardContainer = ({ data } : { data: IGaleriWisudawan[]}): JSX.Element => {

  return (
    <div className='wisudawan-card-container'>
      {data.length > 0 ? (
        data.map((wisudawan, i) =>
          <WisudawanCard
            key={i}
            {...wisudawan}
          />
        )
      ) : (
        <h3>
          Tidak ditemukan wisudawan untuk himpunan ini
        </h3>
      )}

    </div>
  );
};

export default WisudawanCardContainer;