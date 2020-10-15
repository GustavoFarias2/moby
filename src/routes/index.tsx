import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import AuthRoutes from "./auth.routes";

const Routes: React.FC = () => {

  return (
    <Router>

      <AuthRoutes />

    </Router>
  )

}

export default Routes;
