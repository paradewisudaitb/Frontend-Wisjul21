import './App.css';
import HomePage from './pages/HomePage';
import { Route } from 'wouter';
import Form from './pages/Form/Form';
import { API_URL } from './api';


function App() {
  console.log(API_URL);
  console.log(process.env);
  return (
    <div className="App">
      <Route path=''><HomePage /></Route>
      <Route path='/form'><Form /></Route>
    </div>
  );
}

export default App;
