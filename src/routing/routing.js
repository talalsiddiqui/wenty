import React from "react";
import { Switch } from "react-router-dom";
import Dashboard from "../container/Dashboard";
import PrivateRoute from "./privateRoute";

const Routing = () => {
  return (
    <Switch>
      <PrivateRoute exact path={"/"} component={Dashboard} />
    </Switch>
  );
};

export default Routing;
