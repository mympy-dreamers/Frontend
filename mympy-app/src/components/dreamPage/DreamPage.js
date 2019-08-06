import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Carousel	from './Carousel.js';
import Sidebar from './Sidebar.js';
import DreamPageBody from './DreamPageBody.js';

import * as vars from '../../scss/general/_variables.scss';

const DreamPageDiv = styled.div`
  background: linear-gradient(0deg, #7647b6 0%, #194980 100%);
  font-family: Open Sans, sans-serif;
  .dream-page {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1124px;
    padding-bottom: 100px;

    .sidebar-body {
      display:flex;
    }
  }
`;

class DreamPage extends React.Component {
  constructor() {
  	super();

  	this.state = {
  		dream: {
			id: null,
			cardImg: '',
			shortDescription: "",
			longDescription: "",
			donationsReceived: 0,
			donationGoal: 0,
  			recentDonations: [],
  		},
  		user: {
  			username: "",
			firstname: "",
			lastname: "",
			city: "",
  		},
  		allUserDreams: []
  	};
  }

  componentDidMount() {
  	//Finds dream and sets to state
  	const thisDream = this.props.dreams.find( dream => 
  		(parseInt(dream.id) === parseInt(this.props.match.params.id)) 
  	);
  	this.setState({
  		dream: thisDream,
  		user: thisDream.user,
  		allUserDreams: thisDream.user.dreams
  	});
  }

  render() {
    return (
      <DreamPageDiv>
        <div className="dream-page">
  				<Carousel />
          <div className="sidebar-body">
            <Sidebar dream={this.state.dream} user={this.state.user}/>
            <DreamPageBody dream={this.state.dream}/>
          </div>
        </div>
      </DreamPageDiv>
    );
  }
}

const mapStateToProps = ({ dreams }) => ({
	dreams
});

export default connect(mapStateToProps)(DreamPage);