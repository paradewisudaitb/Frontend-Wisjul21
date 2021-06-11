import { FC } from 'react';
import { Fragment } from 'react';
import './Gathertown.scss';

type HMJ = {
  namaFakultas: string;
  namaHMJ: string;
  jurusan: string;
  link: string;
};

const LIST_FAKULTAS = [
  'FITB',
  'FMIPA',
  'FSRD',
  'FTI',
  'FTMD',
  'FTSL',
  'FTTM',
  'SAPPK',
  'SBM',
  'SF',
  'SITH',
  'STEI',
];

const LIST_HMJ: HMJ[] = [
  {
    namaFakultas: 'STEI',
    namaHMJ: 'HMIF ITB',
    jurusan: 'Teknik Informatika & Sistem dan Teknologi Informasi',
    link: 'bit.ly/HMIFterbaiksedunia',
  },
  {
    namaFakultas: 'STEI',
    namaHMJ: 'HME ITB',
    jurusan: 'Teknik Elektro, Teknik Biomedis, Teknik Tenaga Listrik',
    link: 'bit.ly/HMIFterbaiksedunia',
  },
  {
    namaFakultas: 'FITB',
    namaHMJ: 'HMME \'ATMOSPHAIRA\' ITB',
    jurusan: 'Meteorologi',
    link: 'bit.ly/FITBuhuyasoycihuy',
  },
];

const Gathertown: FC = () => {
  const listFakultas = LIST_FAKULTAS.map((fakultas) => (
    <div className="fakultas" key={fakultas}>
      {fakultas}
    </div>
  ));

  const listHMJ = LIST_HMJ.map((hmj) => (
    <li key={hmj.namaHMJ}>
      <div>{hmj.namaHMJ}</div>
      <div>{hmj.jurusan}</div>
      <div>
        <a href={hmj.link}>{hmj.link}</a>
      </div>
    </li>
  ));

  return (
    <Fragment>
      <div className="info">
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
          malesuada nibh ornare non. Praesent placerat eros ac ultrices mauris
          faucibus. Proin porta ultricies sem id pretium
        </p>
      </div>
      <div>{listFakultas}</div>
      <ul className="list-hmj">{listHMJ}</ul>
    </Fragment>
  );
};

export default Gathertown;
