import React, { Suspense } from 'react';
import './App.scss';
import { Route, Switch } from 'wouter';

import { Footer } from './component/NavbarFooter/Footer';
import { Navbar } from './component/NavbarFooter/Navbar';

import { AllRoutes } from './routes/routes';

import { Loading } from './component/Loading/Loading';

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Switch>
          { AllRoutes.map(({ label, path, component: Component}) => (
            <Route
              key={label}
              path={ path }
              component={ Component }
            />
          ))}
          {/* <Redirect to={ HOME_PAGE.path }/> */}
        </Switch>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
