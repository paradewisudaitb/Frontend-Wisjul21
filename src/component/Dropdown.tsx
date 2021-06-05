import React, { useState } from 'react';
import { Link } from 'wouter';

import { route } from '../routes/routes';

type DropdownProps = {
  route: route,
  children_routes: route[];
  parentPath: string;
}

export const Dropdown: React.FunctionComponent<DropdownProps> = ({ route, children_routes, parentPath }: DropdownProps) => {
  const content = (
    <>
      { children_routes.map(({ label, path }) => (
        <li>
          <Link
            to={ parentPath + path }
            className='dropdown-item'
          >
            { label }
          </Link>
        </li>
      ))}
    </>
  );

  return (
    <div className="dropdown">
      <button className="dropdown-toggle">
        { route.label }
      </button>
      <ul className="dropdown-menu">
        { content }
      </ul>
    </div>
  );
};
