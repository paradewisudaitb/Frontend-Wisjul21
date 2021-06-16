import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Form.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { API_URL, ASSET_URL } from '../../api';

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];
const FILE_SIZE = 5E6; // 5 MB

export const validateImageType = (value: string): boolean => {
  if(value) {
    const type = value.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/);
    if (!type)
      return false;
    return SUPPORTED_FORMATS.includes(type[0]);
  }

  return false;
};

const schema = yup.object().shape({
  'himpunan': yup.string().required('Himpunan tidak boleh kosong.'),
  'jurusan': yup.string().required('Jurusan tidak boleh kosong.'),
  'namalengkap': yup.string().max(255).required('Nama lengkap tidak boleh kosong.'),
  'namapanggilan': yup.string().max(255).required('Nama panggilan tidak boleh kosong.'),
  'nim': yup.string().matches(/^\d{3}(14|15|16|17)\d{3}$/).required('NIM tidak boleh kosong.'),
  'judulta': yup.string().max(255).required('Judul TA tidak boleh kosong.'),
  'funfact': yup.string().max(255).required('Fun fact tidak boleh kosong.'),
  'tips': yup.string().max(255).required('Tips tidak boleh kosong.'),
  'kontribusi': yup.string(),
  'prestasi': yup.string(),
  'karya': yup.string(),
  'nonhmj': yup.string(),
  'email': yup.string().email().max(255).required('Email tidak boleh kosong'),
  'kota': yup.string().max(255).required('Kota tidak boleh kosong'),
  'tanggallahir': yup.date().required('Tanggal lahir tidak boleh kosong'),
  'angkatan': yup.number().integer().positive().required('Angkatan tidak boleh kosong'),
  'foto' : yup.mixed()
    .test('fileType', 'Format file tidak valid', value => SUPPORTED_FORMATS.includes(value[0].type))
    .test('fileSize', 'File terlalu besar', value => value[0].size <= FILE_SIZE)
    .required('Foto tidak boleh kosong'),
});


export default function Form() {
  const { register, watch, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = async (data: any) => {
    window.alert('Data dan foto sedang diupload, harap menunggu.');
    const errMsg = 'Ada kesalahan pada data. Jika data sudah benar dan masih gagal atau ingin melakukan perubahan data, harap hubungi panitia.';
    const linkFoto = ASSET_URL + '/fotoWisudawan/';
    // isi data
    const req: {[k: string]: any} = {
      nim: data.nim,
      jurusan: data.jurusan,
      namaLengkap: data.namalengkap,
      namaPanggilan: data.namapanggilan,
      judulTA: data.judulta,
      funFact: data.funfact,
      tipsSukses: data.tips,
      email: data.email,
      kotaAsal: data.kota,
      tanggalLahir: data.tanggallahir,
      angkatan: data.angkatan,
      linkPasFoto: linkFoto,
    };

    if (data.karya && data.karya != '') {
      req.karya = data.karya;
    }
    if (data.prestasi && data.prestasi != '') {
      req.prestasi = data.prestasi;
    }
    if (data.kontribusi && data.kontribusi != '') {
      req.kontribusi = data.kontribusi;
    }
    if (data.nonhmj && data.nonhmj != '') {
      req.lembaga = data.nonhmj;
    }

    // upload gambar
    const fd = new FormData();
    fd.append('foto', data.foto[0]);
    let succ = true;
    await fetch(`${API_URL}/form/uploadFoto`, {
      method: 'POST',
      headers: {
        'X-Content-Type-Options': 'nosniff',
      },
      body: fd,
    })
      .then(res => res.json())
      .then(res => {
        req.linkPasFoto = `${linkFoto}/${res.filename}`;
      })
      .catch(err => {
        succ = false;
        console.error(err);
        window.alert(errMsg);
      });

    if (!succ) {
      return;
    }

    // bikin HTTP request ke backend
    fetch(`${API_URL}/form/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
      },
      body: JSON.stringify(req),
    })
      .then(res => res.json())
      .then(_ => {
        window.alert('Penambahan data berhasil.');
        const tmp = document.querySelector('.form-success');
        if (tmp)
          tmp.setAttribute('style', 'visibility: visible;');
      })
      .catch(err => {
        console.error(err);
        window.alert(errMsg);
      });
  };

  const watchHimpunan = watch('himpunan');

  const [jurusanOption, setJurusanOption] = useState([]);

  useEffect(() => {
    if (watchHimpunan) {
      setJurusanOption([]);
      fetch(`${API_URL}/jurusan/get?nama=${watchHimpunan}`, {
        headers: {
          'X-Content-Type-Options': 'nosniff',
        }
      })
        .then(res => res.json())
        .then(res => {
          setJurusanOption(res.jurusan.map((e: string) => <option key={e} value={e}>{e}</option>));
        });
    }
  }, [watchHimpunan]);

  return (
    <div className="form-page">
      <div className="form-container mx-auto">
        <Row>
          <form className="form my-4" onSubmit={handleSubmit(submitForm)}>
            <h1 className="form-title"> Database Wisudawan Wisuda Juli ITB 2021 </h1>
            <div className="form-content">
              <Col>
                <label htmlFor="jurusan">Pilihan jurusan mungkin butuh waktu untuk loading</label>
              </Col>
              <Row>
                <Col className="nopadding">
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
                      <option value="Himpunan Mahasiswa Elektroteknik"> HME (Himpunan Mahasiswa Elektroteknik) </option>
                      <option value="Himpunan Mahasiswa Farmasi"> HMF 'ARS PRAEPARANDI' (Himpunan Mahasiswa Farmasi) </option>
                      <option value="Himpunan Mahasiswa Fisika Teknik"> HMFT (Himpunan Mahasiswa Fisika Teknik) </option>
                      <option value="Himpunan Mahasiswa Rekayasa Kehutanan"> HMH 'SELVA' (Himpunan Mahasiswa Rekayasa Kehutanan) </option>
                      <option value="Himpunan Mahasiswa Informatika"> HMIF (Himpunan Mahasiswa Informatika) </option>
                      <option value="Himpunan Mahasiswa Kimia"> HMK 'AMISCA' (Himpunan Mahasiswa Kimia) </option>
                      <option value="Himpunan Mahasiswa Mesin"> HMM (Himpunan Mahasiswa Mesin) </option>
                      <option value="Himpunan Mahasiswa Meteorologi"> HMME 'ATMOSPHAIRA' (Himpunan Mahasiswa Meteorologi) </option>
                      <option value="Himpunan Mahasiswa Oseanografi"> HMO 'TRITON'(Himpunan Mahasiswa Oseanografi) </option>
                      <option value="Himpunan Mahasiswa Perencanaan Wilayah dan Kota Pangripta Loka"> HMP 'PANGRIPTA LOKA' (Himpunan Mahasiswa Perencanaan Wilayah dan Kota Pangripta Loka) </option>
                      <option value="Himpunan Mahasiswa Teknik Pangan"> HMPG (Himpunan Mahasiswa Teknik Pangan) </option>
                      <option value="Himpunan Mahasiswa Teknologi Pascapanen"> HMPP 'VADRA' ITB (Himpunan Mahasiswa Teknologi Pascapanen) </option>
                      <option value="Himpunan Mahasiswa Rekayasa Hayati"> HMRH  (Himpunan Mahasiswa Rekayasa Hayati) </option>
                      <option value="Himpunan Mahasiswa Sipil"> HMS (Himpunan Mahasiswa Sipil) </option>
                      <option value="Himpunan Mahasiswa Tambang"> HMT (Himpunan Mahasiswa Tambang) </option>
                      <option value="Himpunan Mahasiswa Teknik Bioenergi dan Kemurgi"> HMTB (Himpunan Mahasiswa Teknik Bioenergi dan Kemurgi) </option>
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
                      <option value="Visual Art Student Aggregate"> VASA (Visual Art Student Aggregate) </option>
                    </select>
                    <select className="form-select" id="pilihanJurusan" required {...register('jurusan')}>
                      <option disabled selected> Jurusan </option>
                      {jurusanOption}
                    </select>
                  </div>
                  {errors.himpunan && <p className="form-error">{errors.himpunan.message}</p>}
                  {errors.jurusan && <p className="form-error"> {errors.jurusan.message}</p>}
                </Col>
              </Row>
              <Row>
                <input placeholder="Nama Lengkap" type="text" className="form-input" required {...register('namalengkap')}/>
                {errors.namalengkap && <p className="form-error"> {errors.namalengkap.message}</p>}
              </Row>
              <Row>
                <div className="d-flex justify-content-between nopadding">
                  <input placeholder="Nama Panggilan"  type="text" className="form-input" required {...register('namapanggilan')}/>
                  <input placeholder="NIM" type="text" className="form-input" required {...register('nim')}/>
                </div>
                {errors.namapanggilan && <p className="form-error"> {errors.namapanggilan.message}</p>}
                {errors.nim && <p className="form-error">NIM tidak valid</p>}
              </Row>
              <Row>
                <input placeholder="Judul TA" type="text" className="form-input" required {...register('judulta')}/>
                {errors.judulta && <p className="form-error"> {errors.judulta.message}</p>}

              </Row>
              <Row>
                <input placeholder="Fun Fact" type="text" className="form-input" required {...register('funfact')}/>
                {errors.funfact && <p className="form-error"> {errors.funfact.message}</p>}
              </Row>
              <Row>
                <textarea placeholder="Tips sukses ala wisudawan" className="form-textarea" required {...register('tips')}></textarea>
                {errors.tips && <p className="form-error"> {errors.tips.message}</p>}
              </Row>
              <Row>
                <textarea placeholder="Kontribusi di HMJ (Jika ada lebih dari 1, pisahkan dengan koma). Jika tidak ada tuliskan '-'." className="form-textarea" {...register('kontribusi')}>
                </textarea>
                {errors.kontribusi && <p className="form-error"> {errors.kontribusi.message}</p>}
              </Row>
              <Row>
                <textarea placeholder="Prestasi (Jika ada lebih dari 1, pisahkan dengan koma). Jika tidak ada tuliskan '-'." className="form-textarea" {...register('prestasi')}>
                </textarea>
                {errors.prestasi && <p className="form-error"> {errors.prestasi.message}</p>}
              </Row>
              <Row>
                <textarea placeholder="Karya (Jika ada lebih dari 1, pisahkann dengan koma). Jika tidak ada tuliskan '-'." className="form-input" {...register('karya')}>
                </textarea>
                {errors.karya && <p className="form-error"> {errors.karya.message}</p>}
              </Row>
              <Row>
                <input placeholder="Email" type="email" className="form-input" required {...register('email')}/>
                {errors.email && <p className="form-error"> {errors.email.message}</p>}
              </Row>
              <Row>
                <textarea placeholder="Keterlibatan pada lembaga non-HMJ (Jika ada lebih dari 1, pisahkan dengan koma). Jika tidak ada tuliskan '-'." className="form-textarea" {...register('nonhmj')}>
                </textarea>
                {errors.nonhmj && <p className="form-error"> {errors.nonhmj.message}</p>}
              </Row>
              <Row>
                <input placeholder="Kota Asal" type="text" className="form-input" required {...register('kota')}/>
                {errors.kota && <p className="form-error"> {errors.kota.message}</p>}
              </Row>
              <Row>
                <label htmlFor="tangallahir">Tanggal lahir:</label>
                <input placeholder="Tanggal Lahir" type="date" className="form-input" required {...register('tanggallahir')}/>
              </Row>
              <Row>
                <select className="form-year form-input" required {...register('angkatan')}>
                  <option disabled selected> Angkatan </option>
                  <option value="2017"> 2017 </option>
                  <option value="2016"> 2016 </option>
                  <option value="2015"> 2015 </option>
                  <option value="2014"> 2014 </option>
                </select>
                {errors.angkatan && <p className="form-error"> {errors.angkatan.message}</p>}
              </Row>
              <Row>
                <label htmlFor="foto">Foto wisudawan (maksimal 5MB):</label>
                <input placeholder="foto" type="file" className="form-input" required {...register('foto')}/>
                {errors.foto && <p className="form-error"> {errors.foto.message}</p>}
              </Row>
            </div>
            <div className="d-flex justify-content-end">
              <button className="form-btn" type="submit">Submit</button>
            </div>
            <div className="d-flex justify-content-center">
              <div className="form-success"> Submit Success </div>
            </div>
          </form>
        </Row>
      </div>
    </div>
  );
}
