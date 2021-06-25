import { API_URL, ASSET_URL } from '../api';

const uploader = async (namaHimpunan: string, tipeApresiasi: string, konten: File | string): Promise<string> => {
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
      await fetch(`${API_URL}/kontenApresiasi/upload`)
        .catch(err => {
          throw new Error('Gagal mengupload konten apresiasi');
        })
    ).json();

    return `${linkKonten}/${res.filename}`;
};