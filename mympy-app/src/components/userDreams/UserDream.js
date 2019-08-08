import React from 'react';
import EditForm from './EditForm'

class UserDream extends React.Component {
    state = {
        isUpdating: false
    }

    toggleUpdate = () => {
        this.setState({ isUpdating: !this.state.isUpdating })
    }

    render() {
        return(
            <div className="dream-card">
                {this.state.isUpdating ? 

                    <EditForm  
                    dream={ this.props.dream } 
                    updateDream={ this.props.updateDream }
                    deleteDream={ this.props.deleteDream }
                    toggleUpdate={ this.toggleUpdate }
                    currentUser={ this.props.currentUser } />

                :
                    <div>
                    <img width="140px" height="200px" src={ this.props.dream.dreampic } alt="" />
                    <h3>{ this.props.dream.dream_name }</h3>
                    <p>{ this.props.dream.dream_short_description }</p>
                    <p>{ this.props.dream.dream_long_description }</p>
                    <p>Donations Received: { this.props.dream.donations_received }</p>
                    <p>Donation Goal: { this.props.dream.donation_goal }</p>
                    <button className='open-update' onClick={ this.toggleUpdate }>Update or Delete</button>
                    </div>
                }
            </div>
        )
    }
}

export default UserDream;