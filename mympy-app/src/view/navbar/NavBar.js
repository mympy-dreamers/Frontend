import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "../../react-auth0-wrapper";

import logo from '../../img/logo.svg';


const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
    console.log(user)
    if (user) console.log("user_id:", user.sub.split("|")[1])
    return (
        <div className="main">
            <div className="left">
                <Link to="/">
                    <img src={logo} alt="Company Logo" />
                </Link>
            </div>
            <div className="right">
                <ul className="list">
                    <li className="item">
                        <Link to="/market">Search For Dreams</Link>
                    </li>
                    {/* <li className="item">
                        <Link to="/register">Sign Up</Link>
                    </li> */}
                    <li className="item sign-in">
                        {/* <Link to="/login">Sign In</Link> */}
                        {!isAuthenticated ? (
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                    loginWithRedirect({})
                                }}
                            >
                                Log In
                            </a>
                        ) : user && <a onClick={(e) => { e.preventDefault(); logout() }}>Log Out</a>}
                    </li>
                    <li className="item">
                        {isAuthenticated && user ? <Link to="/dashboard">Account</Link> : null}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;