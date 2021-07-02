import { API_URL, ASSET_URL } from '../api';
import IKontenApresiasi from '../interfaces/IKontenApresiasi';

export const uploader = async (namaHimpunan: string, tipeApresiasi: string, konten: File | string): Promise<string> => {
  const linkKonten = `${ASSET_URL}/kontenApresiasi`;
  const fd = new FormData();
  fd.append('kontenApresiasi', konten);
  fd.append('namaHimpunan', namaHimpunan);
  fd.append('tipeApresiasi', tipeApresiasi);

  const req = {
    method: 'POST',
    headers: {
      'X-Content-Type-Options': 'nosniff',
    },
    body: fd,
  };

  const res =
    await (
      await fetch(`${API_URL}/kontenApresiasi/upload`, req)
        .catch(err => {
          throw new Error('Gagal mengupload konten apresiasi');
        })
    ).json();

  return `${linkKonten}/${res.filename}`;
};

export const getKontenApresiasi = async (namaHimpunan: string): Promise<IKontenApresiasi[]> => {
  try {
    const route = `${API_URL}/kontenApresiasi/get?namaHimpunan=${namaHimpunan}`;
    const res = await fetch(route);
    const data: IKontenApresiasi[] = await res.json();
    return data;
  } catch {
    throw new Error('Gagal membuat koneksi ke backend atau terjadi kesalahan pada backend.');
  }
};