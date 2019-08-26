import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from "../../react-auth0-wrapper.js";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth0();
  console.log()
  return (

    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRoute;