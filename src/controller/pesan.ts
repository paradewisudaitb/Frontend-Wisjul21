import { API_URL } from '../api';
import IPesanIn from '../interfaces/IPesanIn';
import IPesanOut from '../interfaces/IPesanOut';

type PesanResp = {
  penerima: string,
  isi: string,
  pengirim: string,
};

export const sendPesan = async (data: IPesanOut): Promise<PesanResp> => {
  const req = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Content-Type-Options': 'nosniff',
    },
    body: JSON.stringify(data),
  };

  const res: PesanResp =
    await (
      await fetch(`${API_URL}/pesan/new`, req)
        .catch(() => {
          throw new Error('Gagal membuat pesan untuk wisudawan baru.');
        })
    ).json();

  return res;
};

export const getPesan = async (nim: string): Promise<IPesanIn[]> => {
  const req = {
    method: 'GET',
    headers: {
      'X-Content-Type-Options': 'nosniff',
    },
  };

  const res: IPesanIn[] =
    await (
      await fetch(`${API_URL}/pesan/get?nim=${nim}`, req)
        .catch(() => {
          throw new Error(`Gagal mendapatkan pesan untuk wisudawan ${nim}.`);
        })
    ).json();

  return res;
};