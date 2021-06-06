import React from 'react';

import { Link } from 'wouter';
import { Brand } from './Navbar';

import { ReactComponent as InstagramIcon } from '../icons/instagram.svg';
import { ReactComponent as TwitterIcon } from '../icons/twitter.svg';

import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="d-flex justify-content-between">
        <div className="left-footer ms-4 mt-3">
          <div className="d-flex flex-row">
            <Brand />
          </div>
          <div className="d-flex flex-row">
            <h5>Ini tema atau jargon</h5>
          </div>
          <div className="d-flex flex-row mt-4">
            © Perayaan Wisuda Juli ITB 2021
          </div>
        </div>
        <div className="right-footer me-4 mt-5">
          <div className="social-media-sec d-flex">
            <a href="#" className="social-media-container d-flex align-items-center justify-content-center">
              <InstagramIcon className='social-media' />
            </a>
            <a href="#" className="social-media-container d-flex align-items-center justify-content-center">
              <TwitterIcon className='' />
            </a>
          </div>
        </div>
      </div>
        
    </footer>
  );
};