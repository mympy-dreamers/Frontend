import React from 'react';
import { connect } from 'react-redux';

import logo from '../../img/logo.svg';

class News extends React.Component {
    constructor() {
        super();
        this.state = {
            image: '',
        }
    }



    render() {
        return(
            <div className="news-main">
                <div className="img-wrap">
                    <img src={logo} alt="" />
                </div>
                <div className="text-wrap">
                    <p>We are currently in development!</p>
                </div>
            </div>
        )
    }
}


export default News;