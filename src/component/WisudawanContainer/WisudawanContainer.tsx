import React from 'react';
// import WisudawanCard from './WisudawanCard';
// import './WisudawanCardContainer.scss';
import './WisudawanContainer.scss';
import logo from '../../images/ukj.png';

interface ListUnit {
  logoUnit: string,
  namaUnit: string
}

interface DataWisudawan {
    foto: string,
    himpunan: string,
    jurusan: string,
    nama: string,
    nim: string,
    judulTA: string,
    tipsSukses: string,
    prestasi: string[],
    karya: string[],
    kontribusi: string[],
    listUnit: ListUnit[]
}

// TODO tampilan mobile, image rapihin

const WisudawanContainer = (data: DataWisudawan) => {
  return (
    <div className='wisudawan-container'>
      {/* <div className='row'> */}
      <div className='wisudawan-left'>
         
        <div className='foto-wisudawan'>
          <img src={data.foto} />
        </div>

        <div className='unit-wisudawan'>

          {data.listUnit.length > 0 ?
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
            : <></>

          }
        </div>


      </div>
      <div className='wisudawan-right'>
        <div className='data-wisudawan'>
          <h2>{data.himpunan}</h2>
          <p>{data.jurusan}</p>

          <h1>{data.nama}</h1>
          <p>{data.nim}</p>

          <p>{data.judulTA}</p>

          <h4>Tips sukses ala wisudawan</h4>
          <p>{data.tipsSukses}</p>

          <h4>Prestasi</h4>
          {data.prestasi.length > 0 ?
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
          {data.karya.length > 0 ?
            <ol className='list-karya'>
              {data.karya.map((karya: string, idx: number) => (
                <li key = {idx}>
                  {karya}
                </li>
              ))}
            </ol>
            : <p>-</p>
          }
          {/* <br></br>   */}

          <h4>Kontribusi di HMJ</h4>
          {data.kontribusi.length > 0 ?
            <ol className='list-kontribusi'>
              {data.kontribusi.map((kontribusi: string, idx: number) => (
                <li key = {idx}>
                  {kontribusi}
                </li>
              ))}
            </ol>
            : <p>-</p>
          }


          {/* <br></br> */}
        </div>
      </div>



    </div>

  // </div>
  );
};

export default WisudawanContainer;
