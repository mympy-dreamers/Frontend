import React from "react";
import group from "../../img/woman.svg";

import "./About.css";

const AboutUs = () => {
  return (
    <div>
      <div className="maindiv">
        <div className="first">
          <div className="leftside">
            <h1 className="header0ne">
              ABOUT <span>US</span>
            </h1>
            <p>
              Mympy Dreams is a marketplace where individuals can create a
              profile and post their project and needs and find funding from the
              Mymphy Dreams community.profile and post their project and needs
              and find funding from the Mymphy Dreams community.
            </p>
          </div>
          <div className="rightside">
            <img src={group} />
          </div>
        </div>
      </div>

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
      </div>

      <div>
      </div>
    </div>
  );
};

export default AboutUs;
