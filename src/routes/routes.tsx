
import Majalah from '../pages/Majalah/Majalah';
import HomePage from '../pages/Home/HomePage';
import Form from '../pages/Form/Form';
import FormApresiasi from '../pages/FormApresiasi/FormApresiasi';

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
export const MAJALAH_PAGE = toRoute('Majalah', '/majalah', Majalah);
export const FORM_PAGE = toRoute('Form', 'form/', Form);
export const FORM_APRESIASI_PAGE = toRoute('Form Apresiasi', 'formApresiasi/', FormApresiasi);

export const FORM_INDEX = toRoute('Forms', '/forms');

export const NavbarRoutes: navroutes[] = [
  {
    content: MAJALAH_PAGE,
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
];