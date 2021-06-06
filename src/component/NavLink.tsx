import React from 'react';

import { Link } from 'wouter';

export type NavProps = {
  className?: string,
  route: string,
}

export const NavLink: React.FunctionComponent<NavProps> = (props) => {
  return (
    <Link to={ props.route } className={ props.className }>
      { props.children }
    </Link>
  );
};
