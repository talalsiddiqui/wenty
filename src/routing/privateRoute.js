import React from "react";
import { Route } from "react-router-dom";
import Layout from "../container/layout";

const ProtectedRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

export default ProtectedRoutes;
