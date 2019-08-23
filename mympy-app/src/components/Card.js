import React from 'react';
import { Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { connect } from "react-redux";
import styled from 'styled-components';

const StyledCard = styled.div`
  border-radius: 20px;
  // margin: 4.4% 8%;

  .imgDiv {
    border-radius: 20px 20px 0 0;
    padding-top: 75%;
    background-position: center; 
    background-size: cover;
  }

	.card-body {
    color: black;
    background-color: #012345;
    border-radius: 0 0 20px 20px;
    .user-name {
      font-size: 2.2vw;
      margin-bottom: 0.4em;
      color: white;
    }
    .title-city-wrapper {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.2em;
      font-size: 1.8vw;
      color: white;
      .dream-title {
        margin-bottom: 26px
      }
    }

    .description {
      font-size: 1.5vw;
      margin-bottom: 1.8em;
      color: white;
    }

    .progress {
      height: 2.4em;
      width: 95%;
      margin: 0 auto;
      margin-bottom: 20px;
      .progress-bar {
        background-color: #FFD164;
      }
    }

    .goal-remaining{
      font-size: 1.2vw;
      text-align: center;
      margin-bottom: 2.2em;
      color: white;
    }

    .button-wrapper {
      display: flex;
      justify-content: center;
      width: 100%;
      .learn-more-button {
        height: 2.2em;				
        margin: 0;
        border: none;
        background-color: #FFD164;
        color: black;
        font-size: 1.4vw;
        font-weight: bold;
        margin-bottom: 0.6em;
      }
    }
	}
`

const Card = ({ dream }) => {
  return (
    <StyledCard>
      <Link to={`/market/${dream.id}`} style={{ textDecoration: 'none' }}>
        <div className="imgDiv" style={{ backgroundImage: `url(${dream.img_url})` }} />
        <div className="card-body">
          <div className="user-name">{dream.username}</div>
          <div className="title-city-wrapper">
            <div className="dream-title">{dream.dream_name}</div>
          </div>
          <div className="description">{dream.dream_short_description}</div>
          <ProgressBar now={dream.donations_received / dream.donation_goal * 100} />
          <div className="goal-remaining">{"$" + (dream.donation_goal - dream.donations_received) + " "} to go!</div>
          <div className="button-wrapper">
            <button className="learn-more-button">Learn More</button>
          </div>
        </div>
      </Link>
    </StyledCard>
  );
}

export default Card;
