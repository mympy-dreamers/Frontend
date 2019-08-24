import React from 'react';
import { fetchAllDreams } from '../actions/index';
import { connect } from "react-redux";
// import ProgressBar from 'react-bootstrap/ProgressBar';
import styled from 'styled-components';

import Card from './Card.js'

const StyledDreamMarket = styled.div`
  display: flex;
  flex-direction: column;
  background-color:#194A80;
  // height: 100vh;
  padding: 3% 11%;
  font-family: Open Sans, sans-serif;

  .headingDiv {
  	margin-bottom: 4em
    h1 {
      font-size: 4em;
      font-weight: bold;
      color: white;
      padding-bottom: 1em;
      border-bottom: 4px solid #FFD164;
    }
  } 

  .marketDiv{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: flex-start;

    .cardWidth {
    	width: 33.33%;
      padding: 1% 3%;
    }
  }
`

class DreamMarket extends React.Component {

  componentDidMount() {
    this.props.fetchAllDreams();
  }

  render() {
    let filteredDreams = this.props.dreams.filter(dream => dream.dream_name.toLowerCase().includes(this.props.searchDreams))
    let dreams = this.props.searchDreams ? filteredDreams : this.props.dreams
    return (
      <StyledDreamMarket>
        <div className="headingDiv">
          <h1>Dream Market</h1>
        </div>
        <div className="marketDiv">
          {this.props.dreams && dreams.map(dream => (
            <div className="cardWidth" key={dream.id}>
              <Card dream={dream} />
            </div>
          ))}
        </div>
      </StyledDreamMarket>
    );
  }
}

const mapStateToProps = ({ dreams }) => ({
  dreams: dreams.dreams,
  searchDreams: dreams.searchDreams,
});

export default connect(mapStateToProps, { fetchAllDreams })(DreamMarket)