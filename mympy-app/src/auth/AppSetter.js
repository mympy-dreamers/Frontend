import React, { useEffect } from 'react';
import { useAuth0 } from "../react-auth0-wrapper.js";
import { connect } from "react-redux";
import App from '../App';
import { setAuth, setUser, setLog, zeroLogin, fetchUsers } from '../actions/index';

const AppSetter = (props) => {


    const { isAuthenticated, loginWithRedirect, logout, loading, user } = useAuth0();
    if (user && user !== props.user) {
        props.setUser(user)
        props.fetchUsers();

        if (isAuthenticated !== props.auth.isAuthenticated || loading !== props.auth.loading) props.setAuth({ isAuthenticated, loginWithRedirect, logout, loading })
    }
    if (isAuthenticated !== props.auth.isAuthenticated || loading !== props.auth.loading) props.setAuth({ isAuthenticated, loginWithRedirect, logout, loading })


    return (
        <App {...props} />
    )


}
const mapStateToProps = ({ auth, users }) => {
    return { auth: auth.auth, user: users.authZeroUser, users: users }
}

export default connect(mapStateToProps, { setUser, setAuth, setLog, zeroLogin, fetchUsers })(AppSetter);