import React from 'react';

export const ScrollToTop = ({ children  }: { children: any }) => {
  React.useEffect(() => window.scrollTo(0, 0));
  return children;
};

export const ToTop = (): void => {
  window.scrollTo(0, 0);
  // document.documentElement.scrollTop = 0;
};