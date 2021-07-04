import React from 'react';

import { Brand } from './Navbar';

import { ReactComponent as InstagramIcon } from '../../icons/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../icons/twitter.svg';
import { ReactComponent as SpotifyIcon } from '../../icons/spotify.svg';

import './Footer.scss';

export const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="d-flex justify-content-between">
        <div className="left-footer ms-4 mt-3">
          <div className="d-flex flex-row">
            <Brand />
          </div>
          <div className="d-flex flex-row fst-italic">
            Metamorphose to find the path to the blossom
          </div>
          <div className="d-flex flex-row copyright">
            © Perayaan Wisuda Juli ITB 2021
          </div>
        </div>
        <div className="social-media-sec">
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
        
    </footer>
  );
};