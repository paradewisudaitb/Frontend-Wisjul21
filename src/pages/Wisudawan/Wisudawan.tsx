import React from 'react';
import { Link, useRoute } from 'wouter';
import './Wisudawan.scss';
import PesanAnonim from '../../component/PesanAnonim/PesanAnonim';
import WisudawanContainer from '../../component/WisudawanContainer/WisudawanContainer';

const dataDummy = [{
  'nama': 'John Doe',
  'nim': '13519001',
  'jurusan': 'IF',
  'himpunan': 'HMIF ITB',
  'foto': 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Keqing.png',
  'judulTA': 'Apel Kucing Pisang Mangga Buah Binatang Dhuar',
  'listUnit': [{
    'logoUnit': 'ukj.png',
    'namaUnit': 'UKJ ITB'
  },
  {
    'logoUnit': 'ukj.png',
    'namaUnit': 'UKJ ITB'
  }
  ],
  'tipsSukses': 'Belajarlah sampai ga belajar, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu est eu nisi pulvinar tincidunt. Aliquam tempus nisi libero, quis laoreet augue venenatis eget.  ',
  'prestasi': ['Juara 1 International Makan Kerupuk Olympiad 2002',
    'Juara 3 Kejuaraan Ghibah Nasional 2029',
    'Juara 2 Lomba Blablabla'],
  'kontribusi': ['Staf Divisi Website Wisjul 2021', 'Kadiv Divisi Website Wisjul 2021', 'Kabid IT Wisjul 2021'],
  'karya': ['Karya seni 1','Karya seni 2','Karya seni 3']

},{
  'nama': 'John Doe',
  'nim': '13519001',
  'jurusan': 'IF',
  'himpunan': 'HMIF ITB',
  'foto': 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiao.png',
  'judulTA': 'Apel Kucing Pisang',
  'listUnit': [{
    'logoUnit': 'ukj.png',
    'namaUnit': 'UKJ ITB'
  }],
  'tipsSukses': 'Belajarlah sampai ga belajar',
  'prestasi': ['Juara 1 International Makan Kerupuk Olympiad 2002',
    'Juara 3 Kejuaraan Ghibah Nasional 2029',
    'Juara 2 Lomba Blablabla'],
  'kontribusi': ['Staf Divisi Website Wisjul 2021', 'Kadiv Divisi Website Wisjul 2021', 'Kabid IT Wisjul 2021'],
  'karya': ['Karya seni 1','Karya seni 2','Karya seni 3']
},{
  'nama': 'John Doe',
  'nim': '13519001',
  'jurusan': 'IF',
  'himpunan': 'HMIF ITB',
  'foto': 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Albedo.png',
  'judulTA': 'Apel Kucing Pisang Mangga Buah Binatang Dhuar',
  'listUnit': [{
    'logoUnit': 'ukj.png',
    'namaUnit': 'UKJ ITB'
  },
  {
    'logoUnit': 'ukj.png',
    'namaUnit': 'UKJ ITB'
  }
  ],
  'tipsSukses': 'Belajarlah sampai ga belajar',
  'prestasi': ['Juara 1 International Makan Kerupuk Olympiad 2002',
    'Juara 3 Kejuaraan Ghibah Nasional 2029',
    'Juara 2 Lomba Blablabla'],
  'kontribusi': ['Staf Divisi Website Wisjul 2021', 'Kadiv Divisi Website Wisjul 2021', 'Kabid IT Wisjul 2021'],
  'karya': ['Karya seni 1','Karya seni 2','Karya seni 3']
}];

export default function Wisudawan() {
  const [match, params] = useRoute('/wisudawan/:nim');

  if (match && params) {
    return (
      <div className='wisudawan'>
        <div className='wisudawan-tes'>
          <WisudawanContainer {...dataDummy[0]}/>

        </div>

        {/* pesan anonim */}

        <div className='pesan-anonim'>
          <div className='pesan-anonim-wrapper'>
            <PesanAnonim />
          </div>
          <div className='kirim-button-wrapper'>
            <Link href={`${params.nim}/kirim-pesan`}>
              <button className='kirim-button'>Kirim Ucapan</button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (<h1> cari apa mas? </h1>);
  }
}
