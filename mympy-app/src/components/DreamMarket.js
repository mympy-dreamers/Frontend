import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../scss/dreamMarket.scss';

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
        		return <div className="card" key={dream.id}>
        			<Link to={`/DreamMarket/${dream.id}`}>

        				<img className="card-img" src={dream.cardImg} />

        				<div className="card-body">
        					<div className="user-name">{dream.user.firstname + " " + dream.user.lastname}</div>
        					<div className="dream-city">{dream.user.city}</div>
        					<div className="dream-title">{dream.title}</div>
        					<div className="description">{dream.shortDescription}</div>
        					<button className="donate-button">Give $25</button>
        				</div>
        			</Link>
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