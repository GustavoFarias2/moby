import React from "react";

import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const AuthRoutes: React.FC = () => {

  return (

    <Switch>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      <Redirect from="/" to="login" />

    </Switch>

  )

}

export default AuthRoutes;
