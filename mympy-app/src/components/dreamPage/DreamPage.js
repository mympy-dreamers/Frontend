import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Carousel from './Carousel.js';
import Sidebar from './Sidebar.js';
import DreamPageBody from './DreamPageBody.js';
import { fetchDreamById } from '../../actions';

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
      // allUserDreams: []
    };
  }

  componentDidMount() {
    this.props.fetchDreamById(this.props.match.params.id);
    //Finds dream and sets to state
    // const thisDream = this.props.dreams.find(dream =>
    //   (parseInt(dream.id) === parseInt(this.props.match.params.id))
    // );

  }

  componentDidUpdate(prevProps) {
    if (this.props.currDream !== prevProps.currDream) {
      const thisDream = this.props.currDream;
      console.log(thisDream)
      console.log(this.props.dreams)
      this.setState({
        dream: thisDream,
        user: { username: thisDream.username }
        // allUserDreams: thisDream.user.dreams
      });
    }
  }

  render() {
    return (
      <DreamPageDiv>
        <div className="dream-page">
          <Carousel />
          <div className="sidebar-body">
            <Sidebar dream={this.props.currDream} user={this.state.user} />
            <DreamPageBody dream={this.state.dream} />
          </div>
        </div>
      </DreamPageDiv>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currDream: state.dreams.currDream,
    // user: state.auth.user,

  }
}

export default connect(mapStateToProps, { fetchDreamById })(DreamPage);