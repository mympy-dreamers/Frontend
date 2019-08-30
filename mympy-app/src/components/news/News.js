import React from 'react';

import logo from '../../img/unusedImgs/logo.svg';


//Component that can be used to display information on the dashboard. Currently displays mympy logo - under development. 
class News extends React.Component {
    constructor() {
        super();
        this.state = {
            image: '',
        }
    }



    render() {
        return (
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