import React from 'react';
import styled from 'styled-components';

import ProgressCircle from './ProgressCircle.js'

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
		margin-bottom: 16px;
		color: white;
	}
`

const ProjectInfo = ({ dream, user }) => {
  return (
    <ProjectInfoDiv>
    	<h2 className="title">PROJECT NOMAD</h2>
    	<h3 className="user-name">{"BY " + user.firstname + " " + user.lastname}</h3>
    	<div className="data-viz">
				<ProgressCircle 
					donationGoal={dream.donationGoal} 
					donationsReceived={dream.donationsReceived}
				/>
			</div>
			<h3 className="days-left">7 Days Left</h3>
			<button className="donate-btn">Donate</button>
				<h4 className="share-title">SHARE PROJECT</h4>
				<div className="share-buttons">
					<i className="fab fa-facebook fa-5x"></i>
					<i class="fab fa-twitter fa-5x"></i>
					<i className="fab fa-instagram fa-5x"></i>
				</div>
    </ProjectInfoDiv>
  );
}

export default ProjectInfo;