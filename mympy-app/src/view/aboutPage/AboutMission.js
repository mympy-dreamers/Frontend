import React from "react";
import rainbowball from "../../img/rainbowball.svg";

const AboutMission = () => {
  return (
    <div>
      <div className="about3">
        <div className="about2">
          <div className="about1">
            <h1 className="header">Our Mission</h1>
            <p className="mission">
              Mympy is on a mission to close the poverty gap in VR technology by
              creating a low barrier entry into the field of VR development for
              low-income individuals. Mympy dream is a marketplace where
              individuals can create a profile and post their project and needs
              and find funding from the Mympy Dreams community.
            </p>
          </div>
        </div>
        <div>
          <img className="img2" src={rainbowball} alt='rain ball' />
        </div>
      </div>
      <div />
    </div>
  );
};

export default AboutMission;
