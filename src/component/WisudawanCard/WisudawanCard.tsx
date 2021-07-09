import { useState } from 'react';
import { useRoute } from 'wouter';
import { Link } from 'wouter';
import './WisudawanCard.scss';
import { ASSET_URL } from '../../api';
import { GALERI_APRESIASI_PAGE } from '../../routes/routes';

import IGaleriWisudawan from '../../interfaces/IGaleriWisudawan';
import { Loading } from '../Loading/Loading';

const WisudawanCard = (data: IGaleriWisudawan): JSX.Element => {
  const [match, params] = useRoute(GALERI_APRESIASI_PAGE.path);
  const textLimit = 70;
  const showToolTip = data.judulTA.length > textLimit;
  const shownJudulTA = showToolTip ? data.judulTA.slice(0, textLimit) + '...' : data.judulTA;
  const [isLoaded, setLoaded] = useState(false);

  const Awan = `${ASSET_URL}/assets/images/vistock/main/awan%203-01.png`;

  const useFallbackImg = (e: any) => {
    const fallbackImg = `${ASSET_URL}/fotoWisudawan/nophoto.png`;
    e.target.src = fallbackImg;
  };

  if (match && params) {
    return (
      <Link href={`/hmj/${params.hmj}/${data.nim}`} className='card-container'>
        <h3>{data.namaLengkap}</h3>
        <h4>{data.nim} - {data.namaJurusan}</h4>
        {!isLoaded && <Loading />}
        <div
          style={isLoaded ? { opacity: 1 } : { height: 0, width:0 }}
          onLoad={() => setLoaded(true)}
          className='image'
        >
          <img
            src={data.pasfoto}
            className='foto-wisudawan'
            onError={useFallbackImg}
          />
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