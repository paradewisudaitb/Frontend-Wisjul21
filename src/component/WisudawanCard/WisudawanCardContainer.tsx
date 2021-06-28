import React from 'react';
import WisudawanCard from './WisudawanCard';
import './WisudawanCardContainer.scss';
import { ListUnit, DataWisudawan } from './Interface';

const WisudawanCardContainer = ({ data } : { data: DataWisudawan[]}) => {

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
        <h4>
          Tidak ditemukan wisudawan yang sesuai pada himpunan ini
        </h4>
      )}

    </div>
  );
};

export default WisudawanCardContainer;