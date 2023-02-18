import React from 'react';
import Aos from 'aos';
import { Route, Routes as Switch } from 'react-router-dom';
import { Routers } from '../pages';
import { Apps } from '../services/path';
import { Components } from '../components';
import "aos/dist/aos.css";

export default function Routes() {

  React.useEffect(() => {
    Aos.init({
      duration:1000
    });
  }, []);
  
  return (
    <React.Fragment>
      <React.Suspense fallback={<Components.Loader />}>
        <Switch>
          <Route path={Apps.accounts} element={<Routers.AuthRoutes />}/>
          <Route path={Apps.layout} element={<Routers.LayoutRoutes />}/>
        </Switch>
      </React.Suspense>
    </React.Fragment>
  )
}