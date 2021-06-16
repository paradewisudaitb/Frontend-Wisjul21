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
    link: 'https://bit.ly/HMIFterbaiksedunia',
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

export {LIST_FAKULTAS, LIST_HMJ};