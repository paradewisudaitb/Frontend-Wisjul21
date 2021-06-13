import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

import { NavbarRoutes } from '../../routes/routes';
import { NavLink } from './NavLink';


export const NavbarLinks = () => {
  const contents = NavbarRoutes.map(({ content:route, children_routes, parentPath, isDropdown }) => (
    isDropdown ? (
      <Dropdown className="dropdown-nooutline">
        <Dropdown.Toggle variant=''>
          { route.label }
        </Dropdown.Toggle> 
        <Dropdown.Menu className='custom-dropdown-style'>
          { children_routes?.map(route => (
            <Dropdown.Item href={ parentPath + route.path}>{route.label}</Dropdown.Item>
          )) }
        </Dropdown.Menu>
      </Dropdown>
    ) : (
      <NavLink
        route = { route.path }
        className='btn shadow-none mx-3'
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
