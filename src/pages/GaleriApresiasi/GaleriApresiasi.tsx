import React, { useEffect, useState } from 'react';
import { useRoute } from 'wouter';
import WisudawanCardContainer from '../../component/WisudawanCard/WisudawanCardContainer';
import FilterWisudawan from '../../component/WisudawanCard/FilterWisudawan';
import Logo from '../../images/ukj.png';
import ApresiasiCarousel from '../../component/ApresiasiCarousel/ApresiasiCarousel';
import { ListHimpunan } from '../../component/WisudawanCard/Interface';

import { getByHimpunan } from '../../controller/wisudawan';

import './GaleriApresiasi.scss';
import { GALERI_APRESIASI_PAGE } from '../../routes/routes';
import { Loading } from '../../component/Loading/Loading';
import IGaleriWisudawan from '../../interfaces/IGaleriWisudawan';
import LIST_HMJ from '../../data/hmj.json';


const dataApresiasi = {
  'himpunan': 'hmif',
  'apresiasi':
  [
    {
      'tipeKontenApresiasi': 'poster',
      'linkKeKonten': 'https://townsquare.media/site/442/files/2013/05/TheFW_Up.jpg?w=630&h=932&q=75',
    },
    {
      'tipeKontenApresiasi': 'poster',
      'linkKeKonten': 'https://image.freepik.com/free-vector/space-vintage-colorful-horizontal-poster_225004-2209.jpg'
    },{
      'tipeKontenApresiasi': 'video',
      'linkKeKonten': 'https://wisjul21.sgp1.cdn.digitaloceanspaces.com/kontenApresiasi/HMO%20TRITON_Video.mp4'
    },{
      'tipeKontenApresiasi': 'audio',
      'linkKeKonten': 'https://cdn.piapro.jp/mp3_a/s9/s9ihs6vgwgu9uv4u_20210306210143_audition.mp3'
    }]
};

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

const GaleriApresiasi = () => {
  const [match, params] = useRoute(GALERI_APRESIASI_PAGE.path);

  if (match && params) {
    const namaHimpunan = removeDash(params.hmj);

    const fotoHMJ = LIST_HMJ.filter(hmj => {
      return (hmj.namaHimpunan == namaHimpunan);
    })[0].linkFoto;

    const defaultWisudawan: IGaleriWisudawan[] = [];

    const [loading, setLoading] = useState(true);
    const [wisudawans, setWisudawans] = useState(
      <FilterWisudawan data={defaultWisudawan} />
    );

    useEffect(() => {
      getByHimpunan(namaHimpunan.toLowerCase())
        .then(dataWisudawan => {
          setWisudawans(<FilterWisudawan data={dataWisudawan} />);
          setLoading(false);
        })
        .catch(_ =>
          setLoading(false)
        );
    }, []);

    return (
      <div className='galeri-apresiasi-page py-5 bg'>
        <div className='himpunan'>
          <h1>{ namaHimpunan }</h1>
          <img src={fotoHMJ} className='himpunan-logo'/>
        </div>
  
        <div className='apresiasi-wisudawan my-5'>
          <h2>Apresiasi HMJ</h2>
          <ApresiasiCarousel data={dataApresiasi.apresiasi} />
        </div>
  
        <div className='daftar-wisudawan'>
          {!loading && wisudawans}
          {loading && <Loading />}
        </div>
  
      </div>
    );

  } else {
    return (<h1>Error</h1>);
  }

};

export default GaleriApresiasi;