import React from 'react';
import EditForm from './EditForm';
import ProgressBar from 'react-bootstrap/ProgressBar';
import styled from 'styled-components';
import './userDream.css';
import { fetchUserDreams } from '../../actions';
import { connect } from 'react-redux';

const CardDiv = styled.div`
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 20px 20px 0 0;
}
	.card-img {
        max-width: 25rem; 
        height: auto; 
        object-fit: contain; 
        border-radius: 20px 20px 0 0;
	}

	.card-body {
        color: white;

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
				margin-bottom: 1.5rem
			}

			.dream-city {
			}
		}

		.description {
			font-size: 1.5vw;
			margin-bottom: 1.8em;
		}

		.progress {
			height: 2rem;
			width: 95%;
			margin: 0;
            padding: 0;
			margin-bottom: 1rem;
			.progress-bar {
			  background-color: #ffd164;
			}
		}

		.goal-remaining{
            display: flex;
			font-size: 1.2vw;
			justify-content: center;
            padding: 0;
		}

		.button-wrapper {
			display: flex;
			justify-content: center;
            padding-top: 0.8rem;
			.donate-button {
				height: 2.5rem;				
				width: 46%;
				border: 1px solid grey;
                background-color: #ffd164;
				border-radius: 2rem;
				color: black;
				font-size: 1rem;
				margin-bottom: 0.6em;
                flex-direction: row;
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

    delete = () => {
        this.props.deleteDream(this.props.dream.id)
    }

    render() {
        return (
            <div className="edit-container">
                {this.state.isUpdating ?
                    <EditForm
                        dream={this.props.dream}
                        updateDream={this.props.updateDream}
                        deleteDream={this.props.deleteDream}
                        toggleUpdate={this.toggleUpdate}
                        currentUser={this.props.currentUser} />

                    :
                    <div className="dream-card w3-animate-left">
                        <CardDiv className="card">
                            <img className="card-img" src={this.props.dream.img_url} alt="" />

                            <div className="card-body">
                                <div className="user-name">{this.props.currentUser.username}</div>
                                <div className="title-city-wrapper">
                                    <div className="dream-title">{this.props.dream.dream_name}</div>
                                </div>
                                <div className="description">{this.props.dream.dream_short_description}</div>
                                <ProgressBar now={(parseInt(this.props.dream.donations_received) / parseInt(this.props.dream.donation_goal)) * 100} />
                                <div className="goal-remaining">Only {"$" + (this.props.dream.donation_goal - this.props.dream.donations_received) + " "} to go towards ${this.props.dream.donation_goal}!</div>
                                <div className="button-wrapper">
                                    <button className="donate-button" onClick={this.toggleUpdate}>Update</button>
                                    <button className="donate-button"
                                        onClick={()=>
                                            window.confirm("Are you sure you wish to delete this item?") &&
                                            this.delete()
                                        }
                                    >Delete</button>
                                </div>
                            </div>
                        </CardDiv>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      dreams: state.dreams.userDreams,
      user: state.auth.user
    }
  }
  
  
  export default connect(
    mapStateToProps, { fetchUserDreams }
  )(UserDream);
  