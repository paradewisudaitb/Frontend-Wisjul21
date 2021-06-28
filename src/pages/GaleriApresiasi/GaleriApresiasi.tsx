import React from 'react';
import { useRoute } from 'wouter';
import WisudawanCardContainer from '../../component/WisudawanCard/WisudawanCardContainer';
import FilterWisudawan from '../../component/WisudawanCard/FilterWisudawan';
import Logo from '../../images/ukj.png';
import ApresiasiCarousel from '../../component/ApresiasiCarousel/ApresiasiCarousel';
import { ListHimpunan } from '../../component/WisudawanCard/Interface';
import './GaleriApresiasi.scss';

const GaleriApresiasi = () => {
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
        'linkKeKonten': 'https://storage.googleapis.com/spatial-thinker-315205/POS2B5695_EE/22a_1623528845_163209.mp4'
      },{
        'tipeKontenApresiasi': 'audio',
        'linkKeKonten': 'https://cdn.piapro.jp/mp3_a/s9/s9ihs6vgwgu9uv4u_20210306210143_audition.mp3'
      }],
    'wisudawan':
    [
      {
        'nama': 'John Doe',
        'nim': '10117240',
        'jurusan': 'IF',
        'foto': 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Keqing.png',
        'judulTA': 'Apel Kucing Pisang Mangga Buah Binatang Dhuar',
        'listUnit': [{
          'logoUnit': 'ukj.png',
          'namaUnit': 'UKJ ITB'
        },
        {
          'logoUnit': 'ukj.png',
          'namaUnit': 'UKJ ITB'
        }]},
      {
        'nama': 'Bukan John Doe',
        'nim': '10117241',
        'jurusan': 'IF',
        'foto': 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiao.png',
        'judulTA': 'Apel Kucing Pisang',
        'listUnit': [{
          'logoUnit': 'ukj.png',
          'namaUnit': 'UKJ ITB'
        }]},
      {
        'nama': 'Mungkin Doe',
        'nim': '10117242',
        'jurusan': 'IF',
        'foto': 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Albedo.png',
        'judulTA': 'Apel Kucing Pisang Mangga Buah Binatang Dhuar',
        'listUnit': [{
          'logoUnit': 'ukj.png',
          'namaUnit': 'UKJ ITB'
        },
        {
          'logoUnit': 'ukj.png',
          'namaUnit': 'UKJ ITB'
        }]}]
  };

  return (
    <div className='galeri-apresiasi-page py-5 bg'>
      <div className='himpunan'>
        <h1>Himpunan A</h1>
        <img src={Logo} className='himpunan-logo'/>
      </div>

      <div className='apresiasi-wisudawan my-5'>
        <h2>Apresiasi Wisudawan</h2>
        <h3>Judul/Keterangan</h3>
        <ApresiasiCarousel data={dataApresiasi.apresiasi} />
      </div>

      <div className='daftar-wisudawan'>
        <FilterWisudawan data={dataApresiasi.wisudawan} />
      </div>

    </div>
  );
};

export default GaleriApresiasi;