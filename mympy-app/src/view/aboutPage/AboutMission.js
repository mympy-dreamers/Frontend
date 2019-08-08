import React from "react";
import rainbowball from "../../img/rainbowball.svg";
import "./About.css";

const AboutMission = () => {
  return (
    <div>
      <div className="about3">
        <div className="about2">
          <div className="about1">
            <h1 className="header">Our Mission</h1>
            <p className="mission">
              Mympy Dreams is a marketplace where individuals can create a
              profile and post their project and needs and find funding from the
              Mymphy Dreams community.profile and post their project and needs
              and find funding from the Mymphy Dreams community.
            </p>
          </div>
        </div>
        <div>
          <img className="img2" src={rainbowball} />
        </div>
      </div>
      <div />
    </div>
  );
};

export default AboutMission;
