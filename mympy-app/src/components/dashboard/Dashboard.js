import React from 'react';

import UserBar from '../userBar/UserBar';
import Stats from '../stats/Stats';
import News from '../news/News';
import Featured from '../featured/Featured';

const Dashboard = () => {

    return (
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

export default Dashboard;