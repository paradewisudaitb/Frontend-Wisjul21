import { useState, useEffect } from 'react';
import HMJCardContainer from '../../component/GathertownCard/GathertownCard';
import ButtonFakultas from '../../component/ButtonFakultas/ButtonFakultas';

import './Gathertown.scss';
import LIST_FAKULTAS from '../../data/fakultas.json';
import LIST_HMJ from '../../data/hmj.json';
import IHMJ from '../../interfaces/IHMJ';

import Sponsor from '../../component/Sponsor/Sponsor';
import { Navbar } from '../../component/NavbarFooter/Navbar';

const ASSET_URL = 'https://wisjul21.sgp1.cdn.digitaloceanspaces.com';

const Gathertown = (): JSX.Element => {
  const [activeButton, setActiveButton] = useState('');
  const hmjNoTPB = LIST_HMJ.filter(hmj => !hmj.namaHimpunan.includes('TPB'));
  const [listGathertownHMJ, setListGathertownHMJ] = useState(hmjNoTPB);

  const buttonFakultasClickHandler = (
    listHMJ: IHMJ[],
    namaFakultas: string
  ) => {
    setListGathertownHMJ(listHMJ.filter(hmj => !hmj.namaHimpunan.includes('TPB')));
    setActiveButton(namaFakultas);
  };

  useEffect(() => {
    const defaultFakultas = 'FITB';
    setListGathertownHMJ(
      hmjNoTPB.filter(him => him.fakultas == defaultFakultas));
    setActiveButton(defaultFakultas);
  }, []);

  const listButtonFakultas = LIST_FAKULTAS
    .filter(fak => fak != 'ETC')
    .map((fakultas) => (
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
    <div key={hmj.singkatanHimpunan}>
      <HMJCardContainer
        namaHMJ={hmj.singkatanHimpunan}
        namaFakultas={hmj.fakultas}
        linkGathertown={hmj.linkGatherTown}
        linkFoto={hmj.linkFoto}
      />
    </div>
  ));

  return (
    <>
      <Navbar />
      <div className='gathertown-container'>
        <div className='info'>
          <div className='title'>
            <img
              src={`${ASSET_URL}/assets/images/vistock/main/spark%202%20atas%20matahari.png`}
              className='spark-title'
              alt='Percikan api'
            />

            <h1>Treasure Games</h1>
            <h3>Gather Town</h3>
          </div>
          <div className='text'>
            <img
              src={`${ASSET_URL}/assets/images/vistock/main/awan%201-01.png`}
              alt='Awan'
              className='cloud-text'
            />
            <div className='gathertown-text'>
              Treasure Games merupakan salah satu permainan yang diadakan dalam Perayaan Wisuda Juli ITB 2021. Siapa yang tercepat dalam menemukan harta karun ialah pemenangnya!
              Aturan dan tata cara bermain di Treasure Games adalah sebagai berikut:
              <ol>
                <li>Pemain dapat mengakses tautan Gather Town pada website Perayaan Wisuda Juli 2021.</li>
                <li>Pemain memasuki room Gather Town sesuai dengan himpunan masing-masing.</li>
                <li>Jumlah pemain yang dapat memasuki room Gather Town maksimal 25 orang dari masing-masing himpunan. Pemain yang dapat masuk adalah yang tercepat.</li>
                <li>Agar dapat masuk ke room Gather Town dengan lebih cepat, pemain dipersilahkan untuk membuat akun Gather Town sebelum Treasure Games dimulai.</li>
                <li>Setiap pemain akan mengikuti Treasure games dengan clue awal yang diberikan melalui story instagram @paradewisudaitb</li>
                <li>Clue-clue selanjutnya dapat ditemukan oleh pemain di dalam room Gather Town.</li>
                <li>Dengan mengikuti rangkaian games berdasarkan clue, pemain akan diarahkan untuk menemukan harta karun yang ada di dalam Gather Town.</li>
                <li>Pada Treasure Games, akan ditentukan 3 orang pemenang dengan catatan waktu paling cepat dalam menemukan harta karun.</li>
                <li>Games dilaksanakan pada tanggal 8 Juli 2021, pukul 19.00 WIB.</li>
                <li>Pemenang akan langsung dihubungi personal oleh panitia Perayaan Wisuda Juli ITB 2021.</li>
              </ol>
              Selamat bermain!
              <br/>
              Gather Town dapat diakses melalui tautan di bawah ini:
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
      </div>
      <Sponsor />
    </>
  );
};

export default Gathertown;
