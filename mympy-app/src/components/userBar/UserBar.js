import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';

import { fetchAllDreams, fetchUserById } from '../../actions';
import demo from '../../img/demo.jpg'
import cloudPencil from '../../img/userbar-img/cloudPencil.png';
import cloudPlus from '../../img/userbar-img/cloudPlus.png';
import journal from '../../img/userbar-img/journal.png';
import messageLogo from '../../img/userbar-img/messageLogo.png';
import userLogo from '../../img/userbar-img/userLogo.png';
import { useAuth0 } from "../../react-auth0-wrapper";

class UserBar extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            id: 25,
        }

    }

    componentDidMount() {
        this.props.fetchAllDreams();
        // this.fetchUserInfo();
    }

    isReady = () => {
        const { loading, user } = useAuth0();
        const name = user && !loading ? user.name : localStorage.getItem('username');
        if (name === null) {
            return (
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
        return (
            <div className="user-main">
                <div className="wrapper">
                    <div className="user-left">
                        {this.isReady()}
                        <img src={demo} alt='user' />
                    </div>
                    <div className="flexing">
                        <Link to="#">
                            <div className="user-tab">
                                <img src={cloudPlus} alt='cloud with a plus sign' />
                                <p>Create Dream</p>
                            </div>
                        </Link>
                        <Link to="#">
                            <div className="user-tab">
                                <img src={cloudPencil} alt='cloud with pencil inside' />
                                <p>Edit Dreams</p>
                            </div>
                        </Link>
                        <Link to="#">
                            <div className="user-tab">
                                <img src={journal} alt='pencil scribbling' />
                                <p>Journal</p>
                            </div>
                        </Link>
                        {/* <Link to="#"> */}
                        <div className="user-tab develop">
                            <img src={messageLogo} alt='message logo' />
                            <p>Messages</p>
                            <h6>(Under Develpoment)</h6>
                        </div>
                        {/* </Link> */}
                        {/* <Link to="#"> */}
                        <div className="user-tab develop">
                            <img src={userLogo} alt='person with a pencil' />
                            <p>Edit Bio</p>
                            <h6>(Under Develpoment)</h6>
                        </div>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { fetchAllDreams, fetchUserById })(UserBar);