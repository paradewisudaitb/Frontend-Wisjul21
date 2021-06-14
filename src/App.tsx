import './App.css';
import HomePage from './pages/HomePage';
import { DummyPage } from './pages/DummyPage';
import { Route } from 'wouter';
import Form from './pages/Form/Form';
import Gathertown from './pages/Gathertown/Gathertown';

function App() {
  return (
    <div className='App'>
      <Gathertown />
      {/* <Route path=''>
        <HomePage />
      </Route>
      <Route path='/form'>
        <Form />
      </Route> */}
    </div>
  );
}

export default App;
