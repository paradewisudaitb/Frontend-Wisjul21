import React from 'react';

export const ScrollToTop = ({ children, location }: { children: any, location: any }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return children;
};
