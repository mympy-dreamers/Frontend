import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TopSection	from './dreamPage/TopSection.js';
import RecentDonations from './dreamPage/RecentDonations.js';
import Tabs from './dreamPage/Tabs.js';
import Carousel	from './dreamPage/Carousel.js';

import '../scss/dreamPage.scss';

const DreamPageDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const MidSection = styled.div`
  display: flex;
  justify-content: center;
  // width: 70%;
`;

class DreamPage extends React.Component {
  constructor() {
  	super();

  	this.state = {
  		dream: {
  			recentDonations: []
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
      	<TopSection />

				<MidSection>
					<RecentDonations donations={this.state.dream.recentDonations} />
					<Tabs dream={this.state.dream} user={this.state.user} allUserDreams={this.state.allUserDreams}/>
				</MidSection>

				<Carousel />
      </DreamPageDiv>
    );
  }
}

const mapStateToProps = ({ dreams }) => ({
	dreams
});

export default connect(mapStateToProps)(DreamPage);