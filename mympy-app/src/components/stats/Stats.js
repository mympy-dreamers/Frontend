import React from 'react';

import ProgressCircle from '../dreamPage/ProgressCircle';

class Stats extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <div className="stats-main">
                <div className="myDreams">
                    <h1>My Dreams</h1>
                    <div className="bar">
                        <ProgressCircle 
                            donationGoal={100}
                            donationsReceived={75}
                        />
                      </div>
                    <button>more info</button>
                </div>
                <div className="support-dreams">
                    <h1>Dreams Supported</h1>
                    <div className="bar">
                        <ProgressCircle 
                            donationGoal={100}
                            donationsReceived={75}
                        />
                        </div>
                    <button>more info</button>
                </div>
            </div>
        )
    }
}

export default Stats;