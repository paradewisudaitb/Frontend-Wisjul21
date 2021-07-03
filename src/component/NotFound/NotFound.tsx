import React from 'react';

import { HOME_PAGE, GALERI_HMJ_PAGE } from '../../routes/routes';

import './NotFound.scss';

const NotFoundComponent = (hmj: boolean) => {
  
  return (
    <div className="not-found">
      <h1 className='m-5'>{hmj ? 'HMJ' : 'Laman'} tidak ditemukan</h1>
      <a href={ hmj ? GALERI_HMJ_PAGE.path : HOME_PAGE.path } className='to-home-button m-2 m-md-5'>
        <i className="fa fa-arrow-left me-1"></i>
        {`Kembali ke ${hmj ? 'galeri HMJ' : 'halaman utama'}`}
      </a>
    </div>
  );
};

export const NotFoundWisudawan = (hmjSlug: string) => {
  return (
    <div className="not-found">
      <h1 className='m-5'>Wisudawan tidak ditemukan</h1>
      <a href={ GALERI_HMJ_PAGE.path + '/' + hmjSlug } className='to-home-button m-2 m-md-5'>
        <i className="fa fa-arrow-left me-1"></i>
        Kembali ke himpunan
      </a>
    </div>
  );
};

export default NotFoundComponent;