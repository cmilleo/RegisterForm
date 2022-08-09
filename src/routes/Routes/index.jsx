import React from "react";
import { Switch, Route } from "react-router-dom";

import Register from "../../pages/Register";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Register />
      </Route>
    </Switch>
  );
};

export default Routes;
