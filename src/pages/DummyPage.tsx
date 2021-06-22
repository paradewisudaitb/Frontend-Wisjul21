import React from 'react';

import { Footer } from '../component/Footer';
import { Navbar } from '../component/Navbar';

export const DummyPage = () => {
  const dummystyle = {
    height: '26rem'
  };

  return (
    <div className="dummy-page" style={ dummystyle }>
      <Navbar />
      <div className="content">
        <h1>Ini dummy</h1>
      </div>
      <Footer />
    </div>
  );
};