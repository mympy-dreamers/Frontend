import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TopSection	from './TopSection.js';
import RecentDonations from './RecentDonations.js';
import Tabs from './Tabs.js';
import Carousel	from './Carousel.js';

const DreamPageDiv = styled.div`
  display: flex;
  flex-direction: column;
	margin: 0 auto;
	width: 1200px;
`;

const MidSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8rem;
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
      	<TopSection dream={this.state.dream} />

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