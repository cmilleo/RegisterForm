import React from "react";
import { Switch, Route } from "react-router-dom";
import Container from "./styles";
import Register from "../../pages/Register";
import Principal from "../../pages/Principal";

const Routes = () => {
  return (
    <Container>
      <Switch>
        <Route path="/" exact>
          <Register />
        </Route>
        <Route path="/principal/:id">
          <Principal />
        </Route>
      </Switch>
    </Container>
  );
};

export default Routes;
