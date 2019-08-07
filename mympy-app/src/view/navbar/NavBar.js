import React from 'react';
import { Link } from 'react-router-dom';
import Searchbar from '../../components/search_bar/DreamSearchbar'

import logo from '../../img/MIMPYlogo.svg';


const NavBar = (props) => {
    return (
        <div className="main">
            <div className="left">
                <Link to="/">
                    <img src={logo} alt="Company Logo" />
                </Link>
            </div>
            <div>
                { props.show && <Searchbar/> }    
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
                        <Link to="/register">Sign Up</Link>
                    </li>
                    <li className="item">
                        <Link to="/login">Sign In</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;