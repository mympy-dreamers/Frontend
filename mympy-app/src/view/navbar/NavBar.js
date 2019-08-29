import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import Searchbar from '../../components/search_bar/DreamSearchbar'
import TokenCall from '../../auth/ExternalApi.js';

import logo from '../../img/MIMPYlogo.svg';


const NavBar = (props) => {

    const { isAuthenticated, loginWithRedirect, loading, getTokenSilently } = props.auth;

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

                            <NavLink activeClassName="selected" to="/about" onClick={() => props.clickHandler()}>About</NavLink>

                        </li>

                        <li className="item">

                            <NavLink activeClassName="selected" to="/market" onClick={() => props.clickHandler()}>Dream Market</NavLink>
                        
                        </li>

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
                                    {/* determines whether you have been logged in previously or not */}
                            {isAuthenticated && (props.onAccountPage ? (<button onClick={(e) => {
                                e.preventDefault();
                                localStorage.removeItem("curr_user");
                                const envUrl = process.env.REACT_APP_FE_URL || 'http://localhost:3000';
                                const logoutUrl = envUrl.split('').map(char => {
                                    if (char === '/') return '%2F';
                                    if (char === ':') return '%3A';
                                    return char
                                }).join('')
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