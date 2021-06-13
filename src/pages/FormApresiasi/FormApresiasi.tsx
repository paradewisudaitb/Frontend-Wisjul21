import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './FormApresiasi.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API_URL, ASSET_URL } from '../../api';

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

// const uploadFile = async (f: File, type: string, namaHimpunan: string) => {
//   const fd = new FormData();
//   fd.append('apresiasi', f);
//   let succ = true;
//   await fetch(`${API_URL}/form/uploadFoto`, {
//     method: 'POST',
//     headers: {
//       'X-Content-Type-Options': 'nosniff',
//     },
//     body: fd,
//   })
//     .then(res => res.json())
//     .then(res => {
//       const linkPasFoto = `apresiasiHMJ/${namaHimpunan}/${f.name}`;
//     })
//     .catch(err => {
//       succ = false;
//       console.error(err);
//       window.alert(errMsg);
//     });
// };

const schema = yup.object().shape({
  'himpunan': yup.string().required('Himpunan tidak boleh kosong.'),
  'tipeApresiasi': yup.string().required('Harus setidaknya 1 apresiasi.'),
  'kontenApresiasiLink' : yup.string().matches(/^((https|http):\/\/)/i, 'Link invalid (awali dengan `https://` atau `http://`)'),
  'kontenApresiasiFile' : yup.mixed(),
});


export default function Form() {
  const { register, watch, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const watchTipeApresiasi = watch('tipeApresiasi');

  const [nerimaFile, setNerimaFile] = useState(true);

  useEffect(() => {
    switch (watchTipeApresiasi) {
      case 'Tipe File':
      case 'Website':
        setNerimaFile(false);
        break;
      default:
        setNerimaFile(true);
    }
  }, [watchTipeApresiasi]);

  const submitForm = (data: any) => {
    // di sini xel
    console.log(data);
    if (data.kontenApresiasiFile && data.kontenApresiasiFile.length > 0) {
      const tmp = data.kontenApresiasiFile[0];
      const isValid = tmp.size > 0 || !SUPPORTED_FORMATS.includes(tmp.type);
      if (isValid) {
        alert('Bruh moment detected');
        return;
      }
    }
  };

  return (
    <div className="form-page">
      <div className="form-container mx-auto py-5">
        <form className="form my-4" onSubmit={handleSubmit(submitForm)}>
          <h1 className="form-title">Pengumpulan Konten Apresiasi Wisuda Juli 2021</h1>
          <div className="form-content m-0 mt-3">
            <div className="row">
              <div className="col-12">
                <div className="d-flex justify-content-between">
                  <select className="form-select" required {...register('himpunan')}>
                    <option disabled selected> Himpunan </option>
                    <option value="Himpunan Mahasiswa Fisika"> HIMAFI (Himpunan Mahasiswa Fisika) </option>
                    <option value="Himpunan Mahasiswa Mikrobiologi"> HIMAMIKRO 'ARCHAEA' (Himpunan Mahasiswa Mikrobiologi) </option>
                    <option value="Himpunan Mahasiswa Rekayasa Pertanian"> HIMAREKTA 'AGRAPANA' (Himpunan Mahasiswa Rekayasa Pertanian) </option>
                    <option value="Himpunan Mahasiswa Sumber Daya Air"> HIMASDA (Himpunan Mahasiswa Sumber Daya Air) </option>
                    <option value="Himpunan Mahasiswa Astronomi"> HIMASTRON (Himpunan Mahasiswa Astronomi) </option>
                    <option value="Himpunan Mahasiswa Teknik Kimia"> HIMATEK (Himpunan Mahasiswa Teknik Kimia) </option>
                    <option value="Himpunan Mahasiswa Teknik Geofisika"> HIMATG 'TERRA' (Himpunan Mahasiswa Teknik Geofisika) </option>
                    <option value="Himpunan Mahasiswa Matematika"> HIMATIKA (Himpunan Mahasiswa Matematika) </option>
                    <option value="Himpunan Mahasiswa Elektroteknik"> HME (Himpunan Mahasiswa Elektro) </option>
                    <option value="Himpunan Mahasiswa Farmasi"> HMF 'ARS PRAEPARANDI' (Himpunan Mahasiswa Farmasi) </option>
                    <option value="Himpunan Mahasiswa Fisika Teknik"> HMFT (Himpunan Mahasiswa Fisika Teknik) </option>
                    <option value="Himpunan Mahasiswa Rekayasa Kehutanan"> HMH 'SELVA' (Himpunan Mahasiswa Rekayasa Kehutanan) </option>
                    <option value="Himpunan Mahasiswa Informatika"> HMIF (Himpunan Mahasiswa Informatika) </option>
                    <option value="Himpunan Mahasiswa Kimia"> HMK 'AMISCA' (Himpunan Mahasiswa Kimia) </option>
                    <option value="Himpunan Mahasiswa Mesin"> HMM (Himpunan Mahasiswa Mesin) </option>
                    <option value="Himpunan Mahasiswa Meteorologi"> HMME 'ATMOSPHAIRA' (Himpunan Mahasiswa Meteorologi) </option>
                    <option value="Himpunan Mahasiswa Oseanografi"> HMO 'TRITON'(Himpunan Mahasiswa Oseanografi) </option>
                    <option value="Himpunan Mahasiswa Perencanaan Wilayah dan Kota Pangripta Loka"> HMP 'PANGRIPTA LOKA' (Himpunan Mahasiswa Planologi) </option>
                    <option value="Himpunan Mahasiswa Teknik Pangan"> HMPG (Himpunan Mahasiswa Teknik Pangan) </option>
                    <option value="Himpunan Mahasiswa Teknologi Pascapanen"> HMPP 'VADRA' ITB (Himpunan Mahasiswa Teknologi Pascapanen 'VADRA' ITB) </option>
                    <option value="Himpunan Mahasiswa Rekayasa Hayati"> HMRH  (Himpunan Mahasiswa Rekayasa Hayati) </option>
                    <option value="Himpunan Mahasiswa Sipil"> HMS (Himpunan Mahasiswa Sipil) </option>
                    <option value="Himpunan Mahasiswa Tambang"> HMT (Himpunan Mahasiswa Tambang) </option>
                    <option value="Himpunan Mahasiswa Teknik Bioenergi dan Kemurgi"> HMTB (Himpunan Mahasiswa Teknik Bioenergi) </option>
                    <option value="Himpunan Mahasiswa Teknik Geologi"> HMTG 'GEA' (Himpunan Mahasiswa Teknik Geologi) </option>
                    <option value="Himpunan Mahasiswa Teknik Lingkungan"> HMTL (Himpunan Mahasiswa Teknik Lingkungan) </option>
                    <option value="Himpunan Mahasiswa Teknik Perminyakan"> HMTM 'PATRA' (Himpunan Mahasiswa Teknik Perminyakan) </option>
                    <option value="Ikatan Mahasiswa Arsitektur Gunadharma"> IMA-G (Ikatan Mahasiswa Arsitektur Gunadharma) </option>
                    <option value="Ikatan Mahasiswa Desain Interior"> IMDI (Ikatan Mahasiswa Desain Interior) </option>
                    <option value="Ikatan Mahasiswa Geodesi"> IMG (Ikatan Mahasiswa Geodesi) </option>
                    <option value="Ikatan Mahasiswa Kewirausahaan"> IMK (Ikatan Mahasiswa Kewirausahaan) </option>
                    <option value="Ikatan Mahasiswa Teknik Metalurgi"> IMMG (Ikatan Mahasiswa Teknik Metalurgi) </option>
                    <option value="Ikatan Mahasiswa Telekomunikasi"> IMT (Ikatan Mahasiswa Telekomunikasi) </option>
                    <option value="Keluarga Mahasiswa Desain Produk"> INDDES (Keluarga Mahasiswa Desain Produk) </option>
                    <option value="Ikatan Pemuda Pemudi Desain Grafis"> IPPDIG (Ikatan Pemuda Pemudi Desain Grafis) </option>
                    <option value="Keluarga Mahasiswa Infrastruktur Lingkungan"> KMIL (Keluarga Mahasiswa Infrastruktur Lingkungan) </option>
                    <option value="Keluarga Mahasiswa Teknik Kelautan"> KMKL (Keluarga Mahasiswa Teknik Kelautan) </option>
                    <option value="Keluarga Mahasiswa Manajemen"> KMM (Keluarga Mahasiswa Manajemen) </option>
                    <option value="Keluarga Mahasiswa Teknik Penerbangan"> KMPN 'OTTO LILIENTHAL' (Keluarga Mahasiswa Teknik Penerbangan) </option>
                    <option value="Keluarga Mahasiswa Teknik Industri"> MTI (Keluarga Mahasiswa Teknik Industri) </option>
                    <option value="Himpunan Mahasiswa Teknik Material"> MTM (Himpunan Mahasiswa Teknik Material) </option>
                    <option value="Himpunan Mahasiswa Biologi"> NYMPHAEA (Himpunan Mahasiswa Biologi) </option>
                    <option value="Himpunan Mahasiswa Kriya"> TERIKAT (Himpunan Mahasiswa Kriya) </option>
                    <option value="Visual Art Student Aggregate"> VASA (Visual Art Student Aggregate) / (Seni Rupa) </option>
                  </select>
                </div>
                {errors.himpunan && <p className="form-error">{errors.himpunan.message}</p>}
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <select className="form-select" required {...register('tipeApresiasi')}>
                  <option value="Tipe File" disabled selected> Tipe File </option>
                  <option value="Poster"> Poster </option>
                  <option value="Video"> Video </option>
                  <option value="Puisi"> Puisi </option>
                  <option value="Website"> Website </option>
                  <option value="Lagu"> Lagu </option>
                  <option value="Lainnya"> Lainnya </option>
                </select>
              </div>
              <div className="col-12 col-md-6 my-3">
                {nerimaFile && <input placeholder="File apresiasi" type="file" className="form-input" required {...register('kontenApresiasiFile')}/>}
                {!nerimaFile && <input placeholder="Link ke website" type="text" className="form-input weblink-input" required {...register('kontenApresiasiLink')}/>}
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button className="form-btn" type="submit">Submit</button>
          </div>
          <div className="d-flex justify-content-center">
            <div className="form-success"> Submit Success </div>
          </div>
        </form>
      </div>
    </div>
  );
}
