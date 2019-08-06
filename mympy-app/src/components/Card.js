import React from 'react';
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
		padding: 08%;
		color: black;
		background-color: #012345;

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

const Card = ({ dream }) => {
	return (

		<CardDiv className="card">
			<Link to={`/market/${dream.id}`} style={{ textDecoration: 'none' }}>

				<img className="card-img" src={dream.cardImg} alt="" />

				<div className="card-body">
					<div className="user-name">{dream.user.firstname + " " + dream.user.lastname}</div>
					<div className="title-city-wrapper">
						<div className="dream-title">{dream.title}</div>
						<div className="dream-city">{dream.user.city}</div>
					</div>
					<div className="description">{dream.shortDescription}</div>
					<ProgressBar now={60} />
					<div className="goal-remaining">{"$" + (dream.donationGoal - dream.donationsReceived) + " "} to go!</div>
					<div className="button-wrapper">
						<button className="donate-button">Learn More</button>
					</div>
				</div>
			</Link>
		</CardDiv>
	);
}

export default Card;