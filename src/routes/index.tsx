import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

// import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Routes: React.FC = () => {

  // const [isLoged, setIsLoged] = useState(false);

  return (
    <Router>

      {/* { isLoged ? <AppRoutes /> : <AuthRoutes setIsLoged={setIsLoged} />} */}
      <AppRoutes />

    </Router>
  )

}

export default Routes;
