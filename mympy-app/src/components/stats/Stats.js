import React from 'react';
import { connect } from 'react-redux';

import UserProgressCircle from '../dreamPage/UserProgressCircle';

class Stats extends React.Component {
    constructor() {
        super();
        this.state = {
            dreamGoal: 0,
            dreamCurr: 0,
            
        }
    }

    getDreamData(){

        this.props.user.dreams && this.props.user.dreams.map(dream => {
            return (
                this.setState({
                    dreamGoal: dream.donation_goal,
                    dreamCurr: dream.donations_received,
                })
            )
        })
    }


    componentDidMount(){
        // setTimeout(() => {
            this.getDreamData();
        // }, 900);
    }

    componentDidUpdate(prevProps) {

        if (this.props.user.dreams !== prevProps.user.dreams) {

            this.getDreamData();

        }
    }


    render() {
        return(
            <div className="stats-main">
                <div className="myDreams">
                    <h1>My Dreams</h1>
                    <div className="bar">
                        <UserProgressCircle 
                            donationGoal={!this.state.dreamGoal ? 0 : this.state.dreamGoal}
                            donationsReceived={!this.state.dreamCurr ? 0 : this.state.dreamCurr}
                        />
                    </div>
                    {/* <button>more info</button> */}
                </div>
                <div className="support-dreams">
                    <h1>Dreams Supported</h1>
                    <div className="bar">
                        {/* <UserProgressCircle 
                            donationGoal={100}
                            donationsReceived={100}
                        /> */}
                        </div>
                    {/* <button>more info</button> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return {
      user: auth.user,
    }
  }

export default connect(mapStateToProps, { })(Stats);