import React from 'react';
import { connect } from 'react-redux';

import Card from '../Card.js';
import styled from 'styled-components';

const DreamMarketDiv = styled.div`
	
	.cards-container {
		display: flex;
		flex-wrap: wrap;
    padding: 0 1%;
    padding: 10em 20em 10em 40em;
    background-color:#194A80;

		.card-wrapper {
      width: 27.5%;
      margin: 0 3em;
      

      .card{
        margin: 1% 2%;
      }
		}
	}
`

class DreamMarket extends React.Component {
  constructor() {
    super();

  }



  render() {
    return (
      <DreamMarketDiv>
        <div className="cards-container">
          {this.props.dreams.map(dream => {
            //card
            return <div className="card-wrapper" key={dream.id}>
              <Card dream={dream} />
            </div>
          })}
        </div>
      </DreamMarketDiv>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dreams: state.dreams.dummyDreams
  }
}

export default connect(mapStateToProps)(DreamMarket);