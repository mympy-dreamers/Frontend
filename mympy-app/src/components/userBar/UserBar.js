import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';

import { fetchAllDreams } from '../../actions';
import demo from '../../img/demo.jpg'

class UserBar extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            id: 0,
        }
        
    }

    componentDidMount(){
        this.props.fetchAllDreams();
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
                        <div className="user-tab">
                            <img src='#' alt='cloud with a plus sign' />
                            <p>Create Dream</p>
                        </div>
                        <div className="user-tab">
                            <img src='#' alt='cloud with pencil inside' />
                            <p>Edit Dreams</p>
                        </div>
                        <div className="user-tab">
                            <img src='#' alt='pencil scribbling' />
                            <p>Journal</p>
                        </div>
                        <div className="user-tab">
                            <img src='#' alt='message logo' />
                            <p>Messages</p>
                        </div>
                        <div className="user-tab">
                            <img src='#' alt='person with a pencil' />
                            <p>Edit Bio</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { fetchAllDreams })(UserBar);