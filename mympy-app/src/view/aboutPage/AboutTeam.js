import React from "react";
import group from "../../img/woman.svg";
import "./About.css";

const AboutTeam = () => {
  return (
    <div className="team">
      <div className="team1">
        <div className="team2">
          <h1 className="teamheader">The Mympy Team</h1>
          <p className="teamparagraph">
            Mymphy Project have nine members in a team.Each and every member
            have their own roles and responsibility like Team lead, UX Designers
            Frontend and Backend. Responsibility of team lead is to
            solve the problem of team, responsible keeping the team on track and
            staying available to help a team member with anything they may
            need. As well as UX Designer responsibility is to researching the product, 
            creating Personas and Scenarios,Creating Wireframes, Designing, prototyping, 
            product testing and so on. A front-end web developer is responsible for implementing
            visual elements that users see and interact with in a web
            application. Backend Coordinates with both our front end architect and
            our Team lead to make sure that our infrastructure is properly
            delivering upon user queries.
          </p>

          <div className="maindiv2">
            <div className="imagetext">
              <div className="teamimg">
                <img className="team-img1" src={group} />
              </div>
              <ul className="table">
                <li>Nick Stricker</li>
                <li>Team Lead</li>
                <li>
                  <a target="_blank" href="https://github.com/NickStrick">
                    https://github.com/NickStrick
                  </a>
                </li>
                <li>LinkIn</li>
                <li>Social Media</li>
              </ul>
            </div>

            <div className="imagetext">
              <div className="teamimg team-img2">
                <img className="team-img1" src={group} />
              </div>
              <ul className="table">
                <li>Alex Vargas</li>
                <li>UX Designer</li>
                <li>Github</li>
                <li>
                  <a href="https://www.linkedin.com/in/uxalexvargas">
                    linkedin.com/in/uxalexvargas
                  </a>
                  /
                </li>
                <li>
                  <a href="twitter:@Yor_AlexVargas">twitter:@Yor_AlexVargas</a>
                </li>
              </ul>
            </div>

            <div className="imagetext">
              <div className="teamimg">
                <img className="team-img1" src={group} />
              </div>
              <ul className="table">
                <li>Jared Parrish</li>
                <li>Full-Stack Developer</li>
                <li>Github</li>
                <li>
                  <a href="https://www.linkedin.com/in/jared-parrish/">
                    https://www.linkedin.com/in/jared-parrish/
                  </a>
                </li>
                <li>Social Media</li>
              </ul>
            </div>

            <div className="imagetext">
              <div className="teamimg team-img2">
                <img className="team-img1" src={group} />
              </div>
              <ul className="table">
                <li>Dakotah Hitze</li>
                <li>Full Stack Developer</li>
                <li>
                  <a href="https://github.com/HitzeD">
                    https://github.com/HitzeD
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/dakotah-hitze-2a9042100/">
                    https://www.linkedin.com/in/dakotah-hitze-2a9042100/
                  </a>
                </li>
                <li>Social Media</li>
              </ul>
            </div>

            <div className="imagetext">
              <div className="teamimg">
                <img className="team-img1" src={group} />
              </div>
              <ul className="table">
                <li>Tashi Woeser</li>
                <li>Full Stack Developer</li>
                <li>
                  <a href="https://github.com/Tai510">
                    https://github.com/Tai510
                  </a>
                </li>
                <li>LinkIn</li>
                <li>Social Media</li>
              </ul>
            </div>

            <div className="imagetext">
              <div className="teamimg team-img2">
                <img className="team-img1" src={group} />
              </div>
              <ul className="table">
                <li>Mylynh Nguyen</li>
                <li>Full Stack Developer</li>
                <li>Github</li>
                <li>
                  <a href="https://www.linkedin.com/in/mylynh-nguyen-1b8055126">
                    https://www.linkedin.com/in/mylynh-nguyen-1b8055126
                  </a>
                </li>
                <li>Social Media</li>
              </ul>
            </div>

            <div className="imagetext">
              <div className="teamimg">
                <img className="team-img1" src={group} />
              </div>
              <ul className="table">
                <li>Manju KC</li>
                <li>Full Stack Developer</li>
                <li>
                  <a href="https://github.com/Manjukcthapa?tab=repositories">
                    https://github.com/Manjukcthapa?tab=repositories
                  </a>
                </li>
                <li>LinkIn</li>
                <li>Social Media</li>
              </ul>
            </div>

            <div className="imagetext">
              <div className="teamimg team-img2">
                <img className="team-img1" src={group} />
              </div>
              <ul className="table">
                <li>Name</li>
                <li>Full Stack Developer</li>
                <li>Github</li>
                <li>LinkIn</li>
                <li>Social Media</li>
              </ul>
            </div>

            <div className="imagetext">
              <div className="teamimg">
                <img className="team-img1" src={group} />
              </div>
              <ul className="table">
                <li>Name</li>
                <li>Full Stack Developer</li>
                <li>Github</li>
                <li>LinkIn</li>
                <li>Social Media</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
