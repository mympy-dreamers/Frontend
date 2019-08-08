import React from "react";
import AboutMission from "./AboutMission";
import AboutProject from "./AboutProject.js";
import AboutTeam from "./AboutTeam.js"

import "./About.css";

const AboutUs = () => {
  return (
    <div>
      <AboutProject/>
      <AboutMission/>
      <AboutTeam/> 
    </div>
  );
};

export default AboutUs;
