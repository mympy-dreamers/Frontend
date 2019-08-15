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

    componentDidUpdate(prevProps) {
        if (this.props.user.dreams !== prevProps.user.dreams) {
            this.props.user.dreams.map(dream => {       
                return (
                    this.setState({
                        dreamGoal: this.state.dreamGoal + dream.donation_goal,
                        dreamCurr: this.state.dreamCurr + dream.donations_received,
                    })
                )
            })
          }
    }

    // componentDidMount(){
    //     setTimeout(() => {
    //         this.getDreamData();
    //     }, 900);
    // }

    getDreamData = () => {
        this.props.user.dreams && this.props.user.dreams.map(dream => {       
            return (
                this.setState({
                    dreamGoal: this.state.dreamGoal + dream.donation_goal,
                    dreamCurr: this.state.dreamCurr + dream.donations_received,
                })
            )
        })
    }


    render() {
        return(
            <div className="stats-main">
                <div className="myDreams">
                    <h1>My Dreams</h1>
                    <div className="bar">
                        <UserProgressCircle 
                            donationGoal={isNaN(this.state.dreamGoal) ? 0 : this.state.dreamGoal}
                            donationsReceived={isNaN(this.state.dreamCurr) ? 0 : this.state.dreamCurr}
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