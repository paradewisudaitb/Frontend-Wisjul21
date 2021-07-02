import React, {useState} from 'react';
import './GaleriHmj.scss';
import { ASSET_URL } from '../../api';

import ButtonFakultas from '../../component/ButtonFakultas/ButtonFakultas';

import { Link } from 'wouter';
import slugify from 'slugify';

//Antara bikin data baru atau reuse data dari Gathertown
import LIST_FAKULTAS from '../../data/fakultas.json';
import LIST_HMJ from '../../data/hmj.json';
import { useEffect } from 'react';
import IHMJ from '../../interfaces/IHMJ';

const GaleriHmj = (): JSX.Element => {
  const [activeButton, setActiveButton] = useState('');
  const [listGaleriHMJ, setListGaleriHMJ] = useState(LIST_HMJ);

  const buttonFakultasClickHandler = (listHMJ: IHMJ[], namaFakultas: string) => {
    setListGaleriHMJ(listHMJ);
    setActiveButton(namaFakultas);
  };

  const listButtonFakultas = LIST_FAKULTAS.map((fakultas) => (
    <ButtonFakultas
      onButtonClick={buttonFakultasClickHandler}
      className={activeButton == fakultas ? 'active' : ''}
      value={fakultas}
      key={fakultas}
    >
      <p>{fakultas}</p>
    </ButtonFakultas>
  ));

  const listCardHMJ = listGaleriHMJ
    .map((hmj) => (
      <Link className='himpunan-card' key={hmj.namaHimpunan} href={`/hmj/${slugify(
        hmj.namaHimpunan, {
          lower:true,
          remove:/["']/g}
      )}`}>
        <img className='spark' src={`${ASSET_URL}/assets/images/vistock/main/spark%201%20kanan%20atas-01.png`} />
        <div className='himpunan-wrapper'>
          <div className='container-logo'>
            <img src={hmj.linkFoto} className='logo-hmj' alt={`logo ${hmj.namaHimpunan}`} />
          </div>
          <div className='himpunan-text'>
            <h2 className='title'>{hmj.singkatanHimpunan}</h2>
          </div>
        </div>
      </Link>
    ));

  useEffect(() => {
    const defaultFakultas = 'FITB';
    setListGaleriHMJ(LIST_HMJ.filter(him => him.fakultas == defaultFakultas ));
    setActiveButton(defaultFakultas);
  }, []);

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