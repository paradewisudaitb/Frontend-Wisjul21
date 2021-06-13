import React from 'react';

import './App.css';
import HomePage from './pages/Home/HomePage';
import { Route } from 'wouter';

import Form from './pages/Form/Form';
import FormApresiasi from './pages/FormApresiasi/FormApresiasi';
import Majalah from './pages/Majalah/Majalah';


function App() {
  return (
    <div className="App">
      <Route path=''><HomePage /></Route>
      <Route path='/form'><Form /></Route>
      <Route path='/formApresiasi'><FormApresiasi /></Route>
      <Route path='/majalah'><Majalah /></Route>
    </div>
  );
}

export default App;
