import React, { Suspense } from 'react';
import './App.scss';
import EventPage from './pages/Event/EventPage';

// import HomePage from './pages/HomePage/HomePage';
import Form from './pages/Form/Form';
import FormApresiasi from './pages/FormApresiasi/FormApresiasi';
import Majalah from './pages/Majalah/Majalah';
import GaleriApresiasi from './pages/GaleriApresiasi/GaleriApresiasi';
import Wisudawan from './pages/Wisudawan/Wisudawan';
import ComingSoon from './pages/ComingSoon/ComingSoon';

import { KirimPesanPage } from './pages/KirimPesan/KirimPesanPage';
import { Route, Switch, Redirect } from 'wouter';

import { Footer } from './component/NavbarFooter/Footer';
import { Navbar } from './component/NavbarFooter/Navbar';
import { AllRoutes, HOME_PAGE } from './routes/routes';
import { Loading } from './pages/Loading/Loading';

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<Loading />}>

      </Suspense>
      <Navbar />
      <Switch>
        { AllRoutes.map(({ path, component: Component}) => (
          <Route
            path={ path }
            component={ Component }
          />
        ))}
        {/* <Redirect to={ HOME_PAGE.path }/> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
