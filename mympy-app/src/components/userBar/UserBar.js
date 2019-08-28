import React from 'react';
import { connect } from 'react-redux';
// import { Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';

import { fetchAllDreams, fetchUserById } from '../../actions';
import cloudPencil from '../../img/userbar-img/cloudPencil.png';
import cloudPlus from '../../img/userbar-img/cloudPlus.png';
import journal from '../../img/userbar-img/journal.png';
import messageLogo from '../../img/userbar-img/messageLogo.png';
import userLogo from '../../img/userbar-img/userLogo.png';
import arrow from '../../img/arrow-down.png';

class UserBar extends React.Component {

    componentDidMount(){
        console.log(this.props.authZeroUser);
    }

    clickHandler = e => {
        console.log(document.querySelector('.nav-tab-wrapper'))
        // const classes = document.querySelector('.nav-tab-wrapper').className
        // classes.inludes(' active') ?
        // classes.replace(' active', '') :
        // (classes += ' active')
    }

    render() {
        return (
            <div className="user-main">
                <div className="nav-tab-wrapper" >
                    <div className="user-left">
                        <h3>Hello {this.props.authZeroUser.given_name.toUpperCase() + " " + this.props.authZeroUser.family_name.toUpperCase()}!</h3>
                        <img src={this.props.authZeroUser.picture} alt='user' />
                    </div>
                    <div className="flexing">
                        <Link to="/addDream">
                            <div className="user-tab">
                                <img src={cloudPlus} alt='cloud with a plus sign' />
                                <p>Create Dream</p>
                            </div>
                        </Link>
                        <Link to="/user-dreams">
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
                <div className="arrow" onClick={this.clickHandler()} >
                    <img src={arrow} alt='' />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ auth, users }) => {
    return {
        authZeroUser: users.authZeroUser,
        users: users
    }
}

export default connect(mapStateToProps, { fetchAllDreams, fetchUserById })(UserBar);