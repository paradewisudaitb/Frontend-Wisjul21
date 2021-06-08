import './App.css';
import HomePage from './pages/Home/HomePage';
import { DummyPage } from './pages/DummyPage';
import { KirimPesanPage } from './pages/KirimPesan/KirimPesanPage';
import { Route } from 'wouter';
import Form from './pages/Form/Form';


function App() {
  return (
    <div className="App">
      <Route path=''><HomePage /></Route>
      <Route path='/kirimpesan'><KirimPesanPage /></Route>
      <Route path='/form'><Form /></Route>
      <Route path='/dummy'><DummyPage /></Route>
    </div>
  );
}

export default App;
