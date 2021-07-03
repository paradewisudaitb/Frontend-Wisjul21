type tipeApresiasi =
  |'poster'
  |'website'
  |'video'
  |'lagu'
  |'puisi'
  |'lainnya';

interface IKontenApresiasi {
  idApresiasi: number;
  idHimpunan: number;
  linkKonten: string;
  linkThumbnail: string;
  tipeKonten: tipeApresiasi;
}

export default IKontenApresiasi;