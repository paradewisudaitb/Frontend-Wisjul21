import './ComingSoon.scss';
import { ASSET_URL } from '../../api';

const ComingSoon = () => {
  return (
    <div className="App-header">
      <img src={`${ASSET_URL}/assets/logo/min.png`} className="App-logo" alt="logo" />
      <h1>
        Wisjul 2021 is coming!
      </h1>
      <h2>
        Stay tuned!
      </h2>
      <a
        href="https://www.instagram.com/paradewisudaitb/"
        target="_blank"
        rel="noopener noreferrer"
        className="App-link" >
        Instagram
      </a>
      <br />
      <a
        href="https://twitter.com/paradewisudaitb"
        target="_blank"
        rel="noopener noreferrer"
        className="App-link" >
        Twitter
      </a>
      <br />
      <a
        href="https://bit.ly/Phoenix1Wisjul"
        target="_blank"
        rel="noopener noreferrer"
        className="App-link" >
        PHOENIX: Sebongkah Asa
      </a>
    </div>
  );
};

export default ComingSoon;
