import React from 'react';
import { connect } from 'react-redux';

import UserProgressCircle from '../dreamPage/UserProgressCircle';
import { dreamPayFetch } from '../../actions';

//Container for data viz on dashboard
class Stats extends React.Component {
    constructor() {
        super();
        this.state = {
            dreamGoal: 0,
            dreamDonations: 0,
        }
    }

    componentDidMount() {

        // functions goes and retreives the information pertaining to the user about dreams they have funded

        this.props.dreamPayFetch(this.props.userId);

    }

    render() {
        return(
            <div className="stats-main">

                <div className="myDreams">

                    <h1>My Dreams</h1>

                    <div className="bar">
                        <UserProgressCircle 
                            donationGoal={this.props.userGoal}
                            donationsReceived={this.props.receivedDonations}
                        />

                    </div>
                    
                    {/* idea was for button to have a pop up showing a list and total of dream donations */}
                    {/* <button>more info</button> */}

                </div>

                <div className="support-dreams">

                    <h1>Total Donations</h1>

                    <div className="bar total-donations">
                            {/* should also be a data viz that did not get implemented as the proper information was not saved in the DB */}
                        ${this.props.receivedDonations}

                    </div>

                    {/* idea was for button to have a pop up showing a list and total of dream donations */}
                    {/* <button>more info</button> */}

                </div>

            </div>

        )

    }

}

const mapStateToProps = ({ auth, stripe }) => {
    return {
        userId: auth.user.id,
        totalUserDonations: stripe.userDonations,
        receivedDonations: auth.userDonations,
        userGoal: auth.userGoal
    }
}

export default connect(mapStateToProps, { dreamPayFetch })(Stats);