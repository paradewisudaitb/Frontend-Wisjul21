import { Suspense } from 'react';
import './App.scss';
import { Router, Route, Switch } from 'wouter';
import { Footer } from './component/NavbarFooter/Footer';
import { AllRoutes } from './routes/routes';
import { Loading } from './component/Loading/Loading';
import { ScrollToTop } from './component/ScrollToTop/ScrollToTop';

function App(): JSX.Element {
  return (
    <div className='App'>
      <Router base='/wisjul2021'>
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
      </Router>
    </div>
  );
}

export default App;

