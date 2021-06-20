import IDataWisudawan from '../interfaces/IDataWisudawan';
import { ASSET_URL, API_URL } from '../api';

type WisudawnIdty = {
  nim: string;
  nama: string;
}

/**
 * Fungsi untuk menabmahkan seorang wisudawan ke database
 * @param {IDataWisudawan} data Data-data wisudawan
 * @returns { {nim: string, nama: string} } NIM dan nama wisudawan dalam bentuk JS object
 * @throws Kalau penambahan data gagal atau NIM sudah terdaftar
 * @async
 */
export const creator = async (data: IDataWisudawan): Promise<WisudawnIdty> => {
  try {
    await getByNIM(data.nim);
    // kalau belum terdaftar, harusnnya error
    throw new Error(`NIM ${data.nim} sudah terdaftar di database.`);
  } catch (_) {
    // ga perlu ngapa-ngapain
  }

  const dataToSend = {
    nim: data.nim,
    jurusan: data.namaJurusan,
    namaLengkap: data.namaLengkap,
    namaPanggilan: data.namaPanggilan,
    linkPasFoto: data.pasfoto,
    judulTA: data.judulTA,
    funFact: data.funFact,
    tipsSukses: data.tipsSukses,
    email: data.email,
    kotaAsal: data.kotaAsal,
    tanggalLahir: data.tanggalLahir,
    angkatan: data.angkatan,
    nonhim: data.nonhim,
    prestasi: data.prestasi?.join(',') || '-',
    karya: data.karya?.join(',') || '-',
    kontribusi: data.kontribusi?.join(',') || '-',
    lembaga: data.lembaga?.join(',') || '-',
  };

  const req = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Content-Type-Options': 'nosniff',
    },
    body: JSON.stringify(dataToSend),
  };

  const res: WisudawnIdty =
    await (
      await fetch(`${API_URL}/form/create`, req)
        .catch(err => {
          // console.error(err);
          throw new Error('Gagal menambahkan data baru wisudawan.');
        })
    ).json();

  return res;
};

/**
 * Fungsi untuk mengupload foto wisudawan ke database
 * @param {File} foto Foto wisudawan yang akan diunggah
 * @returns {string} link lengkap ke foto
 * @throws {Error} jika upload gagal
 * @async
 */
export const uploaderFoto = async (foto: File): Promise<string> => {
  const linkFoto = `${ASSET_URL}/fotoWisudawan`;
  const fd = new FormData();
  fd.append('foto', foto);

  const req = {
    method: 'POST',
    headers: {
      'X-Content-Type-Options': 'nosniff',
    },
    body: fd,
  };

  const res =
  await (
    await fetch(`${API_URL}/form/uploadFoto`, req)
      .catch(err => {
        // console.error(err);
        throw new Error('Gagal mengupload foto.');
      })
  ).json();

  return `${linkFoto}/${res.filename}`;
};

/**
 * Fungsi untuk mendapatkan data wisudawan berdasarkan NIM-nya
 * @param {string} nim NIM wisudawan
 * @returns {IDataWisudawan} data wisudawan dengan NIM `nim`
 * @throws {Error} jika NIM tidak valid
 * @async
 */
export const getByNIM = async (nim: string): Promise<IDataWisudawan> => {
  const res: IDataWisudawan[] =
    await (
      await fetch(`${API_URL}/wisudawan/get?nim=${nim}`)
        .catch(err => {
          // console.error(err);
          throw new Error('Gagal membuat koneksi ke backend atau terjadi kesalahan pada backend.');
        })
    ).json();

  if (res.length == 0) {
    throw new Error(`Tidak ada wisudawan dengan NIM ${nim}.`);
  }

  return res[0];
};