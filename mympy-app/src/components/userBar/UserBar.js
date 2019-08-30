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


//Menu that appears for logged in users that allows for navigation throughout the site. 
class UserBar extends React.Component {

    componentDidMount() {
        console.log(this.props.authZeroUser);
    }

    clickHandler = e => { //Animates UserBar -- toggles opening and closing of bar
        let classes = document.querySelector('.nav-tab-wrapper').className;
        document.querySelector('.nav-tab-wrapper').className = (
            (classes === 'nav-tab-wrapper') ?
                (classes + ' active') :
                classes.replace(' active', '')
        )
        let appEle = document.querySelector('.page-container');
        if (appEle) {
            let appClasses = appEle.className;
            document.querySelector('.page-container').className = (
                (appClasses.includes('page-container') && appClasses.includes('user-nav-active')) ?
                    appClasses.replace(' user-nav-active', '') :
                    (appClasses + ' user-nav-active')
            )
        }

    }

    render() {
        return (
            <div className="user-main">
                <div className="nav-tab-wrapper active" >
                    <div className="user-left">
                        <img src={this.props.authZeroUser.picture} alt='user' />
                        <h3>Hello, {this.props.authZeroUser.given_name.toUpperCase() + " " + this.props.authZeroUser.family_name.toUpperCase()}!</h3>
                    </div>
                    <div className="sub-nav">
                        <Link to="/addDream">
                            <div className="nav-icon" onClick={this.clickHandler}>
                                <img src={cloudPlus} alt='cloud with a plus sign' />
                                <p>Create Dream</p>
                            </div>
                        </Link>
                        <Link to="/user-dreams">
                            <div className="nav-icon" onClick={this.clickHandler}>
                                <img src={cloudPencil} alt='cloud with pencil inside' />
                                <p>Edit Dreams</p>
                            </div>
                        </Link>

                        <div className="nav-icon develop">
                            <img src={journal} alt='pencil scribbling' />
                            <p>Journal</p>
                        </div>

                        {/* <Link to="#"> */}
                        <div className="nav-icon develop">
                            <img src={messageLogo} alt='message logo' />
                            <p>Messages</p>
                        </div>
                        {/* </Link> */}
                        {/* <Link to="#"> */}
                        <div className="nav-icon develop">
                            <img src={userLogo} alt='person with a pencil' />
                            <p>Edit Bio</p>
                        </div>
                        {/* </Link> */}
                    </div>
                </div>
                <div className="arrow-tab" onClick={this.clickHandler} >
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