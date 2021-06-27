import React from 'react';
import './WisudawanContainer.scss';
import IDataWisudawan from '../../interfaces/IDataWisudawan';
import { ASSET_URL } from '../../api';

const WisudawanContainer = (data: IDataWisudawan) => {
  const bulu = `${ASSET_URL}/assets/images/vistock/main/bulu.png`;
  const spark = `${ASSET_URL}/assets/images/vistock/main/spark%201%20bawah%20matahari.png`;
  return (
    <div className='wisudawan-container'>
      <img
        src={spark}
        id='spark'
      />
      <div className='wisudawan-left'>
        <div className='foto-wisudawan'>
          <img id='pas-foto' src={data.pasfoto}></img>
          <img id='bulu' src={bulu}/>
        </div>

        <div className='lembaga-wisudawan'>
          <h2>{data.namaLengkap}</h2>
          <p>{data.nim} / {data.namaJurusan}</p>
        </div>

      </div>

      <div className='wisudawan-right'>
        <div className='data-wisudawan'>
          <h4>Judul Tugas Akhir</h4>
          <p>{data.judulTA}</p>

          <h4>Tips sukses ala wisudawan</h4>
          <p>{data.tipsSukses}</p>

          <h4>Prestasi</h4>
          {((data.prestasi) && (data.prestasi[0] != '-')) ?
            <ol className='list-prestasi'>
              {data.prestasi.map((prestasi: string, idx: number) => (
                <li key = {idx}>
                  {prestasi}
                </li>
              ))}
            </ol>
            : <p>-</p>
          }
          <h4>Karya</h4>
          {((data.karya) && (data.karya[0] != '-')) ?
            <ol className='list-karya'>
              {data.karya.map((karya: string, idx: number) => (
                <li key = {idx}>
                  {karya}
                </li>
              ))}
            </ol>
            : <p>-</p>
          }
          <h4>Kontribusi di HMJ</h4>
          {((data.kontribusi) && (data.kontribusi[0] != '-')) ?
            <ol className='list-kontribusi'>
              {data.kontribusi.map((kontribusi: string, idx: number) => (
                <li key = {idx}>
                  {kontribusi}
                </li>
              ))}
            </ol>
            : <p>-</p>
          }
          <h4>Lembaga </h4>
          {((data.lembaga) && (data.lembaga[0] != '-')) ?
            <ol className='list-lembaga'>
              {data.lembaga.map((kontribusi: string, idx: number) => (
                <li key = {idx}>
                  {kontribusi}
                </li>
              ))}
            </ol>
            : <p>-</p>
          }
        </div>
      </div>
    </div>
  );
};

export default WisudawanContainer;
