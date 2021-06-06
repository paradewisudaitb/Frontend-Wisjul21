import React from 'react';
import './WisudawanCard.scss';
import logo from '../../images/ukj.png';

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
  return (
    <div className='card-container'>
      <h1>{data.nama}</h1>
      <h3>{data.nim} - {data.jurusan}</h3>
      <div className='image'>
        <img src={data.foto} />
      </div>
      <p>{data.judulTA}</p>
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