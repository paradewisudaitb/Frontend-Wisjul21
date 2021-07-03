import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.scss';
import { Row, Col } from 'react-bootstrap';
import IDataWisudawan from '../../interfaces/IDataWisudawan';
import * as WC from '../../controller/wisudawan';
import * as JC from '../../controller/jurusan';

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
  'nim': yup.string().matches(/^\d{3}(14|15|16|17|18)\d{3}$/).required('NIM tidak boleh kosong.'),
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

const errMsg = 'Ada kesalahan pada data. Jika data sudah benar dan masih gagal atau ingin melakukan perubahan data, harap hubungi panitia (LINE: otong1403, lexax).';
export default function Form(): JSX.Element {
  const { register, watch, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = async (data: any) => {
    window.alert('Data dan foto sedang diupload, harap menunggu sampai pesan berhasil upload keluar.');
    const status = document.querySelector('.form-status');
    const tombol = document.querySelector('.form-btn');

    if (tombol) {
      tombol.setAttribute('style', 'visibility: hidden;');
    }
    if (status) {
      status.innerHTML = 'Data sedang ditambahkan...';
      status.setAttribute('style', 'visibility: visible;');
    }

    try {
      await WC.getByNIM(data.nim);
      window.alert(`NIM ${data.nim} sudah terdaftar di database.`);
      if (tombol)
        tombol.setAttribute('style', 'visibility: visible;');
      if (status) {
        status.innerHTML = `NIM ${data.nim} sudah terdaftar di database.`;
        status.setAttribute('style', 'visibility: visible; background-color: red;');
        status.setAttribute('visibility', 'visibility: visible;');
      }
      return;
    } catch (_) {
      // ga perlu ngapa-ngapain
    }

    const linkFoto = await WC.uploaderFoto(data.foto[0]).catch(() => {
      window.alert('Gagal mengupload foto.');
      if (tombol)
        tombol.setAttribute('style', 'visibility: hidden;');
    });
    if (!linkFoto) return;

    // isi data
    const req: IDataWisudawan = {
      nim: data.nim,
      namaHimpunan: data.himpunan,
      namaJurusan: data.jurusan,
      namaLengkap: data.namalengkap,
      namaPanggilan: data.namapanggilan,
      judulTA: data.judulta,
      funFact: data.funfact,
      tipsSukses: data.tips,
      email: data.email,
      kotaAsal: data.kota,
      tanggalLahir: data.tanggallahir,
      angkatan: data.angkatan,
      pasfoto: linkFoto,
      nonhim: data.himpunan == 'nonhim',
      lembaga: data.nonhmj.split('\n').map((e: string) => e.trim()),
      kontribusi: data.kontribusi.split('\n').map((e: string) => e.trim()),
      prestasi: data.prestasi.split('\n').map((e: string) => e.trim()),
      karya: data.karya.split('\n').map((e: string) => e.trim()),
    };

    WC.creator(req)
      .then(res => {
        window.alert(`Penambahan data wisudawan ${res.nim} (${res.nama}) berhasil.`);
        if (status) {
          status?.setAttribute('style', 'visibility: visible; background-color: #4aa96c;');
          status.innerHTML = 'Data berhasil disubmit';
        }
      })
      .catch(() => {
        window.alert(errMsg);
        if (status) {
          status.setAttribute('style', 'visibility: visible; background-color: red;');
          status.innerHTML = 'Terjadi kesalahan ketika menambahkan data. Harap segera hubungi panitia.';
        }

        if (tombol) {
          tombol.setAttribute('style', 'visibility: visible;');
        }
      });
  };

  const watchHimpunan = watch('himpunan');

  const [jurusanOption, setJurusanOption] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (watchHimpunan) {

      if (watchHimpunan == 'nonhim') {
        JC.get()
          .then(res => {
            setJurusanOption(res.map((e: string) =>
              <option className="form-select-option" key={e} value={e}>{e}</option>
            ));
          });
      } else {
        JC.get(watchHimpunan)
          .then(res => {
            setJurusanOption(res.map((e: string) =>
              <option className="form-select-option" key={e} value={e}>{e}</option>
            ));
          });
      }
    }
  }, [watchHimpunan]);

  // const warnMany = <span className="form-warn">* Jika ada lebih dari 1 prestasi, karya, kontribusi, atau lembaga non-HMJ, pisahkan dengan baris baru (enter).</span>;
  const warnManyInline = <span className="form-warn">Jika ada lebih dari 1, pisahkan dengan enter (baris baru); boleh kosong</span>;

  const enabled = true;

  return ( enabled ? (
    <div className="form-page">
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit(submitForm)}>
          <h1 className="form-title"> Database Wisudawan Wisuda Juli ITB 2021 </h1>
          <div className="form-content">
            <Row>
              <label htmlFor="jurusan">Pilihan jurusan mungkin butuh waktu untuk loading</label>
            </Row>
            <Row>
              <Col className="form-nopadding">
                <div className="d-flex justify-content-between">
                  <select className="form-select form-field" required {...register('himpunan')}>
                    <option className="form-select-name" disabled selected> Himpunan </option>
                    <option className="form-select-option" value="nonhim"> Non-himpunan </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Fisika"> HIMAFI (Himpunan Mahasiswa Fisika) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Mikrobiologi"> HIMAMIKRO 'ARCHAEA' (Himpunan Mahasiswa Mikrobiologi) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Rekayasa Pertanian"> HIMAREKTA 'AGRAPANA' (Himpunan Mahasiswa Rekayasa Pertanian) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Sumber Daya Air"> HIMASDA (Himpunan Mahasiswa Sumber Daya Air) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Astronomi"> HIMASTRON (Himpunan Mahasiswa Astronomi) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Teknik Kimia"> HIMATEK (Himpunan Mahasiswa Teknik Kimia) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Teknik Geofisika"> HIMATG 'TERRA' (Himpunan Mahasiswa Teknik Geofisika) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Matematika"> HIMATIKA (Himpunan Mahasiswa Matematika) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Elektroteknik"> HME (Himpunan Mahasiswa Elektroteknik) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Farmasi"> HMF 'ARS PRAEPARANDI' (Himpunan Mahasiswa Farmasi) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Fisika Teknik"> HMFT (Himpunan Mahasiswa Fisika Teknik) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Rekayasa Kehutanan"> HMH 'SELVA' (Himpunan Mahasiswa Rekayasa Kehutanan) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Informatika"> HMIF (Himpunan Mahasiswa Informatika) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Kimia"> HMK 'AMISCA' (Himpunan Mahasiswa Kimia) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Mesin"> HMM (Himpunan Mahasiswa Mesin) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Meteorologi"> HMME 'ATMOSPHAIRA' (Himpunan Mahasiswa Meteorologi) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Oseanografi"> HMO 'TRITON'(Himpunan Mahasiswa Oseanografi) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Perencanaan Wilayah dan Kota Pangripta Loka"> HMP 'PANGRIPTA LOKA' (Himpunan Mahasiswa Perencanaan Wilayah dan Kota Pangripta Loka) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Teknik Pangan"> HMPG (Himpunan Mahasiswa Teknik Pangan) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Teknologi Pascapanen"> HMPP 'VADRA' ITB (Himpunan Mahasiswa Teknologi Pascapanen) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Rekayasa Hayati"> HMRH  (Himpunan Mahasiswa Rekayasa Hayati) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Sipil"> HMS (Himpunan Mahasiswa Sipil) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Tambang"> HMT (Himpunan Mahasiswa Tambang) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Teknik Bioenergi dan Kemurgi"> HMTB (Himpunan Mahasiswa Teknik Bioenergi dan Kemurgi) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Teknik Geologi"> HMTG 'GEA' (Himpunan Mahasiswa Teknik Geologi) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Teknik Lingkungan"> HMTL (Himpunan Mahasiswa Teknik Lingkungan) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Teknik Perminyakan"> HMTM 'PATRA' (Himpunan Mahasiswa Teknik Perminyakan) </option>
                    <option className="form-select-option" value="Ikatan Mahasiswa Arsitektur Gunadharma"> IMA-G (Ikatan Mahasiswa Arsitektur Gunadharma) </option>
                    <option className="form-select-option" value="Ikatan Mahasiswa Desain Interior"> IMDI (Ikatan Mahasiswa Desain Interior) </option>
                    <option className="form-select-option" value="Ikatan Mahasiswa Geodesi"> IMG (Ikatan Mahasiswa Geodesi) </option>
                    <option className="form-select-option" value="Ikatan Mahasiswa Kewirausahaan"> IMK (Ikatan Mahasiswa Kewirausahaan) </option>
                    <option className="form-select-option" value="Ikatan Mahasiswa Teknik Metalurgi"> IMMG (Ikatan Mahasiswa Teknik Metalurgi) </option>
                    <option className="form-select-option" value="Ikatan Mahasiswa Telekomunikasi"> IMT (Ikatan Mahasiswa Telekomunikasi) </option>
                    <option className="form-select-option" value="Keluarga Mahasiswa Desain Produk"> INDDES (Keluarga Mahasiswa Desain Produk) </option>
                    <option className="form-select-option" value="Ikatan Pemuda Pemudi Desain Grafis"> IPPDIG (Ikatan Pemuda Pemudi Desain Grafis) </option>
                    <option className="form-select-option" value="Keluarga Mahasiswa Infrastruktur Lingkungan"> KMIL (Keluarga Mahasiswa Infrastruktur Lingkungan) </option>
                    <option className="form-select-option" value="Keluarga Mahasiswa Teknik Kelautan"> KMKL (Keluarga Mahasiswa Teknik Kelautan) </option>
                    <option className="form-select-option" value="Keluarga Mahasiswa Manajemen"> KMM (Keluarga Mahasiswa Manajemen) </option>
                    <option className="form-select-option" value="Keluarga Mahasiswa Teknik Penerbangan"> KMPN 'OTTO LILIENTHAL' (Keluarga Mahasiswa Teknik Penerbangan) </option>
                    <option className="form-select-option" value="Keluarga Mahasiswa Teknik Industri"> MTI (Keluarga Mahasiswa Teknik Industri) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Teknik Material"> MTM (Himpunan Mahasiswa Teknik Material) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Biologi"> NYMPHAEA (Himpunan Mahasiswa Biologi) </option>
                    <option className="form-select-option" value="Himpunan Mahasiswa Kriya"> TERIKAT (Himpunan Mahasiswa Kriya) </option>
                    <option className="form-select-option" value="Visual Art Student Aggregate"> VASA (Visual Art Student Aggregate) </option>
                  </select>
                  <select className="form-select form-field" id="pilihanJurusan" required {...register('jurusan')}>
                    <option className="form-select-name" disabled selected> Jurusan </option>
                    {jurusanOption}
                  </select>
                </div>
                {errors.himpunan && <p className="form-error">{errors.himpunan.message}</p>}
                {errors.jurusan && <p className="form-error"> {errors.jurusan.message}</p>}
              </Col>
            </Row>
            <Row>
              <label htmlFor="nim">NIM</label>
              <input placeholder="NIM" type="text" className="form-input form-field" required {...register('nim')}/>
              {errors.nim && <p className="form-error">NIM tidak valid</p>}
            </Row>
            <Row>
              <label htmlFor="namalengkap">Nama lengkap</label>
              <input placeholder="Nama Lengkap" type="text" className="form-input form-field" required {...register('namalengkap')}/>
              {errors.namalengkap && <p className="form-error"> {errors.namalengkap.message}</p>}
            </Row>
            <Row>
              <label htmlFor="namapanggilan">Nama panggilan</label>
              <input placeholder="Nama Panggilan"  type="text" className="form-input form-field" required {...register('namapanggilan')}/>
              {errors.namapanggilan && <p className="form-error"> {errors.namapanggilan.message}</p>}
            </Row>
            <Row>
              <label htmlFor="email">Email</label>
              <input placeholder="Email" type="email" className="form-input form-field" required {...register('email')}/>
              {errors.email && <p className="form-error"> {errors.email.message}</p>}
            </Row>
            <Row>
              <label htmlFor="judulta">Judul tugas akhir</label>
              <input placeholder="Judul TA" type="text" className="form-input form-field" required {...register('judulta')}/>
              {errors.judulta && <p className="form-error"> {errors.judulta.message}</p>}

            </Row>
            <Row>
              <label htmlFor="funfact">Fun fact</label>
              <input placeholder="Fun fact" type="text" className="form-input form-field" required {...register('funfact')}/>
              {errors.funfact && <p className="form-error"> {errors.funfact.message}</p>}
            </Row>
            <Row>
              <label htmlFor="tips">Tips sukses à la wisudawan</label>
              <input type="text" placeholder="Tips sukses à la wisudawan" className="form-input form-field" required {...register('tips')}/>
              {errors.tips && <p className="form-error"> {errors.tips.message}</p>}
            </Row>
            <Row>
              <label htmlFor="kontribusi">Kontribusi di HMJ</label>
              {warnManyInline}
              <textarea placeholder="Kontribusi di HMJ" className="form-textarea form-field" {...register('kontribusi')}>
              </textarea>
              {errors.kontribusi && <p className="form-error"> {errors.kontribusi.message}</p>}
            </Row>
            <Row>
              <label htmlFor="prestasi">Prestasi</label>
              {warnManyInline}
              <textarea placeholder="Prestasi" className="form-textarea form-field" {...register('prestasi')}>
              </textarea>
              {errors.prestasi && <p className="form-error"> {errors.prestasi.message}</p>}
            </Row>
            <Row>
              <label htmlFor="karya">Karya</label>
              {warnManyInline}
              <textarea placeholder="Karya" className="form-textarea form-field" {...register('karya')}>
              </textarea>
              {errors.karya && <p className="form-error form-field"> {errors.karya.message}</p>}
            </Row>
            <Row>
              <label htmlFor="nonhmj">Keterlibatan pada lembaga Non-HMJ</label>
              {warnManyInline}
              <textarea placeholder="Keterlibatan pada lembaga non-HMJ" className="form-textarea form-field" {...register('nonhmj')}>
              </textarea>
              {errors.nonhmj && <p className="form-error"> {errors.nonhmj.message}</p>}
            </Row>
            <Row>
              <label htmlFor="kota">Kota Asal</label>
              <input placeholder="Kota Asal" type="text" className="form-input form-field" required {...register('kota')}/>
              {errors.kota && <p className="form-error"> {errors.kota.message}</p>}
            </Row>
            <Row>
              <label htmlFor="tangallahir">Tanggal lahir:</label>
              <input placeholder="Tanggal Lahir" type="date" className="form-input form-field" required {...register('tanggallahir')}/>
            </Row>
            <Row>
              <label htmlFor="angkatan">Angkatan</label>
              <select className="form-select form-field" required {...register('angkatan')}>
                <option className="form-select-name" disabled selected> Angkatan </option>
                <option className="form-select-option" value="2018"> 2018 </option>
                <option className="form-select-option" value="2017"> 2017 </option>
                <option className="form-select-option" value="2016"> 2016 </option>
                <option className="form-select-option" value="2015"> 2015 </option>
                <option className="form-select-option" value="2014"> 2014 </option>
              </select>
              {errors.angkatan && <p className="form-error"> {errors.angkatan.message}</p>}
            </Row>
            <Row>
              <label htmlFor="foto">Pas Foto wisudawan (maksimal 5MB):</label>
              <input placeholder="foto" type="file" className="form-input" required {...register('foto')}/>
              {errors.foto && <p className="form-error"> {errors.foto.message}</p>}
            </Row>
          </div>
          <Row>
            <div className="d-flex justify-content-center">
              <div className="form-status"> Data sedang ditambahkan... </div>
            </div>
            <div className="d-flex justify-content-end">
              <button className="form-btn" type="submit">Submit</button>
            </div>
          </Row>
          <div className="d-flex justify-content-center">
            Contact person:
            <ul>
              <li>
                Josep, LINE: otong1403
              </li>
              <li>
                Axel, LINE: lexax
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <div className="form-page form-disabled">
      <h1>
        Sedang tidak menerima pengisian form wisudawan
      </h1>
    </div>
  ));
}
