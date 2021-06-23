import React from 'react';
import './App.scss';
import { Route } from 'wouter';

import HomePage from './pages/HomePage/HomePage';
import Form from './pages/Form/Form';
import FormApresiasi from './pages/FormApresiasi/FormApresiasi';
import Majalah from './pages/Majalah/Majalah';
import GaleriApresiasi from './pages/GaleriApresiasi/GaleriApresiasi';
import Wisudawan from './pages/Wisudawan/Wisudawan';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import Pesan from './component/PesanAnonim/PesanAnonim';

import { KirimPesanPage } from './pages/KirimPesan/KirimPesanPage';
import { Footer } from './component/NavbarFooter/Footer';
import { Navbar } from './component/NavbarFooter/Navbar';
import Gathertown from './pages/Gathertown/Gathertown';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Route path=''>
        <HomePage />
      </Route>
      <Route path='/coming-soon'>
        <ComingSoon />
      </Route>
      <Route path='/form'>
        <Form />
      </Route>
      <Route path='/form-apresiasi'>
        <FormApresiasi />
      </Route>
      <Route path='/majalah'>
        <Majalah />
      </Route>
      <Route path='/galeri-apresiasi'>
        <GaleriApresiasi />
      </Route>
      <Route path='/wisudawan'>
        <Wisudawan nim='13716059' />
      </Route>
      <Route path='/kirim-pesan'>
        <KirimPesanPage />
      </Route>
      <Route path='/gathertown'>
        <Gathertown />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
