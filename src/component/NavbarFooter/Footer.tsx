import React from 'react';

import { Brand } from './Navbar';

import { ReactComponent as InstagramIcon } from '../../icons/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../icons/twitter.svg';
import { ReactComponent as SpotifyIcon } from '../../icons/spotify.svg';

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
            Ini tema atau jargon
          </div>
          <div className="d-flex flex-row">
            © Perayaan Wisuda Juli ITB 2021
          </div>
        </div>
        <div className="right-footer me-4 mt-5">
          <div className="social-media-sec d-flex">
            <a href="https://www.instagram.com/paradewisudaitb/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-media-container d-flex instagram">
              <InstagramIcon className='social-media' />
            </a>
            <a href="https://twitter.com/paradewisudaitb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-media-container d-flex twitter">
              <TwitterIcon className='social-media' />
            </a>
            <a href="https://bit.ly/Phoenix1Wisjul" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-media-container d-flex spotify">
              <SpotifyIcon className='social-media' />
            </a>
          </div>
        </div>
      </div>
        
    </footer>
  );
};