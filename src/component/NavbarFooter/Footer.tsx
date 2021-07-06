import React from 'react';

import { Brand } from './Navbar';

import { ReactComponent as InstagramIcon } from '../../icons/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../icons/twitter.svg';
import { ReactComponent as TiktokIcon } from '../../icons/tik-tok.svg';
import { ReactComponent as SpotifyIcon } from '../../icons/spotify.svg';
import { ReactComponent as LineIcon } from '../../icons/line.svg';
import { ReactComponent as LinkedinIcon } from '../../icons/linkedin.svg';

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
          <a href="https://vt.tiktok.com/ZSJmyETDr/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-container d-flex tiktok">
            <TiktokIcon className='social-media' />
          </a>
          <a href="https://open.spotify.com/user/huto1ycscch4bkj3fukhzssrr?si=UsvZwc51QGiSPgkjilCVWQ"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-container d-flex spotify">
            <SpotifyIcon className='social-media' />
          </a>
          <a href="https://line.me/R/ti/p/%40mov0891c"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-container d-flex line">
            <LineIcon className='social-media' />
          </a>
          <a href="https://www.linkedin.com/company/parade-wisuda-juli-itb-2021"
            target="_blank"
            rel="noopener noreferrer"
            className="social-media-container d-flex linkedin">
            <LinkedinIcon className='social-media' />
          </a>
        </div>
      </div>
    </footer>
  );
};