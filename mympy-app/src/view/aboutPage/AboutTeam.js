import React from "react";
import teampic from "../../img/team.jpg";
import "./About.css";
import teamlead from "../../img/teampic/teamlead.jpg";
import Alexpic from "../../img/teampic/Alex.png";
import Dakotapic from "../../img/teampic/Dakota.jpg";
import Jaredpic from "../../img/teampic/Jared.png";
import Luispic from "../../img/teampic/Luis.jpg";
import Mylynhpic from "../../img/teampic/Mylynh.jpg";
import Tashipic from "../../img/teampic/tashi.png";

const AboutTeam = () => {
  return (
    <div className="team">
      <div className="team1">
        <div className="team2">
          <h1 className="teamheader">The Mympy Team</h1>
          <p className="teamparagraph">
            Mymphy Project has nine team members which include Team lead, UX
            Designer, Frontend and Backend Engineers. Every member has their
            roles and responsibility. Responsibility of team lead is to solve
            the problem of the team, responsible for keeping the team on track
            and staying available to help a team member if they have any issues.
            UX Designer responsibility is to do product research, create
            personas and scenarios, create wireframes, design, prototype, and
            test. A front-end web developer is responsible for implementing
            visual elements that users see and interact within a web
            application. Backend engineer coordinates with both front-end
            engineer and Team lead making sure all our API's are giving the
            correct result to user queries.
          </p>

          <div className="maindiv2">
            <div className="imagetext">
              <div className="teamimg">
                <img className="team-img1" src={teamlead} />
              </div>
              <ul className="table">
                <li>Nick Stricker</li>
                <li>Team Lead</li>
                <div className="icons">
                  <li>
                    <a target="_blank" href="https://github.com/NickStrick">
                      <i class="fab fa-github fa-2x" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fab fa-linkedin fa-2x" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fab fa-twitter-square fa-2x" />
                    </a>
                  </li>
                </div>
              </ul>
            </div>

            <div className="imagetext">
              <div className="teamimg team-img2">
                <img className="team-img1" src={Alexpic} />
              </div>
              <ul className="table">
                <li>Alex Vargas</li>
                <li>UX Designer</li>
                <div className="icons">
                  <li>
                    <a target="_blank" href="">
                      <i class="fab fa-github fa-2x" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/uxalexvargas">
                      <i class="fab fa-linkedin fa-2x" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/Yor_AlexVargas">
                      <i class="fab fa-twitter-square fa-2x" />
                    </a>
                  </li>
                </div>
              </ul>
            </div>

            <div className="imagetext">
              <div className="teamimg">
                <img className="team-img1" src={Jaredpic} />
              </div>
              <ul className="table">
                <li>Jared Parrish</li>
                <li>Full-Stack Developer</li>
                <div className="icons">
                  <li>
                    <a href="">
                      <i class="fab fa-github fa-2x" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/jared-parrish/">
                      <i class="fab fa-linkedin fa-2x" />
                    </a>
                  </li>

                  <li>
                    <a href="">
                      <i class="fab fa-twitter-square fa-2x" />
                    </a>
                  </li>
                </div>
              </ul>
            </div>

            <div className="imagetext">
              <div className="teamimg team-img2">
                <img className="team-img1" src={Dakotapic} />
              </div>
              <ul className="table">
                <li>Dakotah Hitze</li>
                <li>Full Stack Developer</li>
                <div className="icons">
                  <li>
                    <a href="https://github.com/HitzeD ">
                      <i class="fab fa-github fa-2x" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/dakotah-hitze-2a9042100/">
                      <i class="fab fa-linkedin fa-2x" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fab fa-twitter-square fa-2x" />
                    </a>
                  </li>
                </div>
              </ul>
            </div>

            <div className="imagetext">
              <div className="teamimg">
                <img className="team-img1" src={Tashipic} />
              </div>
              <ul className="table">
                <li>Tashi Woeser</li>
                <li>Full Stack Developer</li>
                <div className="icons">
                  <li>
                    <a href="https://github.com/Tai510">
                      <i class="fab fa-github fa-2x" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fab fa-linkedin fa-2x" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fab fa-twitter-square fa-2x" />
                    </a>
                  </li>
                </div>
              </ul>
            </div>

            <div className="imagetext">
              <div className="teamimg team-img2">
                <img className="team-img1" src={Mylynhpic} />
              </div>
              <ul className="table">
                <li>Mylynh Nguyen</li>
                <li>Full Stack Developer</li>

                <div className="icons">
                  <li>
                    <a href="">
                      <i class="fab fa-github fa-2x" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/mylynh-nguyen-1b8055126">
                      <i class="fab fa-linkedin fa-2x" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fab fa-twitter-square fa-2x" />
                    </a>
                  </li>
                </div>
              </ul>
            </div>

            <div className="imagetext">
              <div className="teamimg">
                <img className="team-img1" src={teampic} />
              </div>
              <ul className="table">
                <li>Manju KC</li>
                <li>Full Stack Developer</li>
                <div className="icons">
                  <li>
                    <a href="https://github.com/Manjukcthapa?tab=repositories">
                      <i class="fab fa-github fa-2x" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fab fa-linkedin fa-2x" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fab fa-twitter-square fa-2x" />
                    </a>
                  </li>
                </div>
              </ul>
            </div>

            <div className="imagetext">
              <div className="teamimg team-img2">
                <img className="team-img1" src={teampic} />
              </div>
              <ul className="table">
                <li>Krisli Dimo</li>
                <li>Full Stack Developer</li>
                <div className="icons">
                  <li>
                    <a href="">
                      <i class="fab fa-github fa-2x" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/krislidimo/">
                      <i class="fab fa-linkedin fa-2x" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fab fa-twitter-square fa-2x" />
                    </a>
                  </li>
                </div>
              </ul>
            </div>

            <div className="imagetext">
              <div className="teamimg">
                <img className="team-img1" src={Luispic} />
              </div>
              <ul className="table">
                <li>Luis Villafranca</li>
                <li>UX Designer</li>
                <div className="icons">
                  <li>
                    <a href="">
                      <i class="fab fa-github fa-2x" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/luisdoesux/">
                      <i class="fab fa-linkedin fa-2x" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fab fa-twitter-square fa-2x" />
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
     <div className="wave"></div>
       <div className="galaxy"></div>   
    </div>
  );
};

export default AboutTeam;
