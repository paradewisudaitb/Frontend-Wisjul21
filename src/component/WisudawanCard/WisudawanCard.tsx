import React, { useState } from 'react';
import './WisudawanCard.scss';
import logo from '../../images/ukj.png';
import Spark from '../../images/bg/spark_1_bawah_matahari.png';
import Awan from '../../images/bg/awan_3_01.png';

interface ListUnit {
  logoUnit: string,
  namaUnit: string
}

interface Data {
  nama: string,
  nim: string,
  jurusan: string,
  foto: string,
  judulTA: string,
  listUnit: ListUnit[]
}

const WisudawanCard = (data: Data) => {
  const textLimit = 70;
  const showToolTip = data.judulTA.length > textLimit;
  const shownJudulTA = showToolTip ? data.judulTA.slice(0, textLimit) + '...' : data.judulTA; 
  const [isToolTipVisible, setToolTipVisible] = useState(false);

  return (
    <div className='card-container'>
      <h3>{data.nama}</h3>
      <h4>{data.nim} - {data.jurusan}</h4>
      <div className='image'>
        <img src={Spark} alt='' className='spark-bg' />
        <img src={data.foto} className='foto-wisudawan' />
        <img src={Awan} alt='' className='awan-bg' />
      </div>
      <p>{shownJudulTA}</p>
      {data.listUnit.length > 0 ?
        <div className='unit-container'>
          <ol className='unit-list'>
            {data.listUnit.map((unit: ListUnit, i: number) => (
              <li
                key = {i}
                className='unit-item'
              >
                <img src={logo} className='unit-logo' />
                <p>{unit.namaUnit}</p>
              </li>
            ))}
          </ol>
        </div>
        : <></>
      }
    </div>
  );
};

export default WisudawanCard;