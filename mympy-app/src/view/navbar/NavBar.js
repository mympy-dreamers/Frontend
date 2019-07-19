import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.scss';

const NavBar = () => {
    return (
        <div className="main">
            <div className="left">
                <h1>Image goes here!</h1>
            </div>
            <div className="right">
                <ul className="list">
                    <li className="item">
                    {/* Replace all 'href' with 'to' and all 'a' tags with 'Link' tags
                        once routes are available
                    */}
                        <a href="#">Search For Dreams</a>
                    </li>
                    <li className="item">
                        <a href="#">Sign Up</a>
                    </li>
                    <li className="item sign-in">
                        <a href="#">Sign In</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;