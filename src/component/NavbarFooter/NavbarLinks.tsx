import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

import { NavbarRoutes } from '../../routes/routes';
import { NavLink } from './NavLink';

import './NavbarLinks.scss';

export const NavbarLinks = (): JSX.Element => {
  const contents = NavbarRoutes.map(({ content:route, children_routes, parentPath, isDropdown }) => (
    isDropdown ? (
      <Dropdown key={route.path} className="shadow-none dropdown nav-item">
        <Dropdown.Toggle variant='' className="">
          { route.label }
        </Dropdown.Toggle> 
        <Dropdown.Menu className='custom-dropdown-style'>
          { children_routes?.map(route => (
            <Dropdown.Item key={ parentPath + route.path } href={ parentPath + route.path }>
              {route.label}
            </Dropdown.Item>
          )) }
        </Dropdown.Menu>
      </Dropdown>
    ) : (
      <NavLink
        route = { route.path }
        key = { route.path }
        className='btn shadow-none nav-item'
      >
        { route.label }
      </NavLink>
    )
  ));

  return <>{
    (
      contents.map( content => content )
    )
  }
  </>
  ;
};
