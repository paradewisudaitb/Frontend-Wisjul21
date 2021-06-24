import { useState } from 'react';
import ButtonFakultas from '../../component/Gathertown/ButtonFakultas';
import HMJCardContainer from '../../component/Gathertown/CardHMJ';
import './Gathertown.scss';
import { LIST_FAKULTAS, LIST_HMJ } from './GathertownConstant';

type HMJ = {
  namaFakultas: string;
  namaHMJ: string;
  jurusan: string;
  link: string;
};

const ASSET_URL = 'https://wisjul21.sgp1.cdn.digitaloceanspaces.com';

const Gathertown = () => {
  const [activeButton, setActiveButton] = useState('');
  const [listGathertownHMJ, setListGathertownHMJ] = useState(LIST_HMJ);

  const buttonFakultasClickHandler = (listHMJ: HMJ[], namaFakultas: string) => {
    setListGathertownHMJ(listHMJ);
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

  const listDisplayedHMJ = listGathertownHMJ.map((hmj) => (
    <li key={hmj.namaHMJ}>
      <HMJCardContainer
        namaHMJ={hmj.namaHMJ}
        namaFakultas={hmj.namaFakultas}
        link={hmj.link}
      />
    </li>
  ));

  return (
    <div className='gathertown-container'>
      <div className='info'>
        <div className='title'>
          <img
            src={`${ASSET_URL}/assets/images/vistock/main/spark%202%20atas%20matahari.png`}
            className='spark-title'
            alt='Percikan api'
          />
          <h1>Gather Town</h1>
        </div>
        <div className='text'>
          <img
            src={`${ASSET_URL}/assets/images/vistock/main/awan%201-01.png`}
            alt='Awan'
            className='cloud-text'
          />
          <p>
            Ultricies leo integer malesuada nunc vel risus commodo. Mollis nunc
            sed id semper risus in hendrerit gravida rutrum. Volutpat est velit
            egestas dui. Purus semper eget duis at tellus at urna condimentum
            mattis. Iaculis eu non diam phasellus vestibulum lorem. Est sit amet
            facilisis magna etiam tempor orci. Nunc aliquet bibendum enim
            facilisis. Laoreet id donec ultrices tincidunt arcu. Diam maecenas
            ultricies mi eget mauris. Faucibus a pellentesque sit amet porttitor
            eget. Diam donec adipiscing tristique risus nec feugiat in.
            Sollicitudin aliquam ultrices sagittis orci a scelerisque purus
            semper.
          </p>
        </div>
      </div>
      <div>
        <div className='list-button'>{listButtonFakultas}</div>
        <ul className='list-hmj'>{listDisplayedHMJ}</ul>
        <br />
      </div>
    </div>
  );
};

export default Gathertown;
