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
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "37%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <button>more info</button>
                </div>
                <div className="support-dreams">
                    <h1>Dreams Supported</h1>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "79%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <button>more info</button>
                </div>
            </div>
        )
    }
}

export default Stats;