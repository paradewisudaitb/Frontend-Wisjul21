import React from 'react';
import WisudawanCard from './WisudawanCard';
import './WisudawanCardContainer.scss';

interface ListUnit {
  logoUnit: string,
  namaUnit: string
}

interface Data {
  name: string,
  nim: string,
  jurusan: string,
  judulTA: string,
  listUnit: ListUnit[]
}

const WisudawanCardContainer = () => {
  const data = [{
    'nama': 'John Doe',
    'nim': '13716059',
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
    }
    ]
  },{
    'nama': 'John Doe',
    'nim': '10517021',
    'jurusan': 'IF',
    'foto': 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiao.png',
    'judulTA': 'Apel Kucing Pisang',
    'listUnit': [{
      'logoUnit': 'ukj.png',
      'namaUnit': 'UKJ ITB'
    }
    ]
  },{
    'nama': 'John Doe',
    'nim': '12817007',
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
    }
    ]
  }];

  return (
    <div className='wisudawan-card-container'>
      {data.length > 0 ? (
        data.map((row, i) =>
          <WisudawanCard
            key={i}
            {...row}
          />
        )
      ) : (
        <p>
          Tidak ada wisudawan pada himpunan ini
        </p>
      )}

    </div>
  );
};

export default WisudawanCardContainer;