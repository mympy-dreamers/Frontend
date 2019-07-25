import React from 'react';

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
                    <h5>Progress Here</h5>
                    <button>more info</button>
                </div>
                <div className="support-dreams">
                    <h1>Dreams Supported</h1>
                    <h5>Progress Here</h5>
                    <button>more info</button>
                </div>
            </div>
        )
    }
}

export default Stats;