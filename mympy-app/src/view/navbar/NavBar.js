import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth0 } from "../../auth/react-auth0-wrapper.js";
import logo from '../../img/logo.png';


const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
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
                        <Link to="/">Home</Link>
                    </li>
                    <li className="item">
                        <Link to="/market">Search For Dreams</Link>
                    </li>
                    {/* <li className="item">
                        <Link to="/register">Sign Up</Link>
                    </li>
                    <li className="item">
                        <Link to="/login">Sign In</Link>
                    </li> */}
                    <li className="item">
                        {!isAuthenticated && (
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    loginWithRedirect({})
                                }}
                            >
                                Log in
                            </button>
                        )}

                        {isAuthenticated && <button onClick={(e) => {
                            e.preventDefault();
                            logout()
                        }}>Log out</button>}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;