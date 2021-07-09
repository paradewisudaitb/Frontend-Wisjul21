import React, { Suspense } from 'react';

import './App.scss';
import { Route, Switch, useRoute } from 'wouter';

import { Footer } from './component/NavbarFooter/Footer';
import { Navbar } from './component/NavbarFooter/Navbar';
import { AllRoutes } from './routes/routes';
import { Loading } from './component/Loading/Loading';

import { ScrollToTop } from './component/ScrollToTop/ScrollToTop';

function App(): JSX.Element {
  const [isHomePage, _] = useRoute('/');

  return (
    <div className='App'>
      <Suspense fallback={<Loading />}>
        <ScrollToTop>

          {/* { isHomePage ? <Navbar homePage={true} /> : <Navbar />} */}
          {/* <Navbar /> */}
          <div className="app-content">

            <Switch>
              { AllRoutes.map(({ label, path, component: Component}, props) => (
                <Route
                  key={label}
                  path={path}
                  component={Component}
                  {...props}
                />
              ))}
            </Switch>
          </div>
        </ScrollToTop>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
