import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../img/logo.svg';


const NavBar = () => {
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
                    {/* Replace all 'href' with 'to' and all 'a' tags with 'Link' tags
                        once routes are available
                    */}
                        <Link to="/market">Search For Dreams</Link>
                    </li>
                    <li className="item">
                        <a href="#">Sign Up</a>
                    </li>
                    <li className="item sign-in">
                        <Link to="/login">Sign In</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;