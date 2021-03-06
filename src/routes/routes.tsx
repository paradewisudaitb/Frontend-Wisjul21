import EventPage from '../pages/Event/EventPage';
import HomePage from '../pages/HomePage/HomePage';
import ComingSoon from '../pages/ComingSoon/ComingSoon';
import Majalah from '../pages/Majalah/Majalah';
import GaleriApresiasi from '../pages/GaleriApresiasi/GaleriApresiasi';
import { KirimPesanPage } from '../pages/KirimPesan/KirimPesanPage';
import Wisudawan from '../pages/Wisudawan/Wisudawan';
import Gathertown from '../pages/Gathertown/Gathertown';
import { Minigame } from '../pages/Minigame/Minigame';
import PuzzlePage from '../pages/Minigame/PuzzlePage';
import GaleriHmj from '../pages/GaleriHmj/GaleriHmj';
import NotFound from '../pages/NotFound/NotFound';
import FinishStage from '../component/FinishStage/FinishStage';
        
export type route = {
  label: string
  path: string
  component?: () => JSX.Element
}

type navroutes = {
  content:route,
  children_routes?: route[],
  isDropdown?: boolean,
  parentPath?: string,
}

export const toRoute = (label:string, path:string, component?:(props?: any) => JSX.Element): route => ({
  label, path, component
});

export const COMINGSOON_PAGE = toRoute('Coming Soon', '/coming-soon', ComingSoon);

export const HOME_PAGE = toRoute('Home', '/', HomePage);

export const GALERI_HMJ_PAGE = toRoute('Wisudawan & Apresiasi', '/hmj', GaleriHmj);
export const GALERI_APRESIASI_PAGE = toRoute('Wisudawan dan Apresiasi', '/hmj/:hmj', GaleriApresiasi);
export const WISUDAWAN_PAGE = toRoute('Wisudawan', '/hmj/:hmj/:nim', Wisudawan);
export const KIRIM_PESAN_PAGE = toRoute('Kirim Pesan', '/hmj/:hmj/:nim/kirim-pesan', KirimPesanPage);

export const MINIGAME_PAGE = toRoute('Puzzle Metamorfosis', '/minigame', Minigame);
export const PUZZLE_PAGE = toRoute('Puzzle Metamorfosis', '/minigame/:stage', PuzzlePage);
export const FINISHSTAGE_PAGE = toRoute('Puzzle Metamorfosis', '/minigame/:stage/finish', FinishStage);

export const PRODUK_INDEX = toRoute('Produk', '/produk');
export const GATHERTOWN_PAGE = toRoute('Treasure Games', '/treasuregames', Gathertown);
export const MAJALAH_PAGE = toRoute('Majalah Metamorfosis', '/majalah', Majalah);
export const EVENT_PAGE = toRoute('Event', '/event', EventPage);
export const NOTFOUND_PAGE = toRoute('Not Found', '/:rest*', NotFound);

export const NavbarRoutes: navroutes[] = [
  {
    content: HOME_PAGE,
  },
  {
    content: EVENT_PAGE,
  },
  {
    content: PRODUK_INDEX,
    children_routes: [GATHERTOWN_PAGE, MAJALAH_PAGE, MINIGAME_PAGE],
    isDropdown: true,
    parentPath: '',
  },
  {
    content: GALERI_HMJ_PAGE,
  },
];

export const AllRoutes = [
  HOME_PAGE,
  EVENT_PAGE,
  GALERI_HMJ_PAGE,
  GALERI_APRESIASI_PAGE,
  KIRIM_PESAN_PAGE,
  WISUDAWAN_PAGE,
  MAJALAH_PAGE,
  GATHERTOWN_PAGE,

  MINIGAME_PAGE,
  PUZZLE_PAGE,
  FINISHSTAGE_PAGE,

  NOTFOUND_PAGE,
];