import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import AuthRoutes from "./auth.routes";

const Routes: React.FC = () => {

  return (
    <Router>
      <Switch>

        <Route path='/auth'>
          <AuthRoutes />
        </Route>

        <Redirect from='/' to='auth' />

      </Switch>
    </Router>
  )

}

export default Routes;
