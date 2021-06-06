import React from 'react';
import './App.css';

import { Navbar } from './component/Navbar';
import { Footer } from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <img src={'https://wisjul21.sgp1.cdn.digitaloceanspaces.com/logo/logo/Logo-sementara-400x400.jpg'} className="App-logo" alt="logo" />
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
      <Footer />
    </div>
  );
}

export default App;
