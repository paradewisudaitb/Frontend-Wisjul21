import { useState, useEffect } from 'react';
import HMJCardContainer from '../../component/ButtonFakultas/CardHMJ';
import ButtonFakultas from '../../component/ButtonFakultas/ButtonFakultas';
import dummyImage from '../../images/ukj.png';
import LIST_FAKULTAS from '../../data/fakultas.json';
import LIST_HMJ from '../../data/hmj.json';
import './ListFakultas.scss';

type HMJ = {
  namaFakultas: string;
  namaHMJ: string;
  jurusan: string;
  link: string;
};

const ListFakultas = () => {
  const [activeButton, setActiveButton] = useState('');


  const buttonFakultasClickHandler = (listHMJ: HMJ[], namaFakultas: string) => {
    // setListGathertownHMJ(listHMJ);
    setActiveButton(namaFakultas);
  };

  useEffect(() => {
    const defaultFakultas = 'FITB';
    setActiveButton(defaultFakultas);
  }, []);

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

  return (
    <div className='list-button'>{listButtonFakultas}</div>
  );
};

export default ListFakultas;