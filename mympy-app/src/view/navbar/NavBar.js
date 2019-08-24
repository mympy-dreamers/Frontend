import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import Searchbar from '../../components/search_bar/DreamSearchbar'

import logo from '../../img/MIMPYlogo.svg';


const NavBar = (props) => {
    const { isAuthenticated, loginWithRedirect } = props.auth;
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
                            <Link to="/about">About</Link>
                        </li>
                        <li className="item">
                            <Link to="/market">Search For Dreams</Link>
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

                            {isAuthenticated && (props.onAccountPage ? (<button onClick={(e) => {
                                e.preventDefault();
                                localStorage.removeItem("curr_user");
                                const envUrl = process.env.REACT_APP_FE_URL || 'http://localhost:3000';
                                const logoutUrl = envUrl.split('').map(char => {
                                    if (char === '/') return '%2F';
                                    if (char === ':') return '%3A';
                                    return char
                                }).join('')
                                console.log(logoutUrl);
                                props.history.go(`https://mympy-dreamer.auth0.com/v2/logout?returnTo=${logoutUrl}`)
                            }}>Log out</button>)
                                : <Link to="/dashboard">Account</Link>)}
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