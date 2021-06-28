import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './FormApresiasi.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { uploader } from '../../controller/kontenApresiasi';
import ApresiasiSelection from '../../component/ApresiasiSelection/ApresiasiSelection';

const SUPPORTED_FORMATS = [
  'image/jpg', 'image/jpeg', 'image/gif', 'image/png',
  'audio/mpeg', 'audio/webm', 'audio/wav', 'audio/m4a',
  'video/mp4', 'video/webm'
];

const FILE_SIZE = 8E6; // 8 MB

const validateFileType = (value: string): boolean => {
  if(value) {
    const type = value.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/);
    if (!type)
      return false;
    return SUPPORTED_FORMATS.includes(type[0]);
  }

  return false;
};

enum ContentType {
  img,
  vid,
  txt,
}

const errMsg = 'Ada kesalahan pada data. Jika data sudah benar dan masih gagal atau ingin melakukan perubahan data, harap hubungi panitia.';


const schema = yup.object().shape({
  'himpunan': yup.string().required('Himpunan tidak boleh kosong.'),
  'apresiasi1': yup.string().required('Harus setidaknya 1 apresiasi.'),
  'apresiasi1Link' : yup.string().matches(/^((https?):\/\/)/i, 'Link invalid (awali dengan `https://` atau `http://`)'),
  'apresiasi1File' : yup.mixed(),
  'apresiasi2': yup.string(),
  'apresiasi2Link' : yup.string().matches(/^((https?):\/\/)/i, 'Link invalid (awali dengan `https://` atau `http://`)'),
  'apresiasi2File' : yup.mixed(),
  'apresiasi3': yup.string(),
  'apresiasi3Link' : yup.string().matches(/^((https?):\/\/)/i, 'Link invalid (awali dengan `https://` atau `http://`)'),
  'apresiasi3File' : yup.mixed(),
});


export default function Form() {
  const { register, watch, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = async (data: any) => {
    console.log(data);
    const __uploader = (tipeApresiasi: string, konten: any, angka: number) => {
      uploader(data.himpunan, tipeApresiasi, konten)
        .then(_ => window.alert(`Berhasil upload konten apresiasi ${angka}`))
        .catch(err => {
          window.alert(`Gagal mengupload konten apresiasi ${angka}`);
          console.error(err);
        });
    };

    if ((data.apresiasi1 == 'batal' || data.apresiasi1 == 'tipe file')
        && (data.apresiasi2 == 'batal' || data.apresiasi2 == 'tipe file')
        && (data.apresiasi3 == 'batal' || data.apresiasi3 == 'tipe file')) {
      window.alert('Ga ada konten dong :(');
      return;
    }

    if (data.apresiasi1 == data.apresiasi2 || data.apresiasi1 == data.apresiasi3 || data.apresiasi2 == data.apresiasi3) {
      window.alert('1 tipe konten cuman bisa muncul kali');
      return;
    }

    if (data.himpunan == 'Himpunan') {
      window.alert('Belom milih himpunan :(');
    }

    let count = 0;
    if (data.apresiasi1 != 'batal' && data.apresiasi1 != 'tipe file') {
      const konten = data.apresiasi1 != 'website'
        ? data.apresiasi1File[0] : data.apresiasi1Link;
      __uploader(data.apresiasi1, konten, 1);
      count++;
    }

    if (data.apresiasi2 != 'batal' && data.apresiasi2 != 'tipe file') {
      const konten = data.apresiasi2 != 'website'
        ? data.apresiasi2File[0] : data.apresiasi2Link;
      __uploader(data.apresiasi2, konten, 2);
      count++;
    }

    if (data.apresiasi3 != 'batal' && data.apresiasi3 != 'tipe file') {
      const konten = data.apresiasi3 != 'website'
        ? data.apresiasi3File[0] : data.apresiasi3Link;
      __uploader(data.apresiasi3, konten, 3);
      count ++;
    }

    if (count == 0) {
      window.alert('Apa yang diupload? :(');
    }
  };

  return (
    <div className="form-apresiasi-page">
      <div className="form-apresiasi-container">
        <form className="form" onSubmit={handleSubmit(submitForm)}>
          <h1 className="form-apresiasi-title">Pengumpulan Konten Apresiasi Wisuda Juli 2021</h1>
          <div className="form-apresiasi-content m-0 mt-3">
            <div className="row">
              <div className="col-12">
                <div className="d-flex justify-content-between">
                  <select className="form-apresiasi-select" required defaultValue="Himpunan" {...register('himpunan')}>
                    <option className="form-apresiasi-select-option" value="Himpunan" disabled> Himpunan </option>
                    <option className="form-apresiasi-select-option" value="TPB FITB"> TPB FITB </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Meteorologi"> HMME 'ATMOSPHAIRA' (Himpunan Mahasiswa Meteorologi) </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Oseanografi"> HMO 'TRITON'(Himpunan Mahasiswa Oseanografi) </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Teknik Geologi"> HMTG 'GEA' (Himpunan Mahasiswa Teknik Geologi) </option>
                    <option className="form-apresiasi-select-option" value="Ikatan Mahasiswa Geodesi"> IMG (Ikatan Mahasiswa Geodesi) </option>
                    <option className="form-apresiasi-select-option" disabled> ------- </option>
                    <option className="form-apresiasi-select-option" value="TPB FMIPA"> TPB FMIPA </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Fisika"> HIMAFI (Himpunan Mahasiswa Fisika) </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Astronomi"> HIMASTRON (Himpunan Mahasiswa Astronomi) </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Matematika"> HIMATIKA (Himpunan Mahasiswa Matematika) </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Kimia"> HMK 'AMISCA' (Himpunan Mahasiswa Kimia) </option>
                    <option className="form-apresiasi-select-option" disabled> ------- </option>
                    <option className="form-apresiasi-select-option" value="TPB FTI"> TPB FTI </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Fisika Teknik"> HMFT (Himpunan Mahasiswa Fisika Teknik) </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Teknik Kimia"> HIMATEK (Himpunan Mahasiswa Teknik Kimia) </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Teknik Pangan"> HMPG (Himpunan Mahasiswa Teknik Pangan) </option>
                    <option className="form-apresiasi-select-option" value="Keluarga Mahasiswa Teknik Industri"> MTI (Keluarga Mahasiswa Teknik Industri) </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Teknik Bioenergi dan Kemurgi"> HMTB (Himpunan Mahasiswa Teknik Bioenergi) </option>
                    <option className="form-apresiasi-select-option" disabled> ------- </option>
                    <option className="form-apresiasi-select-option" value="TPB FTMD"> TPB FTMD </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Mesin"> HMM (Himpunan Mahasiswa Mesin) </option>
                    <option className="form-apresiasi-select-option" value="Keluarga Mahasiswa Teknik Penerbangan"> KMPN 'OTTO LILIENTHAL' (Keluarga Mahasiswa Teknik Penerbangan) </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Teknik Material"> MTM (Himpunan Mahasiswa Teknik Material) </option>
                    <option className="form-apresiasi-select-option" disabled> ------- </option>
                    <option className="form-apresiasi-select-option" value="TPB FTSL"> TPB FTSL </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Sipil"> HMS (Himpunan Mahasiswa Sipil) </option>
                    <option className="form-apresiasi-select-option" value="Keluarga Mahasiswa Infrastruktur Lingkungan"> KMIL (Keluarga Mahasiswa Infrastruktur Lingkungan) </option>
                    <option className="form-apresiasi-select-option" value="Keluarga Mahasiswa Teknik Kelautan"> KMKL (Keluarga Mahasiswa Teknik Kelautan) </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Teknik Lingkungan"> HMTL (Himpunan Mahasiswa Teknik Lingkungan) </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Sumber Daya Air"> HIMASDA (Himpunan Mahasiswa Sumber Daya Air) </option>
                    <option className="form-apresiasi-select-option" disabled> ------- </option>
                    <option className="form-apresiasi-select-option" value="TPB FTTM"> TPB FTTM </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Tambang"> HMT (Himpunan Mahasiswa Tambang) </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Teknik Perminyakan"> HMTM 'PATRA' (Himpunan Mahasiswa Teknik Perminyakan) </option>
                    <option className="form-apresiasi-select-option" value="Ikatan Mahasiswa Teknik Metalurgi"> IMMG (Ikatan Mahasiswa Teknik Metalurgi) </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Teknik Geofisika"> HIMATG 'TERRA' (Himpunan Mahasiswa Teknik Geofisika) </option>
                    <option className="form-apresiasi-select-option" disabled> ------- </option>
                    <option className="form-apresiasi-select-option" value="TPB SAPPK"> TPB SAPPK </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Perencanaan Wilayah dan Kota Pangripta Loka"> HMP 'PANGRIPTA LOKA' (Himpunan Mahasiswa Planologi) </option>
                    <option className="form-apresiasi-select-option" value="Ikatan Mahasiswa Arsitektur Gunadharma"> IMA-G (Ikatan Mahasiswa Arsitektur Gunadharma) </option>
                    <option className="form-apresiasi-select-option" disabled> ------- </option>
                    <option className="form-apresiasi-select-option" value="TPB STEI"> TPB STEI </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Informatika"> HMIF (Himpunan Mahasiswa Informatika) </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Elektroteknik"> HME (Himpunan Mahasiswa Elektroteknik) </option>
                    <option className="form-apresiasi-select-option" value="Ikatan Mahasiswa Telekomunikasi"> IMT (Ikatan Mahasiswa Telekomunikasi) </option>
                    <option className="form-apresiasi-select-option" disabled> ------- </option>
                    <option className="form-apresiasi-select-option" value="TPB SBM"> TPB SBM </option>
                    <option className="form-apresiasi-select-option" value="Ikatan Mahasiswa Kewirausahaan"> IMK (Ikatan Mahasiswa Kewirausahaan) </option>
                    <option className="form-apresiasi-select-option" value="Keluarga Mahasiswa Manajemen"> KMM (Keluarga Mahasiswa Manajemen) </option>
                    <option className="form-apresiasi-select-option" disabled> ------- </option>
                    <option className="form-apresiasi-select-option" value="TPB SITH-R"> TPB SITH-R </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Rekayasa Pertanian"> HIMAREKTA 'AGRAPANA' (Himpunan Mahasiswa Rekayasa Pertanian) </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Rekayasa Kehutanan"> HMH 'SELVA' (Himpunan Mahasiswa Rekayasa Kehutanan) </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Rekayasa Hayati"> HMRH  (Himpunan Mahasiswa Rekayasa Hayati) </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Teknologi Pascapanen"> HMPP 'VADRA' ITB (Himpunan Mahasiswa Teknologi Pascapanen 'VADRA' ITB) </option>
                    <option className="form-apresiasi-select-option" disabled> ------- </option>
                    <option className="form-apresiasi-select-option" value="TPB SITH-S"> TPB SITH-S </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Mikrobiologi"> HIMAMIKRO 'ARCHAEA' (Himpunan Mahasiswa Mikrobiologi) </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Biologi"> NYMPHAEA (Himpunan Mahasiswa Biologi) </option>
                    <option className="form-apresiasi-select-option" disabled> ------- </option>
                    <option className="form-apresiasi-select-option" value="TPB SF"> TPB SF </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Farmasi"> HMF 'ARS PRAEPARANDI' (Himpunan Mahasiswa Farmasi) </option>
                    <option className="form-apresiasi-select-option" disabled> ------- </option>
                    <option className="form-apresiasi-select-option" value="TPB FSRD"> TPB FSRD </option>
                    <option className="form-apresiasi-select-option" value="Himpunan Mahasiswa Kriya"> TERIKAT (Himpunan Mahasiswa Kriya) </option>
                    <option className="form-apresiasi-select-option" value="Ikatan Mahasiswa Desain Interior"> IMDI (Ikatan Mahasiswa Desain Interior) </option>
                    <option className="form-apresiasi-select-option" value="Ikatan Pemuda Pemudi Desain Grafis"> IPPDIG (Ikatan Pemuda Pemudi Desain Grafis) </option>
                    <option className="form-apresiasi-select-option" value="Keluarga Mahasiswa Desain Produk"> INDDES (Keluarga Mahasiswa Desain Produk) </option>
                    <option className="form-apresiasi-select-option" value="Visual Art Student Aggregate"> VASA (Visual Art Student Aggregate) / (Seni Rupa) </option>
                  </select>
                </div>
                {errors.himpunan && <p className="form-apresiasi-error">{errors.himpunan.message}</p>}
              </div>
            </div>
            <ApresiasiSelection register={register} watch={watch} nama='apresiasi1' />
            <ApresiasiSelection register={register} watch={watch} nama='apresiasi2' />
            <ApresiasiSelection register={register} watch={watch} nama='apresiasi3' />
          </div>
          <div className="d-flex justify-content-end">
            <button className="form-btn mb-2" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}