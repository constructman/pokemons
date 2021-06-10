import React from "react";
import {  
  BrowserRouter as SRouter,
  Switch,
  Route  
} from "react-router-dom";
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'

const Router = () => (
  <SRouter>
    <Switch>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </Switch>
  </SRouter>
);

export default Router
