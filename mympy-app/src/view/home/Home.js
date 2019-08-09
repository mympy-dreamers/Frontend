import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Us from '../us/Us';
import Carousel from '../carousel/Carousel';
import { setLog } from '../../actions/index.js';

import MidSec from '../midSec/MidSec';
import Support from '../supporter/Supporter';
import Dreamer from '../dreamer/Dreamer';

import swirl from '../../img/swirl.png';
import bPoint from '../../img/break.png';
import rocket from '../../img/rocket.svg';

const breakStyle = {
    width: "100%",
    height: "450px",
    backgroundImage: `url(${bPoint})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
}

const bottomStyle = {
    width: "100%",
    height: "450px",
    backgroundImage: `url(${swirl})`,
}

class Home extends React.Component {

    componentDidUpdate(prevProps) {
        if (prevProps.firstLogin !== this.props.firstLogin) this.props.history.push('/dashboard')
    }

    render() {
        return (
            <div className="home-main">
                <Carousel id="top" />
                <div className="break" style={breakStyle}>
                </div>
                <div className="rocket-contain">
                    <a href="#top">
                        <img className="rocket" src={rocket} alt="" />
                    </a>
                    <Us />
                    <MidSec />
                    <Support />
                    <div className="break" style={breakStyle}>
                    </div>
                    <Dreamer />
                    <div className="break" style={bottomStyle}>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ auth, users }) => {
    return {
        isAuthenticated: auth.auth.isAuthenticated,
        firstLogin: users.firstLogin,
    }
}
export default connect(mapStateToProps, { setLog })(Home);