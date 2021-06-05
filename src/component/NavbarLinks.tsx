import React from 'react';

import { NavbarRoutes } from '../routes/routes';
import { Dropdown } from './Dropdown';

import { NavLink } from './NavLink';


export const NavbarLinks = () => {
  const contents = NavbarRoutes.map(({ content:route, children_routes, parentPath, isDropdown }) => (
    isDropdown ? (
      <Dropdown
        route = { route }
        children_routes = { children_routes ? children_routes : [] }
        parentPath = { parentPath ? parentPath : ''}
      />
    ) : (
      <NavLink
        route = { route.path }
        className='mx-3'
      >
        { route.label }
      </NavLink>
    )
  ));

  return <>{
    contents.map( content => content )
  }
  </>
  ;
};
