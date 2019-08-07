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


class UserBar extends React.Component {


    // isReady = () => {
    //     if (this.props.user.name === null) {
    //         return (
    //             <Spinner size="sm" color="secondary" />
    //         )
    //     } else {
    //         return (
    //             <h3>Hello {this.props.user.name.toUpperCase()}!</h3>
    //         )
    //     }
    // }

    // fetchUserInfo = id => {
    //     this.props.fetchUserById(id);
    // }

    // method for decoding a token

    // decodeToken = token => {
    //     const decodedToken = JSON.parse(atob(token.split('.')[1]));
    //     return decodedToken;
    // }

    render() {
        return (
            <div className="user-main">
                <div className="wrapper">
                    <div className="user-left">
                        {<h3>Hello {this.props.user.given_name.toUpperCase()}!</h3>}
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

                        <div className="user-tab develop">
                            <img src={journal} alt='pencil scribbling' />
                            <p>Journal</p>
                            <h6>(Under Development)</h6>
                        </div>

                        {/* <Link to="#"> */}
                        <div className="user-tab develop">
                            <img src={messageLogo} alt='message logo' />
                            <p>Messages</p>
                            <h6>(Under Development)</h6>
                        </div>
                        {/* </Link> */}
                        {/* <Link to="#"> */}
                        <div className="user-tab develop">
                            <img src={userLogo} alt='person with a pencil' />
                            <p>Edit Bio</p>
                            <h6>(Under Development)</h6>
                        </div>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ auth, users }) => {
    return {
        user: users.user
    }
}

export default connect(mapStateToProps, { fetchAllDreams, fetchUserById })(UserBar);