import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card.js';
import styled from 'styled-components';

const DreamMarketDiv = styled.div`
	
	.cards-container {
		display: flex;
		flex-wrap: wrap;
    padding: 0 1%;

		.card-wrapper {
			width: 33.33%;

      .card{
        margin: 1% 2%;
      }
		}
	}
`

class DreamMarket extends React.Component {
  constructor() {
  	super();

  	this.state = {

  	}
  }

  render() {
    return (
      <DreamMarketDiv>
        <div className="cards-container">
        	{this.props.dreams.map( dream => {
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

const mapStateToProps = ({ dreams }) => ({
	dreams
});

export default connect(mapStateToProps)(DreamMarket);