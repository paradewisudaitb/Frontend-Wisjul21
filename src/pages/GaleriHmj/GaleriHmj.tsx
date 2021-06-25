import React, {useState} from 'react';
import './GaleriHmj.scss';

import logoImage from '../../images/ukj.png';

import ButtonFakultas from '../../component/Gathertown/ButtonFakultas';

//Antara bikin data baru atau reuse data dari Gathertown
import { LIST_FAKULTAS, LIST_HMJ } from './GaleriHmjData'; 

type HMJ = {
  namaFakultas: string;
  namaHMJ: string;
  jurusan: string;
  link: string;
};

const GaleriHmj = () => {

  const ASSET_URL = 'https://wisjul21.sgp1.cdn.digitaloceanspaces.com';


  const [activeButton, setActiveButton] = useState('');
  const [listGaleriHMJ, setListGaleriHMJ] = useState(LIST_HMJ);

  const buttonFakultasClickHandler = (listHMJ: HMJ[], namaFakultas: string) => {
    setListGaleriHMJ(listHMJ);
    setActiveButton(namaFakultas);
  };

  const listButtonFakultas = LIST_FAKULTAS.map((fakultas) => (
    <ButtonFakultas
      onButtonClick={buttonFakultasClickHandler}
      className={activeButton === fakultas ? 'active' : ''}
      value={fakultas}
      key={fakultas}
    >
      <p>{fakultas}</p>
    </ButtonFakultas>
  ));

  const listCardHMJ = listGaleriHMJ.map((hmj) => (
    <div className='himpunan-card' key={hmj.namaHMJ}>
      <img className='spark' src={`${ASSET_URL}/assets/images/vistock/main/spark%201%20kanan%20atas-01.png`} />
      <div className='himpunan-wrapper'>
        <img src={logoImage} className='logo-hmj' />
        <div className='himpunan-text'>
          <h1 className='title'>{hmj.namaHMJ}</h1>
        </div>
      </div>
    </div>
  ));

  return (
    <div className='galeri-hmj'>
      <img className='cloud-1' src={`${ASSET_URL}/assets/images/vistock/main/awan%202-01.png`} />
      <img className='cloud-2' src={`${ASSET_URL}/assets/images/vistock/main/awan%205-01.png`} />
      <img className='cloud-3' src={`${ASSET_URL}/assets/images/vistock/main/awan%204-01.png`} />
      <img className='feather' src={`${ASSET_URL}/assets/images/vistock/main/bulu.png`} />
      <div className='galeri-hmj-title'>
        <h1 className='title'>Himpunan (HMJ)</h1>
      </div>
      <div className='fakultas-container'>
        {listButtonFakultas}
      </div>
      <div className='himpunan-container'>
        {listCardHMJ}
      </div>
    </div>
  );
};


export default GaleriHmj;