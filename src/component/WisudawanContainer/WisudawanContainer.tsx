import React from 'react';
// import WisudawanCard from './WisudawanCard';
// import './WisudawanCardContainer.scss';
import './WisudawanContainer.scss';
import logo from '../../images/ukj.png';
// import IDataWisudawan from '../../interfaces/IDataWisudawan';

// TODO: API (hm gangerti), tambahin gambar2/assets/percantik lagi biar lebih sesuai sama figma
// TODO sparks
// TODO masih kurang srek sama penempatan lembaga yang mobile
// TODO gambar dibuat proporsional

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

interface DataWisudawan2 {
  nim: string;
  namaJurusan: string;
  namaHimpunan: string;
  namaLengkap: string;
  namaPanggilan: string;
  email: string;
  angkatan: number;
  tipsSukses: string;
  kotaAsal: string;
  tanggalLahir: Date; // NI gimana ya
  judulTA: string;
  funFact: string;
  pasfoto: string;
  nonhim: boolean;
  karya?: string[];
  kontribusi?: string[];
  lembaga?: string[];
  prestasi?: string[];
}

// const WisudawanContainer = (data: DataWisudawan) => {
//   return (
//     <div className='wisudawan-container'>

//       <div className='wisudawan-left'>
//         <div className='foto-wisudawan'>
//           <img src={data.foto} />
//         </div>

//         <div className='unit-wisudawan'>

//           {data.listUnit.length > 0 ?
//             <ol className='unit-list'>
//               {data.listUnit.map((unit: ListUnit, i: number) => (
//                 <li
//                   key = {i}
//                   className='unit-item'
//                 >
//                   <img src={logo} className='unit-logo' />
//                   <p>{unit.namaUnit}</p>
//                 </li>
//               ))}
//             </ol>
//             : <></>

//           }
//         </div>


//       </div>
//       <div className='wisudawan-right'>
//         <div className='data-wisudawan'>
//           <h2>{data.himpunan}</h2>
//           <p>{data.jurusan}</p>

//           <h1>{data.nama}</h1>
//           <p>{data.nim}</p>

//           <p>{data.judulTA}</p>

//           <h4>Tips sukses ala wisudawan</h4>
//           <p>{data.tipsSukses}</p>

//           <h4>Prestasi</h4>
//           {data.prestasi.length > 0 ?
//             <ol className='list-prestasi'>
//               {data.prestasi.map((prestasi: string, idx: number) => (
//                 <li key = {idx}>
//                   {prestasi}
//                 </li>
//               ))}
//             </ol>
//             : <p>-</p>
//           }
  
//           <h4>Karya</h4>
//           {data.karya.length > 0 ?
//             <ol className='list-karya'>
//               {data.karya.map((karya: string, idx: number) => (
//                 <li key = {idx}>
//                   {karya}
//                 </li>
//               ))}
//             </ol>
//             : <p>-</p>
//           }

//           <h4>Kontribusi di HMJ</h4>
//           {data.kontribusi.length > 0 ?
//             <ol className='list-kontribusi'>
//               {data.kontribusi.map((kontribusi: string, idx: number) => (
//                 <li key = {idx}>
//                   {kontribusi}
//                 </li>
//               ))}
//             </ol>
//             : <p>-</p>
//           }

//         </div>
//       </div>



//     </div>

//   );
// };

const WisudawanContainer = (data: DataWisudawan2) => {
  return (
    <div className='wisudawan-container'>

      <div className='wisudawan-left'>
        <div className='foto-wisudawan'>
          <img src={data.pasfoto}></img>
        </div>

        <div className='lembaga-wisudawan'>
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
        {/* <div className='unit-wisudawan'>
          {data.lembaga ?
            <ol className='unit-list'>
              {data.lembaga.map((lembaga: string, i: number) => (
                <li
                  key = {i}
                  className='unit-item'
                >
                  <p>{lembaga}</p>
                </li>
              ))}
            </ol>
            : <></>
          }
        </div> */}

        {/* <img src={logo} className='unit-logo' /> */}
      </div>
      
      <div className='wisudawan-right'>
        <div className='data-wisudawan'>
          <h2>{data.namaHimpunan}</h2>
          <p>{data.namaJurusan}</p>

          <h1>{data.namaLengkap}</h1>
          <p>{data.nim}</p>

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

        </div>
      </div>



    </div>

  );
};

export default WisudawanContainer;
