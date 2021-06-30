import React from 'react';
import WisudawanCard from './WisudawanCard';
import './WisudawanCardContainer.scss';
import { ListUnit, DataWisudawan } from './Interface';

import IGaleriWisudawan from '../../interfaces/IGaleriWisudawan';

const WisudawanCardContainer = ({ data } : { data: IGaleriWisudawan[]}) => {

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