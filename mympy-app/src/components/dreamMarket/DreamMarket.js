import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './dreamMarket.scss';

class DreamMarket extends React.Component {
  constructor() {
  	super();

  	this.state = {

  	}
  }

  render() {
    return (
      <div className="dream-market">
        <div className="cards-container">
        	{this.props.dreams.map( dream => {

        		//card
        		return  <div className="card-wrapper" key={dream.id} >
	        		<div className="card" >
	        			<Link to={`/market/${dream.id}`} style={{ textDecoration: 'none' }}>

	        				<img className="card-img" src={dream.cardImg} />

	        				<div className="card-body">
	        					<h2 className="user-name">{dream.user.firstname + " " + dream.user.lastname}</h2>
	        					<div className="title-city-wrapper">
	        						<h3 className="dream-title">{dream.title}</h3>
	        						<h3 className="dream-city">{dream.user.city}</h3>
	        					</div>	
	        					<p className="description">{dream.shortDescription}</p>
	        					<h5 className="goal-remaining">{"$" + (dream.donationGoal - dream.donationsReceived) + " "} to go!</h5>
	        					<div className="button-wrapper">
	        						<button className="donate-button">Give $25</button>
	        					</div>
	        				</div>
	        			</Link>
	        		</div>
	        	</div>
        	})}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ dreams }) => ({
	dreams
});

export default connect(mapStateToProps)(DreamMarket);