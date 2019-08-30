import React from 'react';

import UserBar from '../userBar/UserBar';
import Stats from '../stats/Stats';
import News from '../news/News';
import Featured from '../featured/Featured';
import styled from 'styled-components';

const StyledDashboard = styled.div`
    display: flex;
    flex-direction: column;
    background: rgb(118,71,182);
    background: linear-gradient(0deg, rgba(118,71,182,1) 0%, rgba(25,73,128,1) 100%);
    padding: 0 10%;
    font-family: Roboto, sans-serif;
    padding-bottom: 2%;

    .mid-sec {
        margin-top: 3.4%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        text-align: center;
        margin-bottom: 3.4%;
    }
`

// Dashboard componenet uses abstracted components to render proper information

const Dashboard = () => {

    return (
        <StyledDashboard className='page-container'>

            <div className="mid-sec">

                <Stats />
                <News />
                
            </div>

            <div className="feature">
                <Featured />
            </div>

        </StyledDashboard>
    )

}

export default Dashboard;  