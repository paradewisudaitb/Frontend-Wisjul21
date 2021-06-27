
import HomePage from '../pages/HomePage/HomePage';
import ComingSoon from '../pages/ComingSoon/ComingSoon';
import Majalah from '../pages/Majalah/Majalah';
import Form from '../pages/Form/Form';
import FormApresiasi from '../pages/FormApresiasi/FormApresiasi';
import GaleriApresiasi from '../pages/GaleriApresiasi/GaleriApresiasi';
import { KirimPesanPage } from '../pages/KirimPesan/KirimPesanPage';
import Wisudawan from '../pages/Wisudawan/Wisudawan';
import Gathertown from '../pages/Gathertown/Gathertown';
import GaleriHmj from '../pages/GaleriHmj/GaleriHmj';

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

export const toRoute = (label:string, path:string, component?:(props?: any | any[]) => JSX.Element): route => ({
  label, path, component
});

export const COMINGSOON_PAGE = toRoute('Coming Soon', '/coming-soon', ComingSoon);

export const HOME_PAGE = toRoute('Home', '/', HomePage);

export const MAJALAH_PAGE = toRoute('Majalah', '/majalah', Majalah);

export const GALERI_HMJ_PAGE = toRoute('Galeri HMJ', '/hmj', GaleriHmj);
export const GALERI_APRESIASI_PAGE = toRoute('Galeri Apresiasi', '/hmj/:hmj', GaleriApresiasi);
export const WISUDAWAN_PAGE = toRoute('Wisudawan', '/hmj/:hmj/:nim', Wisudawan);
export const KIRIM_PESAN_PAGE = toRoute('Kirim Pesan', '/hmj/:hmj/:nim/kirim-pesan', KirimPesanPage);

export const GATHERTOWN_PAGE = toRoute('Gather Town', '/gathertown', Gathertown);

export const FORM_PAGE = toRoute('Form', '/form', Form);
export const FORM_APRESIASI_PAGE = toRoute('Form Apresiasi', '/form-apresiasi', FormApresiasi);

export const FORM_INDEX = toRoute('Forms', 'forms');

export const NavbarRoutes: navroutes[] = [
  {
    content: MAJALAH_PAGE,
  },
  {
    content: GALERI_HMJ_PAGE,
  },
  {
    content: FORM_INDEX,
    children_routes: [FORM_PAGE, FORM_APRESIASI_PAGE],
    isDropdown: true,
    parentPath: '',
  }
];

export const AllRoutes = [
  HOME_PAGE,
  MAJALAH_PAGE,
  GALERI_APRESIASI_PAGE,
  KIRIM_PESAN_PAGE,
  WISUDAWAN_PAGE,
  GATHERTOWN_PAGE,
  FORM_APRESIASI_PAGE,
  FORM_PAGE,
  GALERI_HMJ_PAGE,
];