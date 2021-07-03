import { useState, useEffect } from 'react';
import { Link, useRoute } from 'wouter';
import  { Loading } from '../../component/Loading/Loading';
import './Wisudawan.scss';
import PesanAnonim from '../../component/PesanAnonim/PesanAnonim';
import WisudawanContainer from '../../component/WisudawanContainer/WisudawanContainer';
import { getPesan } from '../../controller/pesan';
import { getByNIM } from '../../controller/wisudawan';
import { ASSET_URL } from '../../api';

export default function Wisudawan(): JSX.Element {
  const [match, params] = useRoute('/hmj/:hmj/:nim');

  const [loadingWisudawan, setLoadingWisudawan] = useState(true);
  const [dataWisudawan, setDataWisudawan] = useState<JSX.Element>();

  const [loadingPesan, setLoadingPesan] = useState(true);
  const [pesanToShow, setPesanToShow] = useState<JSX.Element[]>([]);

  if (match && params) {
    const nim = params.nim;
    const hmj = params.hmj;

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
          setDataWisudawan(<WisudawanContainer {...dataWisudawan}/>);
          setLoadingWisudawan(false);
        })
        .catch(
          err => console.error(err)
        );

      // bagian pesan
      getMessageToShow();
      const interval = 5 * 60 * 1000;
      setInterval(getMessageToShow, interval); // ambil pesan baru setiap `interval`
    }, []);

    return (
      <div className='page-wisudawan'>
        <div className='container'>
          <div className='wisudawan-tes'>
            {loadingWisudawan ? (
              <div>
                <Loading />
                <h2 className='loading-msg'>
                  Loading data wisudawan
                </h2>
              </div>
            ) : dataWisudawan}
          </div>

          <div className="awan">
            <img src={`${ASSET_URL}/assets/images/vistock/main/awan%203-01.png`} alt="awan" className="awan-bawah" />
            <img src={`${ASSET_URL}/assets/images/vistock/main/awan%204-01.png`} alt="awan" className="awan-atas" />
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
                ) : pesanToShow}
            </div>
          </div>
          <div className='kirim-pesan-button-wrapper'>
            <Link href={`/hmj/${hmj}/${nim}/kirim-pesan`}>
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
