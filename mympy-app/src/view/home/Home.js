import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Us from '../us/Us';
import Selector from '../selector/Selector';
import Carousel from '../carousel/Carousel';
import { setLog } from '../../actions/index.js';

class Home extends React.Component {

    componentDidUpdate(prevProps) {
        if (prevProps.firstLogin !== this.props.firstLogin) this.props.history.push('/dashboard')
    }
    render() {
        return (
            <div>
                <Carousel />
                <Us />
                <Selector />
            </div >
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