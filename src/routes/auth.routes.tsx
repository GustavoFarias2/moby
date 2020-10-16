import React from "react";

import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

interface AuthRoutes {
  setIsLoged: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthRoutes: React.FC<AuthRoutes> = ({ setIsLoged }) => {

  return (

    <Switch>

      <Route path="/login">
        <Login setIsLoged={setIsLoged} />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      <Redirect from="/" to="login" />

    </Switch>

  )

}

export default AuthRoutes;
