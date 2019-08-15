import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// import { Button } from 'reactstrap';
import { sendMail } from '../../actions';

import ProgressCircle from './ProgressCircle.js';
import EmailModal from '../emailModal/EmailModal';

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

	.donationText {
		color: white;
		font-size: 2.8em;
		font-family: Poppins Medium, sans-serif;
		margin-bottom: 16px;
	}

	.donationNums {
		color: #FFD164;
		font-size: 2.8em;
		font-family: Poppins Medium, sans-serif;
		margin-bottom: 16px;
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

	.donate-btn {
		width: 144px;
		height: 70px;
		border-radius: 40px;
		background-color: #FFD164;
		color: black;
		font-size: 2.8em;
		font-weight: bold;
		font-family: Helvetica, sans-serif;;
		border: none;
		outline: none;
		margin-bottom: 56px;
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



class ProjectInfo extends React.Component {

	render() {
		return (
			<ProjectInfoDiv>
				<h2 className="title">{this.props.currDream.dream_name}</h2>
				<h3 className="user-name">{this.props.loggedUser.username}{/*"BY " + user.firstname + " " + user.lastname*/}</h3>
				<div className="data-viz">
					<ProgressCircle
						donationGoal={this.props.currDream.donations_goal}
						donationsReceived={this.props.currDream.donations_received}
					/>
				</div>

				<p className="donationText">Goal</p>
				<p className="donationNums">{this.props.currDream.donation_goal}</p><br /><br />
				<p className="donationText">Received<br /></p> <p className="donationNums">{this.props.currDream.donations_received}</p><br />>

				{/* <h3 className="days-left">7 Days Left</h3> */}
				<button className="donate-btn">Donate</button>
				<h4 className="share-title">SHARE PROJECT</h4>
				<div className="share-buttons">
					<i className="fab fa-facebook fa-5x"></i>
					<i className="fab fa-twitter fa-5x"></i>
					<i className="fab fa-instagram fa-5x"></i>
				</div>
				<div>
					{/* <Button onClick={this.handleMail} className="contact-button" outline color="info">Contact Dreamer</Button>{' '} */}
					<EmailModal />
				</div>
			</ProjectInfoDiv>
		);
	}
}

const mapStateToProps = ({ auth, dreams }) => {
	return {
		loggedUser: auth.user,
		currDream: dreams.currDream
	}
}

export default connect(mapStateToProps, { sendMail })(ProjectInfo);