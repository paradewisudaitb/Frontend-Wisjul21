import React from 'react';
import { Link } from 'wouter';
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
    <Link href={`wisudawan/${data.nim}`} className='card-container'>
      <h3>{data.nama}</h3>
      <h4>{data.nim} - {data.jurusan}</h4>
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
        : <>Tidak ada unit</>
      }
    </Link>
  );
};

export default WisudawanCard;