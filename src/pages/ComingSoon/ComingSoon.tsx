import './ComingSoon.scss';
import { ASSET_URL } from '../../api';

import { Navbar } from '../../component/NavbarFooter/Navbar';

import Sponsor from '../../component/Sponsor/Sponsor';

const ComingSoon = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <div className="CS-header">
        <img src={`${ASSET_URL}/assets/logo/min.png`} className="CS-logo" alt="logo" />
        <h1 className="CS-title">
          Wisjul 2021 is coming!
        </h1>
        <h2 className="CS-subtitle">
          Stay tuned!
        </h2>
        <div className="CS-links">
          <a
            href="https://www.instagram.com/paradewisudaitb/"
            target="_blank"
            rel="noopener noreferrer"
            className="CS-link" >
            Instagram
          </a>
          <br />
          <a
            href="https://twitter.com/paradewisudaitb"
            target="_blank"
            rel="noopener noreferrer"
            className="CS-link" >
            Twitter
          </a>
          <br />
          <a
            href="https://bit.ly/Phoenix1Wisjul"
            target="_blank"
            rel="noopener noreferrer"
            className="CS-link" >
            PHOENIX: Sebongkah Asa
          </a>
        </div>
      </div>
      <Sponsor />
    </>
  );
};

export default ComingSoon;
