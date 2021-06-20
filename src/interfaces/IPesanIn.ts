/**
 * Interface/struktur data untuk (metadata) pesan yang masuk
 */
export default interface IPesanIn {
  idPesan: string;
  nim: string;
  namaPengirim: string;
  pesan: string;
};