import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from "../../react-auth0-wrapper.js";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth0();
  return (

    <Route
      {...rest}
      render={() => {
        if (isAuthenticated) {
          return <Component />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;