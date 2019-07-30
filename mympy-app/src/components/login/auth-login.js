// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";

const AuthLogin = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>{user.name}</button>}
    </div>
  );
};

export default AuthLogin;