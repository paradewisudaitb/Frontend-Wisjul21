import './App.css';
import HomePage from './pages/HomePage';
import EventPage from './pages/Event//EventPage';
import { DummyPage } from './pages/DummyPage';
import { Route } from 'wouter';
import Form from './pages/Form/Form';


function App() {
  return (
    <div className="App">
      <Route path=''><EventPage /></Route>
      <Route path='/form'><Form /></Route>
    </div>
  );
}

export default App;
