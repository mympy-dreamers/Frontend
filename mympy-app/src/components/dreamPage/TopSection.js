import React from 'react';
import styled from 'styled-components';

import ProgressCircle from './ProgressCircle.js'

const TopSectionDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 8rem;
	height: 500px;
  border: 1px solid black;

  .banner {
		width: 70%;
  }

  .right-dash {
  	display: flex;
		flex-direction: column;
		align-items: center;
		width: 30%;
		padding: 32px;

		.data-viz {
			width: 170px;
			height: 170px;
			margin-bottom: 16px;
		}

		.days-left {
			font-size: 22px;
			font-weight: bold;	
			margin-bottom: 20px;
		}

		.give-btn {
			width: 160px;
			height: 66px;
			border-radius: 33px;
			background-color: #0A2243;
			color: white;
			font-size: 26px;
			font-weight: bold;
			border: none;
			margin-bottom: 24px;
		}

		.share-title {
			font-size: 18px;
			font-weight: bold;
			margin-bottom: 8px;
		}

		.share-buttons {
			display: flex;
			justify-content: space-between;
			width: 116px;
			margin-bottom: 16px;
		}
		.contact-section {
			display: flex;
			width: 119px;
			justify-content: space-between;
			align-items: center;
			
			h4 {
				font-size: 18px;
				font-weight: bold;
			}
		}
  }
`;

const TopSection = ({ dream }) => {
	return (
		<TopSectionDiv>
			<img className="banner" src="https://images.unsplash.com/photo-1506031765313-0bc574a405f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80" />
  		
  		<div className="right-dash">
  			<div className="data-viz">
  				<ProgressCircle 
  					donationGoal={dream.donationGoal} 
  					donationsReceived={dream.donationsReceived}
  				/>
  			</div>
				<h3 className="days-left">7 Days Left</h3>
				<button className="give-btn"><img />Give</button>
				<h4 className="share-title">Share Dream</h4>
				<div className="share-buttons">
					<i className="fab fa-facebook fa-5x"></i>
					<i className="fab fa-instagram fa-5x"></i>
				</div>
				<div className="contact-section">
					<h4>CONTACT</h4>
					<i className="fas fa-envelope fa-2x"></i>
				</div>

  		</div>
   	</TopSectionDiv>
	)
}

export default TopSection;