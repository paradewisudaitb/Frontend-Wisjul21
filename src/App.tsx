import './App.scss';
import HomePage from './pages/HomePage';
import { Route } from 'wouter';
import Form from './pages/Form/Form';


function App() {
  return (
    <div className="App">
      <Route path=''><HomePage /></Route>
      <Route path='/form'><Form /></Route>
    </div>
  );
}

export default App;
