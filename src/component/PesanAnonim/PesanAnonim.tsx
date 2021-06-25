import React from 'react';
import IPesanIn from '../../interfaces/IPesanIn';
import './PesanAnonim.scss';

const getMonthName = (num: number): string => {
  switch (num) {
    case 1:
      return 'Januari';
    case 2:
      return 'Februari';
    case 3:
      return 'Maret';
    case 4:
      return 'April';
    case 5:
      return 'Mei';
    case 6:
      return 'Juni';
    case 7:
      return 'Juli';
    case 8:
      return 'Agustus';
    case 9:
      return 'September';
    case 10:
      return 'Oktober';
    case 11:
      return 'November';
    case 12:
      return 'Desember';
    default:
      return 'N/A';
  }
};

export default function PesanAnonim({ createdAt, namaPengirim, pesan }: IPesanIn): JSX.Element {
  const tanggal = new Date(createdAt);
  const tahun = tanggal.getFullYear();
  const day = tanggal.getDay();
  const bulan = getMonthName(tanggal.getMonth() + 1);
  const tmpJam = tanggal.getHours();
  const jam = tmpJam < 10 ? `0${tmpJam}` : tmpJam;
  const tmpMenit = tanggal.getMinutes();
  const menit = tmpMenit < 10 ? `0${tmpMenit}` : tmpMenit;
  const fmtTanggal =
    `${day} ${bulan} ${tahun} - ${jam}:${menit}`;
  return (
    <div className='pesan-container'>
      <div className='pesan-wrapper'>
        <div className='header-wrapper'>
          <p className='header-content'>{namaPengirim}</p>
          <p className='header-content'>{fmtTanggal}</p>
        </div>
        <div>
          <p className='pesan-content'>{pesan}</p>
        </div>
      </div>
    </div>
  );
}
