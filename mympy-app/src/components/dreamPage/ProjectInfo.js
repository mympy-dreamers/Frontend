import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// import { Button } from 'reactstrap';
import { sendMail, fetchUserById } from '../../actions';

import ProgressCircle from './ProgressCircle.js';
import EmailModal from '../emailModal/EmailModal';

import DonationModal from './DonationModal.js';


const ProjectInfoDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 18px 0 44px;
	
	.title {
		color: white;
		font-size: 2.8em;
		font-family: Poppins Medium, sans-serif;
		margin-bottom: 16px;
	}

	.received-goals-sections {
		margin: 14px 0 46px;

		.section-wrapper {
			display: flex;
			justify-content: center;

			.donationText {
				color: white;
				font-size: 1.4rem;
				font-family: Poppins Medium, sans-serif;
			}

			.donationNums {
				margin-right: 6px;
				color: #FFD164;
				font-size: 1.4rem;
				font-family: Poppins Medium, sans-serif;
				display: inline;
			}
		}

		.out-of {
			width: 100%;
			color: white;
			margin: 18px 0;
			font-size: 0.8rem;
			text-align: center;
		}
	}

	.user-name {
		color: white;
		font-size: 2em;
		font-family: Poppins Medium, sans-serif;
		border-bottom: 4px solid #FFD164;
		margin-bottom: 46px;
	}

	.data-viz {
		width: 200px;
		height: 200px;
		margin-bottom: 27px;
	}

	.days-left {
		color: white;
		font-size: 2em;
		margin-bottom: 50px;
	}

	.share-title {
		font-size: 1.8em;
		font-weight: bold;
		color: white;
		margin-bottom: 26px;
	}

	.share-buttons {
		display: flex;
		justify-content: space-between;
		width: 164px;
		margin-bottom: 30px;
		color: white;
	}

	.contact-button {
		width: 100%;
		margin: 0;
	}
`

//ProjectInfo component
//Includes ProgressCircle as well as user info, contact/email, and share buttons.
class ProjectInfo extends React.Component {

	componentDidUpdate(prevProps) {
		if (this.props.refreshVar !== prevProps.refreshVar) {
			this.props.fetchUserById(this.props.currDream.user_id) //Fetches dream by id and sets it to currDream
		}
	}

	render() {
		return (
			<ProjectInfoDiv>
				<h2 className="title">{this.props.currDream.dream_name}</h2>
				<h3 className="user-name">{this.props.dreamUser.username}{/*"BY " + user.firstname + " " + user.lastname*/}</h3>
				<div className="data-viz">
					<ProgressCircle
						donationGoal={this.props.currDream.donations_goal}
						donationsReceived={this.props.currDream.donations_received}
					/>
				</div>

				<div className='received-goals-sections'>
					<div className='section-wrapper'>
						<div className="donationNums">${this.props.currDream.donations_received}</div>
						<div className="donationText">{' Received'} </div>
					</div>
					<div className='out-of'>
						<div>~ of ~</div>
					</div>
					<div className='section-wrapper'>
						<div className="donationNums">${this.props.currDream.donation_goal}</div>
						<div className="donationText">{' Goal'}</div>
					</div>
				</div>

				{/* <h3 className="days-left">7 Days Left</h3> */}

				<div>
					<DonationModal />
				</div>
				<h4 className="share-title">SHARE PROJECT</h4>
				<div className="share-buttons">
					<i className="fab fa-facebook fa-5x"></i>
					<i className="fab fa-twitter fa-5x"></i>
					<i className="fab fa-instagram fa-5x"></i>
				</div>
				<div>
					<EmailModal />
				</div>
			</ProjectInfoDiv>
		);
	}
}//End of ProjectInfo

const mapStateToProps = ({ auth, dreams, users }) => {
	return {
		loggedUser: auth.user,
		currDream: dreams.currDream,
		dreamUser: users.user,
		refreshVar: users.refreshUser
	}
}

export default connect(mapStateToProps, { sendMail, fetchUserById })(ProjectInfo);