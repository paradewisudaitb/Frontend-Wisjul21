import React, { useState, useEffect } from 'react';
import './Wisudawan.scss';
import PesanAnonim from '../../component/PesanAnonim/PesanAnonim';
import WisudawanContainer from '../../component/WisudawanContainer/WisudawanContainer';
import { getPesan } from '../../controller/pesan';

type props = {
  nim: string,
}

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

export default function Wisudawan({ nim }: props): JSX.Element {
  const [loadingPesan, setLoadingPesan] = useState(true);
  const [pesanToShow, setPesanToShow] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // bagian pesan
    const tmp: JSX.Element[] = [];
    getPesan(nim).then(pesans => {
      if (pesans.length != 0) {
        pesans.forEach(pesan => {
          tmp.push(<PesanAnonim {...pesan} />);
        });
      } else {
        tmp.push(<p className='pesan-kosong'>Tidak ada pesan untuk wisudawan</p>);
      }

      setLoadingPesan(false);
      setPesanToShow(tmp);
    });
  }, []);

  return (
    <div className='wisudawan'>
      <div className='wisudawan-tes'>
        <WisudawanContainer {...dataDummy[0]}/>
      </div>

      <div className='pesan-anonim'>
        <div className='pesan-anonim-wrapper'>
          {loadingPesan && pesanToShow}
          {!loadingPesan && pesanToShow}
        </div>
        <div className='kirim-button-wrapper'>
          <a href="/kirim-pesan">
            <button className='kirim-button'>Kirim Pesan</button>
          </a>
        </div>
      </div>
    </div>
  );
}
