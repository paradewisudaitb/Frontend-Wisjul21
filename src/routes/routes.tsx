
import { DummyPage } from '../pages/DummyPage';
import HomePage from '../pages/HomePage';

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
export const DUMMY_PAGE = toRoute('Dummy', '/dummy', DummyPage);

export const DUMMY_SUB_INDEX = toRoute('SubDummyIndex', '/subdummydropdown');
export const DUMMY_SUB_ROUTE1 = toRoute('SubDummy1', '/subdummy1');
export const DUMMY_SUB_ROUTE2 = toRoute('SubDummy2', '/subdummy2');
export const DUMMY_SUB_ROUTE3 = toRoute('SubDummy3', '/subdummy3');

export const NavbarRoutes: navroutes[] = [
  {
    content: DUMMY_PAGE,
  },
  {
    content: DUMMY_SUB_INDEX,
    children_routes: [DUMMY_SUB_ROUTE1, DUMMY_SUB_ROUTE2, DUMMY_SUB_ROUTE3],
    isDropdown: true,
    parentPath: '/subdummydropdown'
  }
];

export const AllRoutes = [
  HOME_PAGE,
  DUMMY_PAGE,
];