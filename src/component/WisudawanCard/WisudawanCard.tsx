import React, { useState } from 'react';
import { useRoute } from 'wouter';
import { Link } from 'wouter';
import { DataWisudawan, ListUnit } from './Interface';
import './WisudawanCard.scss';
import { ASSET_URL } from '../../api';

import IGaleriWisudawan from '../../interfaces/IGaleriWisudawan';

const WisudawanCard = (data: IGaleriWisudawan) => {
  const [match, params] = useRoute('/hmj/:hmj');
  const textLimit = 70;
  const showToolTip = data.judulTA.length > textLimit;
  const shownJudulTA = showToolTip ? data.judulTA.slice(0, textLimit) + '...' : data.judulTA;
  const [isLoaded, setLoaded] = useState(false);

  const Awan = `${ASSET_URL}/assets/images/vistock/main/awan%203-01.png`;

  if (match && params) {
    return (
      <Link href={`/hmj/${params.hmj}/${data.nim}`} className='card-container'>
        <h3>{data.namaLengkap}</h3>
        <h4>{data.nim} - {data.namaJurusan}</h4>
        <div
          style={isLoaded ? { opacity: 1 } : { height: 0, width:0 }}
          onLoad={() => setLoaded(true)}
          className='image'
        >
          <img src={data.pasfoto} className='foto-wisudawan' />
          <img src={Awan} alt='' className='awan-bg' />
        </div>
        <p className='judulTA'>
          {shownJudulTA}
        </p>
      </Link>
    );
  } else {
    return <h1>HMJ Not Found</h1>;
  }
};

export default WisudawanCard;