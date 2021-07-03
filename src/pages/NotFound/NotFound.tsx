import React from 'react';
import NotFoundComponent from '../../component/NotFound/NotFound';

const NotFound = () => {
  return NotFoundComponent(false);
};

export const NotFoundHMJ = () => {
  return NotFoundComponent(true);
};

export default NotFound;