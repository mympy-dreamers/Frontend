import React from 'react';
import { useAuth0 } from "../react-auth0-wrapper.js";
import { connect } from "react-redux";
import App from '../App';
import { setAuth, setUser, setLog, zeroLogin, fetchUsers } from '../actions/index';

const AppSetter = (props) => {
    const auth = useAuth0();
    //checks if local storage works
    let { isAuthenticated, loginWithRedirect, logout, loading, user, getTokenSilently } = localStorage.getItem('curr_user') ? JSON.parse(localStorage.getItem('curr_user')) : auth

    if (user && user.sub !== props.user.sub) {
        if (!localStorage.getItem('curr_user')) localStorage.setItem("curr_user", JSON.stringify({ isAuthenticated, loginWithRedirect, logout, loading, user, getTokenSilently }));
        props.setUser(user)
        props.fetchUsers();

    if (isAuthenticated !== props.auth.isAuthenticated || loading !== props.auth.loading) props.setAuth({ isAuthenticated, loginWithRedirect, logout, loading, getTokenSilently })    }
    if (isAuthenticated !== props.auth.isAuthenticated || loading !== props.auth.loading) props.setAuth({ isAuthenticated, loginWithRedirect, logout, loading, getTokenSilently })

    return (
        <App {...props} />
    )


}
const mapStateToProps = ({ auth, users }) => {
    return { auth: auth.auth, user: users.authZeroUser, users: users }
}

export default connect(mapStateToProps, { setUser, setAuth, setLog, zeroLogin, fetchUsers })(AppSetter);