import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="App-header">
      <img src={'https://wisjul21.sgp1.cdn.digitaloceanspaces.com/assets/logo/Logo-sementara-400x400.jpg'} className="App-logo" alt="logo" />
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

export default HomePage;
