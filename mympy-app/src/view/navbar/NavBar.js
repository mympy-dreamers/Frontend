import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import Searchbar from '../../components/search_bar/DreamSearchbar'

import logo from '../../img/logo.png';


const NavBar = (props) => {
    const { isAuthenticated, loginWithRedirect, logout, loading } = props.auth;
    return (
        <div className="main">
            <div className="left">
                <Link to="/">
                    <img src={logo} alt="Company Logo" />
                </Link>
            </div>
            <div>
                {props.show && <Searchbar />}
            </div>
            <div className="right">
                <ul className="list">
                    <li className="item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="item">
                        <Link to="/market">Search For Dreams</Link>
                    </li>
                    <li className="item">
                        {loading && <p>loading</p>}
                        {!isAuthenticated && (
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    localStorage.setItem('isLog', true);
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
const mapStateToProps = ({ auth }) => {
    return {
        auth: auth.auth
    }
}

export default connect(mapStateToProps, {})(NavBar);