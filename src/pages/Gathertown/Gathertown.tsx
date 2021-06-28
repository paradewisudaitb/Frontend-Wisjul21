import { useState, useEffect } from 'react';
import HMJCardContainer from '../../component/ButtonFakultas/CardHMJ';
import ButtonFakultas from '../../component/ButtonFakultas/ButtonFakultas';
import './Gathertown.scss';
import dummyImage from '../../images/ukj.png';
import LIST_FAKULTAS from '../../data/fakultas.json';
import LIST_HMJ from '../../data/hmj.json';

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

  useEffect(() => {
    const defaultFakultas = 'FITB';
    setListGathertownHMJ(LIST_HMJ.filter(him => him.namaFakultas == defaultFakultas ));
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

  const listDisplayedHMJ = listGathertownHMJ.map((hmj) => (
    <div key={hmj.namaHMJ}>
      <HMJCardContainer
        namaHMJ={hmj.namaHMJ}
        namaFakultas={hmj.namaFakultas}
        link={hmj.link}
      />
    </div>
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
      <div className='container'>
        <div className='list-button'>{listButtonFakultas}</div>
        <div className='list-hmj'>
          <img
            src={`${ASSET_URL}/assets/images/vistock/main/bulu.png`}
            alt='Bulu Phoenix'
            className='feather-hmj'
          />
          <img
            src={`${ASSET_URL}/assets/images/vistock/main/awan%202-01.png`}
            className='cloud-hmj-01'
            alt='Awan'
          />
          <img
            src={`${ASSET_URL}/assets/images/vistock/main/awan%204-01.png`}
            className='cloud-hmj-02'
            alt='Awan'
          />
          {listDisplayedHMJ}
        </div>
        <br />
      </div>
    </div>
  );
};

export default Gathertown;
