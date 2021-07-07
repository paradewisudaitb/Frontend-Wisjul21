import React, { useEffect, useState } from 'react';
import { useRoute } from 'wouter';
import FilterWisudawan from '../../component/WisudawanCard/FilterWisudawan';
import ApresiasiCarousel from '../../component/ApresiasiCarousel/ApresiasiCarousel';

import { getByHimpunan } from '../../controller/wisudawan';
import { getKontenApresiasi } from '../../controller/kontenApresiasi';

import './GaleriApresiasi.scss';
import { GALERI_APRESIASI_PAGE } from '../../routes/routes';
import { Loading } from '../../component/Loading/Loading';
import IGaleriWisudawan from '../../interfaces/IGaleriWisudawan';
import IKontenApresiasi from '../../interfaces/IKontenApresiasi';
import LIST_HMJ from '../../data/hmj.json';

import { NotFoundHMJ } from '../NotFound/NotFound';
import Sponsor from '../../component/Sponsor/Sponsor';

const slugToNamaHimpunanITB = (text: string) => {
  const tmp = text.split('-');
  let result = '';

  if (tmp[0] == 'tpb') {
    tmp.forEach(word => {
      if (word != 'dan') {
        result += word.toUpperCase();
        if (word == 'sith') {
          result += '-';
        } else {
          result += ' ';
        }
      }
    });
  } else {
    tmp.forEach(word => {
      if (word == 'dan') {
        result += word + ' ';
      } else if (word == 'non') {
        result += 'Non-';
      } else {
        result += word[0].toUpperCase() + word.slice(1) + ' ';
      }
    });

  }

  return result.trim();
};

const GaleriApresiasi = (): JSX.Element => {
  const [match, params] = useRoute(GALERI_APRESIASI_PAGE.path);
  const [isTPB, setIsTPB] = useState(false);

  if (match && params) {
    const namaHimpunan = slugToNamaHimpunanITB(params.hmj);

    const fotoHMJ = LIST_HMJ.filter(hmj => {
      return (hmj.namaHimpunan == namaHimpunan);
    })[0]?.linkFoto || 'notfound';

    if (fotoHMJ == 'notfound') {
      return (<NotFoundHMJ />);
    }

    const defaultWisudawan: IGaleriWisudawan[] = [];
    const defaultKontenApresiasi: IKontenApresiasi[] = [];

    const [loadingWisudawan, setLoadingWisudawan] = useState(true);
    const [wisudawans, setWisudawans] = useState(
      <FilterWisudawan data={defaultWisudawan} />
    );
    const [loadingApresiasi, setLoadingApresiasi] = useState(true);
    const [kontenApresiasi, setKontenApresiasi] = useState(defaultKontenApresiasi);

    useEffect(() => {
      // kalau TPB, ga ada bagian wisudawannya
      namaHimpunan.startsWith('TPB') ? setIsTPB(true) : setIsTPB(false);

      getByHimpunan(namaHimpunan.toLowerCase())
        .then(dataWisudawan => {
          setWisudawans(<FilterWisudawan data={dataWisudawan} />);
          setLoadingWisudawan(false);
        })
        .catch(_ =>
          setLoadingWisudawan(false)
        );

      getKontenApresiasi(namaHimpunan.toLowerCase())
        .then(dataApresiasi => {
          setKontenApresiasi(dataApresiasi);
          setLoadingApresiasi(false);
        })
        .catch((err) => {
          console.log(err);
          setLoadingApresiasi(false);
        });

    }, []);

    return (
      <>
        <div className='galeri-apresiasi-page py-5 bg'>
          <div className='himpunan'>
            <h1>{ namaHimpunan }</h1>
            <img src={fotoHMJ} className='himpunan-logo' alt={`logo ${namaHimpunan}`}/>
          </div>

          <div className='apresiasi-wisudawan my-md-3'>
            <h2>Apresiasi {isTPB ? 'TPB' : 'HMJ'}</h2>
            {loadingApresiasi ? <Loading /> :
              ( kontenApresiasi.length == 0 ?
                <h3>Tidak ada konten apresiasi</h3> : <ApresiasiCarousel data={kontenApresiasi} /> )}
          </div>

          {!isTPB &&
            <div className='daftar-wisudawan'>
              {loadingWisudawan ? <Loading /> : wisudawans}
            </div>
          } 
      
        </div>
        <Sponsor />

      </>
    );

  } else {
    return (<h1>Error</h1>);
  }

};

export default GaleriApresiasi;