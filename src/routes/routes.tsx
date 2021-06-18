import EventPage from '../pages/Event/EventPage';
import Majalah from '../pages/Majalah/Majalah';
import HomePage from '../pages/HomePage/HomePage';
import Form from '../pages/Form/Form';
import FormApresiasi from '../pages/FormApresiasi/FormApresiasi';
import GaleriApresiasi from '../pages/GaleriApresiasi/GaleriApresiasi';
import { KirimPesanPage } from '../pages/KirimPesan/KirimPesanPage';
import Wisudawan from '../pages/Wisudawan/Wisudawan';

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

export const toRoute = (label:string, path:string, component?:() => JSX.Element): route => ({
  label, path, component
});

export const HOME_PAGE = toRoute('Home', '', HomePage);
export const EVENT_PAGE = toRoute('Events', '', EventPage);
export const MAJALAH_PAGE = toRoute('Majalah', '/majalah', Majalah);
export const GALERI_APRESIASI_PAGE = toRoute('Galeri Apresiasi', '/galeri-apresiasi', GaleriApresiasi);
export const FORM_PAGE = toRoute('Form', 'form/', Form);
export const FORM_APRESIASI_PAGE = toRoute('Form Apresiasi', 'form-apresiasi/', FormApresiasi);
export const KIRIM_PESAN_PAGE = toRoute('Kirim Pesan', '/kirim-pesan', KirimPesanPage);
export const WISUDAWAN_PAGE = toRoute('Wisudawan', '/wisudawan', Wisudawan);

export const FORM_INDEX = toRoute('Forms', '/forms');

export const NavbarRoutes: navroutes[] = [
  {
    content: MAJALAH_PAGE,
  },
  {
    content: GALERI_APRESIASI_PAGE,
  },
  {
    content: KIRIM_PESAN_PAGE,
  },
  {
    content: WISUDAWAN_PAGE,
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
  EVENT_PAGE,
  MAJALAH_PAGE,
];