import React from "react";
import {  
  BrowserRouter as SRouter,
  Switch,
  Route  
} from "react-router-dom";
import Signin from '../pages/Signin'

const Router = () => (
  <SRouter>
    <Switch>
      <Route path="/signin">
        <Signin />
      </Route>
    </Switch>
  </SRouter>
);

export default Router
