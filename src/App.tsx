import './App.css';
import HomePage from './pages/HomePage';
import { DummyPage } from './pages/DummyPage';
import { Route } from 'wouter';
import Form from './pages/Form/Form';
import Majalah from './pages/Majalah/Majalah';


function App() {
  return (
    <div className="App">
      <Route path=''><HomePage /></Route>
      <Route path='/dummy'><DummyPage /></Route>
      <Route path='/form'><Form /></Route>
      <Route path='/majalah'><Majalah /></Route>
    </div>
  );
}

export default App;
