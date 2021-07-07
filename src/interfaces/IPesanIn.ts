/**
 * Interface/struktur data untuk (metadata) pesan yang masuk
 */
interface IPesanIn {
  idPesan: string;
  nim: string;
  namaPengirim: string;
  pesan: string;
  createdAt: string;
}

export default IPesanIn;