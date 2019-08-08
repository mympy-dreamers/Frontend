import React from "react";
import group from "../../img/woman.svg";
import rainbowball from "../../img/rainbowball.svg";

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
        <div>
          <img className="img2" src={rainbowball} />
        </div>
      </div>
      <div />

      <div className="team1">
        <div className="team2">
          <h1 className="teamheader">The Mympy Team</h1>
          <p className="teamparagraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
