import React from 'react';
import EditForm from './EditForm';
import { Link } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import styled from 'styled-components';

const CardDiv = styled.div`
	border: 1px solid grey;
	border-radius: 22px;

	.card-img {
		max-width: 100%;
		border-radius: 20px 20px 0 0;
	}

	.card-body {
		padding: 8%;
		color: black;

		.user-name {
			font-size: 2.2vw;
			margin-bottom: 0.4em;
		}

		.title-city-wrapper {
			display: flex;
			justify-content: space-between;
			margin-bottom: 0.2em;
			font-size: 1.8vw;
			.dream-title {
				margin-bottom: 26px
			}

			.dream-city {
			}
		}

		.description {
			font-size: 1.5vw;
			margin-bottom: 1.8em;
		}

		.progress {
			height: 40px;
			width: 95%;
			margin: 0 auto;
			margin-bottom: 20px;
			.progress-bar {
			  background-color: #92CC62;
			}
		}

		.goal-remaining{
			font-size: 1.2vw;
			text-align: center;
			margin-bottom: 2.2em;
		}

		.button-wrapper {
			display: flex;
			justify-content: center;
			.donate-button {
				height: 2.2em;				
				width: 46%;
				border: none;
				border-radius: 16px;
				background-color: #0B2343;
				color: white;
				font-size: 1.4vw;
				font-weight: bold;
				margin-bottom: 0.6em;
			}
		}
	}
`
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
                <CardDiv className="card">
                    <Link to={`/market/${dream.id}`} style={{ textDecoration: 'none' }}>

                        <img className="card-img" src={this.props.dream.dreampic} alt="" />

                        <div className="card-body">
                            <div className="user-name">{this.props.currentUser.username}</div>
                            <div className="title-city-wrapper">
                                <div className="dream-title">{this.props.dream.dream_name}</div>
                                <div className="dream-city">City</div>
                            </div>	
                            <div className="description">{this.props.dream.dream_short_description}</div>
                            <ProgressBar now={60} />
                            <div className="goal-remaining">{"$" + (this.props.dream.donation_goal - this.props.dream.donations_received) + " "} to go!</div>
                            <div className="button-wrapper">
                            <button className="donate-button" onClick={ this.toggleUpdate }>Update or Delete</button>
                            </div>
                        </div>
                    </Link>
		        </CardDiv>
                    {/* <div>
                    <img width="140px" height="200px" src={ this.props.dream.dreampic } alt="" />
                    <h3>{ this.props.dream.dream_name }</h3>
                    <p>{ this.props.dream.dream_short_description }</p>
                    <p>{ this.props.dream.dream_long_description }</p>
                    <p>Donations Received: { this.props.dream.donations_received }</p>
                    <p>Donation Goal: { this.props.dream.donation_goal }</p>
                    <button className='open-update' onClick={ this.toggleUpdate }>Update or Delete</button>
                    </div> */}
                }
            </div>
        )
    }
}

export default UserDream;