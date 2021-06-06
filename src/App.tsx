import React, { Component } from 'react';
import { Route } from 'wouter';

import './App.css';
import HomePage from './pages/HomePage';
import { DummyPage } from './pages/DummyPage';

import { Footer } from './component/Footer';
import { Navbar } from './component/Navbar';

import { AllRoutes } from './routes/routes';

function App() {
  return (
    <div className="App">
      {/* { AllRoutes.map(({ path, component }) => (
        <Route
          path = { path }
        >
          { component }
        </Route>
      )) } */}
      <Navbar />
      <Route path=''><HomePage /></Route>
      <Route path='/dummy'><DummyPage /></Route>
      <Footer />
      
      {/* Barangkali linknya dibutuhin ntar */}
      {/* <a
        href="https://bit.ly/Phoenix1Wisjul"
        target="_blank"
        rel="noopener noreferrer"
        className="App-link" >
        PHOENIX: Sebongkah Asa
      </a> */}
    </div>
  );
}

export default App;
