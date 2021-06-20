import { API_URL } from '../api';

/**
 * Fungsi yang untuk mendapatkan semua jurusan yang dimiliki suatu himpunan.
 * Jika tidak diberikan argumen namaHimpunan maka mendapatkan semua jurusan di ITB.
 * @param {string} namaHimpunan nama himpunan pemilik jurusan (jika ada)
 * @returns {string[]} list seluruh jurusan suatu himpunan, jika tidak ada namaHimpunan, maka semua jurusan di ITB
 * @async
 */
export const get = async (namaHimpunan?: string): Promise<string[]> => {
  const req = {
    method: 'GET',
    headers: {
      'X-Content-Type-Options': 'nosniff',
    },
  };

  if (!namaHimpunan) {
    const res =
      await (
        await fetch(`${API_URL}/jurusan/getAll`, req)
          .catch(err => {
            // console.error(err);
            throw new Error('Gagal membuat request mendapatkan jurusan ke backend.');
          })
      ).json();
    return res.jurusan;
  } else {
    const res =
        await (
          await fetch(`${API_URL}/jurusan/get?nama=${namaHimpunan}`, req)
            .catch(err => {
              // console.error(err);
              throw new Error('Gagal membuat request mendapatkan jurusan ke backend.');
            })
        ).json();
    return res.jurusan;
  }
};