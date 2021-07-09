interface IDataWisudawan {
  nim: string;
  namaJurusan: string;
  namaHimpunan: string;
  namaLengkap: string;
  namaPanggilan: string;
  email: string;
  angkatan: number;
  tipsSukses: string;
  kotaAsal: string;
  tanggalLahir: Date;
  judulTA: string;
  funFact: string;
  pasfoto: string;
  nonhim: boolean;
  showAtWeb: boolean;
  karya: string[];
  kontribusi: string[];
  lembaga: string[];
  prestasi: string[];
}

export default IDataWisudawan;