import './ComingSoon.scss';

const ComingSoon = () => {
  return (
    <div className="App-header">
      <img src={'https://wisjul21.sgp1.cdn.digitaloceanspaces.com/assets/logo/Logo-sementara-400x400.jpg'} className="App-logo" alt="logo" />
      <h1>
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
  );
};

export default ComingSoon;
