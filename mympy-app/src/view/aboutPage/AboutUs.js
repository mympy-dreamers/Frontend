import React from "react";
import AboutMission from "./AboutMission";
import AboutProject from "./AboutProject.js";
import AboutTeam from "./AboutTeam.js"

import "./About.scss"

const AboutUs = () => {
  return (
    <div id='about-us-page'>
      <AboutProject />
      <AboutMission />
      <AboutTeam />
    </div>
  );
};

export default AboutUs;
