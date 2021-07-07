import Filter from 'bad-words';
import KataKasar from '../data/kasar.json';

const filter = new Filter({ list: KataKasar });
// grawlix = '❤❤❤';

const sensor = (kalimat?: string): string | undefined => {
  if (kalimat) {
    return filter.clean(kalimat);
  }

  return undefined;
};

export default sensor;