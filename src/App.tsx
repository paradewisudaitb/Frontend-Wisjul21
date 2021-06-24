import React, { Suspense } from 'react';
import './App.scss';
import { Route, Switch, Redirect } from 'wouter';

import { Footer } from './component/NavbarFooter/Footer';
import { Navbar } from './component/NavbarFooter/Navbar';
import { AllRoutes, HOME_PAGE, COMINGSOON_PAGE } from './routes/routes';
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
