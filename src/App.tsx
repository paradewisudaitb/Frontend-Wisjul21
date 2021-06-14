import React from 'react';
import { Route } from 'wouter';

import './App.css';

import HomePage from './pages/HomePage/HomePage';
import Form from './pages/Form/Form';
import FormApresiasi from './pages/FormApresiasi/FormApresiasi';
import Majalah from './pages/Majalah/Majalah';
import GaleriApresiasi from './pages/GaleriApresiasi/GaleriApresiasi';

import { Footer } from './component/NavbarFooter/Footer';
import { Navbar } from './component/NavbarFooter/Navbar';
import { API_URL } from './api';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path=''><HomePage /></Route>
      <Route path='/form'><Form /></Route>
      <Route path='/form-apresiasi'><FormApresiasi /></Route>
      <Route path='/majalah'><Majalah /></Route>
      <Route path='/galeri-apresiasi'><GaleriApresiasi /></Route>
      <Footer />
    </div>
  );
}

export default App;
