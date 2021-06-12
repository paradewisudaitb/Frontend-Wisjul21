import { UseFormRegister, DeepMap, FieldError } from 'react-hook-form';

export default (
  register: UseFormRegister<Record<string, any>>,
  errors: DeepMap<Record<string,any>, FieldError>
) => {
  <div className="d-flex justify-content-between">
    <select className="form-select" {...register('himpunan')}>
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
      <option value="Himpunan Mahasiswa Planologi"> HMP 'PANGRIPTA LOKA' (Himpunan Mahasiswa Planologi) </option>
      <option value="Himpunan Mahasiswa Teknik Pangan"> HMPG (Himpunan Mahasiswa Teknik Pangan) </option>
      <option value="Himpunan Mahasiswa Teknologi Pascapanen 'VADRA' ITB"> HMPP 'VADRA' ITB (Himpunan Mahasiswa Teknologi Pascapanen 'VADRA' ITB) </option>
      <option value="Himpunan Mahasiswa Rekayasa Hayati"> HMRH  (Himpunan Mahasiswa Rekayasa Hayati) </option>
      <option value="Himpunan Mahasiswa Sipil"> HMS (Himpunan Mahasiswa Sipil) </option>
      <option value="Himpunan Mahasiswa Tambang"> HMT (Himpunan Mahasiswa Tambang) </option>
      <option value="Himpunan Mahasiswa Teknik Bioenergi"> HMTB (Himpunan Mahasiswa Teknik Bioenergi) </option>
      <option value="Himpunan Mahasiswa Teknik Geologi"> HMTG 'GEA' (Himpunan Mahasiswa Teknik Geologi) </option>
      <option value="Himpunan Mahasiswa Teknik Lingkungan"> HMTL (Himpunan Mahasiswa Teknik Lingkungan) </option>
      <option value="Himpunan Mahasiswa Teknik Perminyakan"> HMTM 'PATRA' (Himpunan Mahasiswa Teknik Perminyakan) </option>
      <option value="Ikatan Mahasiswa Arsitektur Gunadharma"> IMA-G (Ikatan Mahasiswa Arsitektur Gunadharma) </option>
      <option value="Ikatan Mahasiswa Desain Interior"> IMDI (Ikatan Mahasiswa Desain Interior) </option>
      <option value="Ikatan Mahasiswa Geodesi"> IMG (Ikatan Mahasiswa Geodesi) </option>
      <option value="Ikatan Mahasiswa Teknik Metalurgi"> IMMG (Ikatan Mahasiswa Teknik Metalurgi) </option>
      <option value="Ikatan Mahasiswa Telekomunikasi"> IMT (Ikatan Mahasiswa Telekomunikasi) </option>
      <option value="Keluarga Mahasiswa Desain Produk"> INDDES (Keluarga Mahasiswa Desain Produk) </option>
      <option value="Ikatan Pemuda Pemudi Desain Grafis"> IPPDIG (Ikatan Pemuda Pemudi Desain Grafis) </option>
      <option value="Keluarga Mahasiswa Infrastruktur Lingkungan"> KMIL (Keluarga Mahasiswa Infrastruktur Lingkungan) </option>
      <option value="Keluarga Mahasiswa Teknik Kelautan"> KMKL (Keluarga Mahasiswa Teknik Kelautan) </option>
      <option value="Keluarga Mahasiswa Manajemen"> KMM (Keluarga Mahasiswa Manajemen) </option>
      <option value="Keluarga Mahasiswa Teknik Penerbangan"> KMPN 'OTTO LILIENTHAL' (Keluarga Mahasiswa Teknik Penerbangan) </option>
      <option value="Keluarga Mahasiswa Sekolah Bisnis dan Manajemen"> KMSBM (Keluarga Mahasiswa Sekolah Bisnis dan Manajemen) </option>
      <option value="Keluarga Mahasiswa Teknik Industri"> MTI (Keluarga Mahasiswa Teknik Industri) </option>
      <option value="Himpunan Mahasiswa Teknik Material"> MTM (Himpunan Mahasiswa Teknik Material) </option>
      <option value="Himpunan Mahasiswa Biologi"> NYMPHAEA (Himpunan Mahasiswa Biologi) </option>
      <option value="Himpunan Mahasiswa Kriya"> TERIKAT (Himpunan Mahasiswa Kriya) </option>
      <option value="Visual Art Student Aggregate"> VASA (Visual Art Student Aggregate) / (Seni Rupa) </option>
    </select>
    <select className="form-select" id="pilihanJurusan" {...register('jurusan')}>
      <option disabled selected> Jurusan </option>
    </select>
    {errors.himpunan && <p className="form-error">{errors.himpunan.message}</p>}
    {errors.jurusan && <p className="form-error"> {errors.jurusan.message}</p>}
  </div>;
};