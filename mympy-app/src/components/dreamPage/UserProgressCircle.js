import React from "react";
import { VictoryPie, VictoryLabel, VictoryAnimation } from "victory";

import styled from 'styled-components';

const PCdiv = styled.div`
  background-color: white;
  border-radius: 50%;
`

export default class ProgressCircle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0, data: this.getData(0)
    };
  }

  componentDidMount() {
    //if component mounts set state to given percent at an interval(constantly updating)
    //change percent to donationsRecived/donationGoal when back-end is seeded

    this.setStateInterval = window.setInterval(() => {
      // percent += (Math.random() * 25);
      let percent = (this.props.donationsReceived / this.props.donationGoal) * 100
      percent = (percent >= 100) ? 100 : percent;

      this.setState({
        percent, data: this.getData(percent)
      });
    }, 2000);
  }

  componentWillUnmount() {
    //if component unmounts clear interval
    window.clearInterval(this.setStateInterval);
  }

  getData(percent) {
    return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
  }

  render() {
    return (
      <PCdiv>
        <svg viewBox="0 0 400 400" width="100%" height="100%">
          <VictoryPie
            standalone={false}
            animate={{ duration: 1000 }}
            width={400} height={400}
            padding={0}
            data={this.state.data}
            innerRadius={164}
            cornerRadius={25}
            labels={() => null}
            style={{
              data: { fill: (d) => {
                /*Sets color of path based on percentage it's current at*/
                const color = d.y > 30 ? "#FFD164" : "red";
                return d.x === 1 ? color : "white";
              }}
            }}
          />
          <VictoryAnimation duration={1000} data={this.state}>
            {(newProps) => {
              return (
                /*Percentage inside the circle*/
                <VictoryLabel
                  textAnchor="middle" verticalAnchor="middle"
                  x={200} y={200}
                  text={`${Math.round(newProps.percent)}%`}
                  style={{ fontSize: 100 }}
                />
              );
            }}
          </VictoryAnimation>
        </svg>
      </PCdiv>
    );
  }
}