import React from 'react';

import UserBar from '../userBar/UserBar';
import Stats from '../stats/Stats';
import News from '../news/News';
// import Feature from '../feature/Feature';

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
                    
                </div>
            </div>
        )
    }
}

export default Dashboard;