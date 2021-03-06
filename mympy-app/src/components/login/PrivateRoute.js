import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { useAuth0 } from "../../react-auth0-wrapper.js";

//Makes routes unavailable to users who are not authenticated
const PrivateRoute = ({ component: Component, ...rest }) => {
  // const Component = props.component;
  const { isAuthenticated } = useAuth0();


  let [isloggedin, setlogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('curr_user') || isAuthenticated) {
      setlogin(true)
    } else {
      setlogin(false)
    }
  }, [])

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isloggedin || isAuthenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};
const mapStateToProps = ({ auth }) => {
  return {
    isAuthenticated: auth.auth.isAuthenticated
  }
}

export default connect(mapStateToProps, {})(PrivateRoute);