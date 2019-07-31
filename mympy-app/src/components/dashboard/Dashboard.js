import React from 'react';
import { Route } from 'react-router-dom';

import UserBar from '../userBar/UserBar';
import Stats from '../stats/Stats';
import News from '../news/News';
import Featured from '../featured/Featured';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <div className="dash-main">
                <div className="top-bar">
                    <UserBar />
                </div>
                <div className="mid-sec">
                    <Stats />
                    <News />
                </div>
                <div className="feature">
                    <Featured />
                </div>
            </div>
        )
    }
}

export default Dashboard;