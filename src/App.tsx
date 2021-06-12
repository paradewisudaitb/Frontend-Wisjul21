import React from 'react';

import './App.css';
import HomePage from './pages/HomePage';
import { Route } from 'wouter';

import Form from './pages/Form/Form';
import FormApresiasi from './pages/FormApresiasi/FormApresiasi';


function App() {
  return (
    <div className="App">
      <Route path=''><HomePage /></Route>
      <Route path='/form'><Form /></Route>
      <Route path='/formApresiasi'><FormApresiasi /></Route>
    </div>
  );
}

export default App;
