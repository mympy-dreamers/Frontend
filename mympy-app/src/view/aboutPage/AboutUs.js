import React from "react";
import AboutMission from "./AboutMission";
import AboutProject from "./AboutProject.js";
import AboutTeam from "./AboutTeam.js"

import "./About.scss"

class AboutUs extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id='about-us-page'>
        <AboutProject />
        <AboutMission />
        <AboutTeam />
      </div>
    );
  }

};

export default AboutUs;
