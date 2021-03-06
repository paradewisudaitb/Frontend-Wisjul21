import { FormEvent, useState } from 'react';
import { useLocation, useRoute } from 'wouter';
import { getByNIM } from '../../controller/wisudawan';
import './KirimPesanPage.scss';
import { Loading } from '../../component/Loading/Loading';
import { useEffect } from 'react';
import { sendPesan } from '../../controller/pesan';
import IPesanOut from '../../interfaces/IPesanOut';
import sensor from '../../middleware/sensorKataKasar';
import { Navbar } from '../../component/NavbarFooter/Navbar';
import { ASSET_URL } from '../../api';

const maxMessageLength = 255;
const maxSenderNameLength = 30;

export const KirimPesanPage = (): JSX.Element => {
  const [match, params] = useRoute('/hmj/:fak/:nim/kirim-pesan');
  // const [match, params] = useRoute(KIRIM_PESAN_PAGE.path);
  const limit = 200;

  if (match && params) {
    const [loadingImg, setLoadingImg] = useState(true);

    const nameinputresize = () => {
      const nameinput = document.getElementById('nameinput');
      if (nameinput) {
        nameinput.style.height = '';
        nameinput.style.height = Math.min(nameinput.scrollHeight, limit) + 'px';
      }
    };

    const nim = params.nim;
    const fak = params.fak;

    const [_, setLocation] = useLocation();
    const [loading, setLoading] = useState(true);
    const [wisudawan, setWisudawan] = useState({
      nim: nim,
      namaLengkap: 'Loading',
      pasfoto: 'loading'
    });

    useEffect(() => {
      getByNIM(nim)
        .then(dataWisudawan => {
          setWisudawan(dataWisudawan);
          setLoading(false);
        })
        .catch(err => console.error(err));
    }, []);

    const charCount = (text: string, disp: HTMLElement, maxchar: number) => {
      disp.innerHTML =  text.length.toString() + '/' + maxchar;
    };

    const messageCount = (text: string) => {
      const display = document.getElementById('message-char-counter');
      if (display) charCount(text, display, maxMessageLength);
    };

    const senderCount = (text: string) => {
      const display = document.getElementById('sender-char-counter');
      if (display) charCount(text, display, maxSenderNameLength);
    };

    const submitPesan = (event: FormEvent) => {
      event.preventDefault();
      const namaPengirimInput: HTMLInputElement | null = document.querySelector('#nameinput');
      const isiPesanInput: HTMLTextAreaElement | null = document.querySelector('#message-content');

      const namaPengirim = namaPengirimInput?.value;
      const isiPesan = isiPesanInput?.value;

      if (isiPesan) {
        const pesan: IPesanOut = {
          nim: nim,
          pesan: sensor(isiPesan) || isiPesan,
          namaPengirim: sensor(namaPengirim),
        };

        sendPesan(pesan)
          .then(_ => {
            window.alert('Pesan berhasil dikirim');
            setLocation(`/hmj/${fak}/${nim}`);
          })
          .catch(err => {
            window.alert('Pesan gagal dikirim');
            console.error(err);
          });
      }
    };

    return (
      <>
        <Navbar />
        <div className="kirimpesan">
          { loading ? (
            <div className='loading-screen'>
              <Loading />
            </div>
          ) : (
            <>
              <img className='jeduar' src={`${ASSET_URL}/assets/images/vistock/main/spark%202%20atas%20matahari.png`} alt="" />
              <div className="kirimpesan-container">
                <div className="receiver">
                  <div className='nama-wisudawan'>
                    {wisudawan.nim + ' ' + wisudawan.namaLengkap}
                  </div>
                  <div className="foto-wisudawan-container">
                    {loadingImg && <Loading />}
                    <img
                      className='foto-wisudawan'
                      src={wisudawan.pasfoto}
                      alt="Foto Wisudawan"
                      onLoad={() => setLoadingImg(false)}
                      style={!loadingImg ? { opacity: 1 } : { height: 0, width: 0 }}
                    />
                  </div>
                </div>
                <div className="message">
                  <img className='kumo' src={`${ASSET_URL}/assets/images/vistock/header/awan%20kiri.png`} alt="" />
                  <form action="" className='mx-4' onSubmit={submitPesan}>
                    <div className="sender-name mt-4">
                      <label className='sender-name-label'>Dari</label>
                      <div className="sender-name-input-container">
                        <textarea id="nameinput" rows={1}  className="sender-name-input float-start" placeholder="Nama pengirim (opsional)" maxLength={maxSenderNameLength} onChange={(e) => senderCount(e.target.value)} onInput={nameinputresize}/>
                        <label className='float-end small' id='sender-char-counter'>0/{maxSenderNameLength}</label>
                      </div>
                    </div>
                    <div className="kirimpesan-line"></div>
                    <div className="message-label">
                      <div className='message-content-label'>Pesan</div>
                    </div>
                    <div className="message-content-content">
                      <textarea name='message' placeholder="Ketik pesan di sini... " id='message-content' className='w-100 message-content' maxLength={maxMessageLength} onChange={(e) => messageCount(e.target.value)}/>
                    </div>
                    <div className="mb-2 float-end">
                      <label className="message-char-counter small m-2" id='message-char-counter'>0/{maxMessageLength}</label>
                      <input type="submit" value="Submit" className='submit-button' />
                    </div>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <h1> cari apa mas? </h1>
      </>    
    );
  }
};