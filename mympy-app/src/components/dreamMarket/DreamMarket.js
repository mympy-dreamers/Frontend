import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from '../search_bar/DreamSearchbar'
class DreamMarket extends React.Component {
  constructor() {
  	super();

  	this.state = {

  	}
  }
  render() {
	let filteredDreams = this.props.dreams.filter(dream => dream.title.includes(this.props.searchDreams))
	let dreams = this.props.searchDreams ? filteredDreams : this.props.dreams
	
    return (
      <div className="dream-market">
	
		  <SearchBar />
		  
        <div className="cards-container">
        	{dreams.map( dream => {

        		//card
        		return <div className="card-wrapper">
	        		<div className="card" key={dream.id}>
	        			<Link to={`/market/${dream.id}`} style={{ textDecoration: 'none' }}>

	        				<img className="card-img" src={dream.cardImg} />

	        				<div className="card-body">
	        					<div className="user-name">{dream.user.firstname + " " + dream.user.lastname}</div>
	        					<div className="title-city-wrapper">
	        						<div className="dream-title">{dream.title}</div>
	        						<div className="dream-city">{dream.user.city}</div>
	        					</div>	
	        					<div className="description">{dream.shortDescription}</div>
	        					<div className="goal-remaining">{"$" + (dream.donationGoal - dream.donationsReceived) + " "} to go!</div>
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

const mapStateToProps = ({ dreams, searchDreams }) => ({
	dreams,
	searchDreams
});

export default connect(mapStateToProps)(DreamMarket);