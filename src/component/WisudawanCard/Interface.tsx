export interface ListUnit {
  logoUnit: string,
  namaUnit: string,
};

export interface DataWisudawan {
  nama: string,
  nim: string,
  jurusan: string,
  foto: string,
  judulTA: string,
  listUnit: ListUnit[]
};

export interface Apresiasi {
  tipeKontenApresiasi: string,
  linkKeKonten: string
};

export interface ListHimpunan {
  himpunan: string,
  apresiasi: Apresiasi[],
  wisudawan: DataWisudawan[]
};