import React, {useState} from 'react';
import './GaleriHmj.scss';

import ButtonFakultas from '../../component/Gathertown/ButtonFakultas';
import { LIST_FAKULTAS, LIST_HMJ } from './GaleriHmjData';

type HMJ = {
  namaFakultas: string;
  namaHMJ: string;
  jurusan: string;
  link: string;
};

const GaleriHmj = () => {
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
      <div className='himpunan-wrapper'>
        <div className='image'></div>
        <div className='himpunan-text'>
          <h1 className='title'>{hmj.namaHMJ}</h1>
        </div>
      </div>
    </div>
  ));

  return (
    <div className='galeri-hmj'>
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