import { useState, useEffect } from 'react';
import { Link, useRoute } from 'wouter';
import  { Loading } from '../Loading/Loading';
import './Wisudawan.scss';
import PesanAnonim from '../../component/PesanAnonim/PesanAnonim';
import WisudawanContainer from '../../component/WisudawanContainer/WisudawanContainer';
import { getPesan } from '../../controller/pesan';
import { getByNIM } from '../../controller/wisudawan';


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

// nim: string;
// namaJurusan: string;
// namaHimpunan: string;
// namaLengkap: string;
// namaPanggilan: string;
// email: string;
// angkatan: number;
// tipsSukses: string;
// kotaAsal: string;
// tanggalLahir: Date;
// judulTA: string;
// funFact: string;
// pasfoto: string;
// nonhim: boolean;
// karya?: string[];
// kontribusi?: string[];
// lembaga?: string[];
// prestasi?: string[];

const dataDummy2 = [{
  'namaPanggilan':'John',
  'email':'johndoe@gmail.com',
  'angkatan': 2019,
  'kotaAsal': 'Jakarta Selatan',
  'tanggalLahir': new Date('2019-12-25'),
  // 'tanggalLahir': new Date(1962, 6, 7, 12),
  'nonhim':false,
  'lembaga': ['UKJ ITB','8EH Radio ITB','TEC'],
  'funFact': 'Belajarlah sampai ga belajar, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu est eu nisi pulvinar tincidunt. Aliquam tempus nisi libero, quis laoreet augue venenatis eget.  ',


  'namaLengkap': 'John Doe',
  'nim': '13519001',
  'namaJurusan': 'IF',
  'namaHimpunan': 'HMIF ITB',
  'pasfoto': 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Keqing.png',
  'judulTA': 'Apel Kucing Pisang Mangga Buah Binatang Dhuar',
  'tipsSukses': 'Belajarlah sampai ga belajar, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu est eu nisi pulvinar tincidunt. Aliquam tempus nisi libero, quis laoreet augue venenatis eget.  ',
  'prestasi': ['Juara 1 International Makan Kerupuk Olympiad 2002',
    'Juara 3 Kejuaraan Ghibah Nasional 2029',
    'Juara 2 Lomba Blablabla'],
  'kontribusi': ['Staf Divisi Website Wisjul 2021', 'Kadiv Divisi Website Wisjul 2021', 'Kabid IT Wisjul 2021'],
  // 'karya': ['Karya seni 1','Karya seni 2','Karya seni 3']

},{
  'namaPanggilan':'John',
  'email':'johndoe@gmail.com',
  'angkatan': 2019,
  'kotaAsal': 'Jakarta Selatan',
  'tanggalLahir': new Date('2001-11-13'),
  'nonhim':false,
  'lembaga': ['UKJ ITB','8EH Radio ITB','TEC'],
  'funFact': 'Belajarlah sampai ga belajar, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu est eu nisi pulvinar tincidunt. Aliquam tempus nisi libero, quis laoreet augue venenatis eget.  ',

  'namaLengkap': 'John Doe',
  'nim': '13519001',
  'namaJurusan': 'IF',
  'namaHimpunan': 'HMIF ITB',
  'pasfoto': 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiao.png',
  'judulTA': 'Apel Kucing Pisang',

  'tipsSukses': 'Belajarlah sampai ga belajar',
  'prestasi': ['Juara 1 International Makan Kerupuk Olympiad 2002',
    'Juara 3 Kejuaraan Ghibah Nasional 2029',
    'Juara 2 Lomba Blablabla'],
  'kontribusi': ['Staf Divisi Website Wisjul 2021', 'Kadiv Divisi Website Wisjul 2021', 'Kabid IT Wisjul 2021'],
  // 'karya': ['Karya seni 1','Karya seni 2','Karya seni 3']
},{
  'namaPanggilan':'John',
  'email':'johndoe@gmail.com',
  'angkatan': 2019,
  'kotaAsal': 'Jakarta Selatan',
  'tanggalLahir': new Date('2001-11-13'),
  'nonhim':false,
  'lembaga': ['UKJ ITB','8EH Radio ITB','TEC'],
  'funFact': 'Belajarlah sampai ga belajar, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu est eu nisi pulvinar tincidunt. Aliquam tempus nisi libero, quis laoreet augue venenatis eget.  ',

  'namaLengkap': 'John Doe',
  'nim': '13519001',
  'namaJurusan': 'IF',
  'namaHimpunan': 'HMIF ITB',
  'pasfoto': 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Albedo.png',
  'judulTA': 'Apel Kucing Pisang Mangga Buah Binatang Dhuar',
  'tipsSukses': 'Belajarlah sampai ga belajar',
  'prestasi': ['Juara 1 International Makan Kerupuk Olympiad 2002',
    'Juara 3 Kejuaraan Ghibah Nasional 2029',
    'Juara 2 Lomba Blablabla'],
  'kontribusi': ['Staf Divisi Website Wisjul 2021', 'Kadiv Divisi Website Wisjul 2021', 'Kabid IT Wisjul 2021'],
  'karya': ['Karya seni 1','Karya seni 2','Karya seni 3']
}];


export default function Wisudawan(): JSX.Element {
  const [match, params] = useRoute('/wisudawan/:nim');

  const [loadingWisudawan, setLoadingWisudawan] = useState(true);
  const [dataWisudawan, setDataWisudawan] = useState<JSX.Element>();

  const [loadingPesan, setLoadingPesan] = useState(true);
  const [pesanToShow, setPesanToShow] = useState<JSX.Element[]>([]);

  if (match && params) {
    const nim = params.nim;
    const getMessageToShow = () => {
      const tmp: JSX.Element[] = [];
      getPesan(nim)
        .then(pesans => {
          setLoadingPesan(true);
          if (pesans.length != 0) {
            pesans.forEach(pesan => {
              tmp.push(<PesanAnonim key={pesan.idPesan} {...pesan} />);
            });
          } else {
            tmp.push(<p className='pesan-kosong'>Tidak ada pesan untuk wisudawan</p>);
          }

          setLoadingPesan(false);
          setPesanToShow(tmp);
        });
    };

    useEffect(() => {
      getByNIM(nim)
        .then(dataWisudawan => {
          // bagian data wisudawan
          // setDataWisudawan(<WisudawanContainer {...dataWisudawan}/>);
          setDataWisudawan(<WisudawanContainer {...dataDummy2[0]}/>);
          setLoadingWisudawan(false);
        })
        .catch(err => console.error(err));

      // bagian pesan
      getMessageToShow();
      const interval = 5 * 60 * 1000;
      setInterval(getMessageToShow, interval); // ambil pesan baru setiap `interval`
    }, []);

    return (

      <div className='bg-page-wisudawan'>
        <div className='container'>
          <div className='wisudawan-tes'>
            {loadingWisudawan ? (
              <div>
                <Loading />
                <h2 className="loading-msg">
                  Loading data wisudawan
                </h2>
              </div>
            ) : dataWisudawan}
          </div>

          <div className='pemisah'></div>

          <h3 className='judul-section'>
            Pesan Untuk Wisudawan
          </h3>
          <div className='pesan-anonim'>
            <div className='pesan-anonim-wrapper'>
              {loadingPesan
                ? (
                  <div>
                    <Loading />
                    <h2 className='loading-msg'>
                      Loading pesan wisudawan
                    </h2>
                  </div>
                ) : (
                  pesanToShow
                )}
            </div>
          </div>
          <div className='kirim-pesan-button-wrapper'>
            <Link href={`/wisudawan/${nim}/kirim-pesan`}>
              <button className='kirim-pesan-button'>Kirim Pesan</button>
            </Link>
          </div>
        </div>
      </div>

    );
  } else {
    return (<h1> cari apa mas? </h1>);
  }
}
