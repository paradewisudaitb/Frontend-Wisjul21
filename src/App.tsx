import React, { Suspense } from 'react';

import './App.scss';
import { Route, Switch, Redirect } from 'wouter';

import { Footer } from './component/NavbarFooter/Footer';
import { Navbar } from './component/NavbarFooter/Navbar';
import { AllRoutes, HOME_PAGE, COMINGSOON_PAGE } from './routes/routes';
import { Loading } from './pages/Loading/Loading';

import { ScrollToTop } from './routes/ScrollToTop/ScrollToTop';

function App() {

  return (
    <div className='App'>
      <Suspense fallback={<Loading />}>
        <ScrollToTop />
        <Navbar />
        <div className="app-content">

          <Switch>
            { AllRoutes.map(({ label, path, component: Component}) => (
              <Route
                key={label}
                path={path}
                component={Component}
              />
            ))}
          </Switch>
          {/* <Redirect to={ HOME_PAGE.path }/> */}
          <Footer />

        </div>
      </Suspense>
    </div>
  );
}

export default App;
