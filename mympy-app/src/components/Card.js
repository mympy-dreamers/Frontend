import React from 'react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { fetchAllDreams } from '../actions/index';
import { connect } from "react-redux";
import ProgressBar from 'react-bootstrap/ProgressBar';
import styled from 'styled-components';
import './Card.scss';

class Card extends React.Component {

	componentDidMount() {
		this.props.fetchAllDreams();
	}

	render() {
		// console.log(this.props.searchDreams);
		let filteredDreams = this.props.dreams.filter(dream => dream.dream_name.toLowerCase().includes(this.props.searchDreams))
		// console.log(filteredDreams);
		let dreams = this.props.searchDreams ? filteredDreams : this.props.dreams
		return (
			<div className="marketWrapper">
				<div className="headingDiv">
					<h1>Make Dreams into VRearlity</h1>
				</div>
				<div className="marketDiv">

					{this.props.dreams && dreams.map(dream => (
						<div className="card" key={dream.id}>
							<Link to={`/market/${dream.id}`} style={{ textDecoration: 'none' }}>
								<div className="imgDiv" style={{ backgroundImage: `url(${dream.img_url})` }}>

								</div>

								<div className="card-body">
									<div className="user-name">{dream.username}</div>
									<div className="title-city-wrapper">
										<div className="dream-title">{dream.dream_name}</div>
									</div>
									<div className="description">{dream.dream_short_description}</div>
									<ProgressBar now={60} />
									<div className="goal-remaining">{"$" + (dream.donation_goal - dream.donations_received) + " "} to go!</div>
									<div className="button-wrapper">
										<button className="donate-button">Learn More</button>
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ dreams }) => ({
	dreams: dreams.dreams,
	searchDreams: dreams.searchDreams,
});


export default withRouter(
	connect(
		mapStateToProps,
		{ fetchAllDreams }
	)(Card)
);