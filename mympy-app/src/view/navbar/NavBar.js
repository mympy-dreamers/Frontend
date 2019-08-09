import React from 'react';
import { Link } from 'react-router-dom';
import Searchbar from '../../components/search_bar/DreamSearchbar';

import { Mixpanel } from '../../mixpanel/mixPanel';
import logo from '../../img/MIMPYlogo.svg';


// <script type="text/javascript">
//     mixpanel.track_links("#nav a", "click nav link", {
//         "referrer": document.referrer
//     });
// </script>

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    

    render(){
        return (
            <div className="main">
                <div className="nav-wrap">
                    <div className="left">
                        <Link to="/">
                            <img src={logo} alt="Company Logo" />
                        </Link>
                    </div> 
                    <div>
                        { this.props.show && <Searchbar/> }    
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
            </div>
        )
    }
}

export default NavBar;