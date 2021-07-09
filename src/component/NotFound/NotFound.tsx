import React from 'react';

import { HOME_PAGE, GALERI_HMJ_PAGE } from '../../routes/routes';
import { Link } from 'wouter';

import './NotFound.scss';

import { Navbar } from '../NavbarFooter/Navbar';

const NotFoundComponent = (hmj: boolean) => {
  
  return (
    <>
      <Navbar />
      <div className="not-found">
        <h1 className='m-5'>{hmj ? 'HMJ' : 'Laman'} tidak ditemukan</h1>
        <Link href={ hmj ? GALERI_HMJ_PAGE.path : HOME_PAGE.path } className='to-home-button m-2 m-md-5'>
          <i className="fa fa-arrow-left me-1"></i>
          {`Kembali ke ${hmj ? 'galeri HMJ' : 'halaman utama'}`}
        </Link>
      </div>
    </>
  );
};

export const NotFoundWisudawan = ({hmjSlug}: {hmjSlug: string}) => {
  return (
    <>
      <Navbar />
      <div className="not-found">
        <h1 className='m-5'>Wisudawan tidak ditemukan</h1>
        <Link href={ GALERI_HMJ_PAGE.path + '/' + hmjSlug } className='to-home-button m-2 m-md-5'>
          <i className="fa fa-arrow-left me-1"></i>
          Kembali ke himpunan
        </Link>
      </div>
    </>
  );
};

export default NotFoundComponent;