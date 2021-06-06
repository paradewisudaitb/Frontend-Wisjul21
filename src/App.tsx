import React, { Component } from 'react';

import './App.css';
import HomePage from './pages/HomePage';
import { DummyPage } from './pages/DummyPage';

import { Footer } from './component/Footer';
import { Navbar } from './component/Navbar';

import { Route } from 'wouter';
import { AllRoutes } from './routes/routes';

import Form from './pages/Form/Form';


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
      <Route path=''><HomePage /></Route>
      <Route path='/dummy'><DummyPage /></Route>
      <Route path='/form'><Form /></Route>

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
