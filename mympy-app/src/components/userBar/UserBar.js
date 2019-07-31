import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';

import { fetchAllDreams, fetchUserById } from '../../actions';
import demo from '../../img/demo.jpg'

class UserBar extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            id: 25,
        }
        
    }

    componentDidMount(){
        this.props.fetchAllDreams();
        // this.fetchUserInfo();
    }

    isReady = () => {
        const name = localStorage.getItem('username');
        if(name === null){
            return(
                <Spinner size="sm" color="secondary" />
            )
        } else {
            return (
                <h3>Hello {name.toUpperCase()}!</h3>
            )
        }
    }

    fetchUserInfo = id => {
        this.props.fetchUserById(id);
    }

    // method for decoding a token

    decodeToken = token => {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        return decodedToken;
    }

    render() {
        return(
            <div className="user-main">
                <div className="wrapper">
                    <div className="user-left">
                        {this.isReady()}
                        <img src={demo} alt='user' />
                    </div>
                    <div className="flexing">
                        <Link to="#">
                            <div className="user-tab">
                                <img src='#' alt='cloud with a plus sign' />
                                <p>Create Dream</p>
                            </div>
                        </Link>
                        <Link to="#">
                            <div className="user-tab">
                                <img src='#' alt='cloud with pencil inside' />
                                <p>Edit Dreams</p>
                            </div>
                        </Link>
                        <Link to="#">
                            <div className="user-tab">
                                <img src='#' alt='pencil scribbling' />
                                <p>Journal</p>
                            </div>
                        </Link>
                        <Link to="#">
                            <div className="user-tab">
                                <img src='#' alt='message logo' />
                                <p>Messages</p>
                            </div>
                        </Link>
                        <Link to="#">
                            <div className="user-tab">
                                <img src='#' alt='person with a pencil' />
                                <p>Edit Bio</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { fetchAllDreams, fetchUserById })(UserBar);