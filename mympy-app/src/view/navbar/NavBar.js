import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import Searchbar from '../../components/search_bar/DreamSearchbar'

import logo from '../../img/MIMPYlogo.svg';


const NavBar = (props) => {
    const { isAuthenticated, loginWithRedirect, loading } = props.auth;
    return (
        <div className="main">
            <div className="nav-wrap">
                <div className="left">
                    <Link to="/">
                        <img src={logo} alt="Company Logo" />
                    </Link>
                </div>
                <div className="mid">
                    {props.show && <Searchbar />}
                </div>
                <div className="right">
                    <ul className="list">
                        <li className="item">
                            <NavLink activeClassName="selected" to="/about">About</NavLink>
                        </li>
                        <li className="item">
                            <NavLink activeClassName="selected" to="/market">Search For Dreams</NavLink>
                        </li>

                        <li className="item">
                            {loading && <p>loading</p>}
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

                            {isAuthenticated && (props.onAccountPage ? (<button onClick={(e) => {
                                e.preventDefault();
                                const envUrl = process.env.REACT_APP_FE_URL || 'http://localhost:3000';
                                const logoutUrl = envUrl.split('').map(char => {
                                    if (char === '/') return '%2F';
                                    if (char === ':') return '%3A';
                                    return char
                                }).join('')
                                console.log(logoutUrl);
                                props.history.go(`https://mympy-dreamer.auth0.com/v2/logout?returnTo=${logoutUrl}`)
                            }}>Log out</button>)
                                : <NavLink activeClassName="selected" to="/dashboard">Account</NavLink>)}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = ({ auth }) => {
    return {
        auth: auth.auth
    }
}

export default connect(mapStateToProps, {})(NavBar);