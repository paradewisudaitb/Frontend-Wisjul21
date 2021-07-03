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

const removeDash = (text: string) => {
  const tmp = text.split('-');
  let result = '';

  if (tmp[0] == 'tpb') {
    tmp.forEach(word => {
      result += word.toUpperCase() + ' ';
    });
  } else {
    tmp.forEach(word => {
      result += word[0].toUpperCase() + word.slice(1) + ' ';
    });

  }

  return result.trim();
};

const GaleriApresiasi = (): JSX.Element => {
  const [match, params] = useRoute(GALERI_APRESIASI_PAGE.path);

  if (match && params) {
    const namaHimpunan = removeDash(params.hmj);

    const fotoHMJ = LIST_HMJ.filter(hmj => {
      return (hmj.namaHimpunan == namaHimpunan);
    })[0]?.linkFoto || 'test' ;

    const defaultWisudawan: IGaleriWisudawan[] = [];
    const defaultKontenApresiasi: IKontenApresiasi[] = [];

    const [loading, setLoading] = useState(true);
    const [wisudawans, setWisudawans] = useState(
      <FilterWisudawan data={defaultWisudawan} />
    );
    const [kontenApresiasi, setKontenApresiasi] = useState(defaultKontenApresiasi);

    useEffect(() => {
      getByHimpunan(namaHimpunan.toLowerCase())
        .then(dataWisudawan => {
          setWisudawans(<FilterWisudawan data={dataWisudawan} />);
          setLoading(false);
        })
        .catch(_ =>
          setLoading(false)
        );

      getKontenApresiasi(namaHimpunan.toLowerCase())
        .then(dataApresiasi => {
          setKontenApresiasi(dataApresiasi);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

    return (
      <div className='galeri-apresiasi-page py-5 bg'>
        <div className='himpunan'>
          <h1>{ namaHimpunan }</h1>
          <img src={fotoHMJ} className='himpunan-logo' alt={`logo ${namaHimpunan}`}/>
        </div>

        {(kontenApresiasi.length != 0) &&
        <div className='apresiasi-wisudawan my-5'>
          <h2>Apresiasi HMJ</h2>
          <ApresiasiCarousel data={kontenApresiasi} />
        </div>
        }

        <div className='daftar-wisudawan'>
          {loading ? <Loading /> : wisudawans}
        </div>

      </div>
    );

  } else {
    return (<h1>Error</h1>);
  }

};

export default GaleriApresiasi;