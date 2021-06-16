import React from 'react';
import WisudawanCard from './WisudawanCard';
import './WisudawanCardContainer.scss';

const WisudawanCardContainer = () => {
  // interface ListUnit {
  //   logoUnit: string,
  //   namaUnit: string
  // }
  
  // interface Data {
  //   nama: string,
  //   nim: string,
  //   jurusan: string,
  //   judulTA: string,
  //   listUnit: ListUnit[]
  // }

  const data = [{
    'nama': 'John Doe',
    'nim': '13519001',
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
    'nim': '13519001',
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
    'nim': '13519001',
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