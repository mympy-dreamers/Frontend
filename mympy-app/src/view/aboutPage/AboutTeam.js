import React from "react";
import teampic from "../../img/team.jpg";
import "./About.css";
import teamlead from "../../img/teampic/teamlead.jpg";
import Alexpic from "../../img/teampic/Alex.png";
import Dakotapic from "../../img/teampic/Dakota.jpg";
import Jaredpic from "../../img/teampic/Jared.png";
import Luispic from "../../img/teampic/Luis.jpg";
import Mylynhpic from "../../img/teampic/Mylynh.jpg";
import Manjupic from "../../img/teampic/Manju.jpg";
import Tashipic from "../../img/teampic/tashi.png";
import Krislipic from "../../img/teampic/Krisli.jpg"
import rainbowball from "../../img/rainbowball.svg";

const AboutTeam = () => {
  return (
    <div className="team-maindiv">
      <div className="team-secondmaindiv">
        <div className="team-thirddiv">
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

          <div className="teams">
            <div className="about-team">
              <div className="team-img">
                <img className="team-img1" src={teamlead} />
              </div>
              <div className="team-roles">
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
                      <a  target="_blank" href="">
                        <i class="fab fa-linkedin fa-2x" />
                      </a>
                    </li>
                    <li>
                      <a  target="_blank" href="">
                        <i class="fab fa-twitter-square fa-2x" />
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="about-team1">
              <div className="team-img">
                <img className="team-img1" src={Alexpic} />
              </div>
              <div className="team-roles1">
                <ul className="table">
                  <li>Alex Vargas</li>
                  <li>UX Designer</li>
                  <div className="icons">
                    <li>
                      <a
                        target="_blank"
                        href="https://github.com/YorAlexVargas"
                      >
                        <i class="fab fa-github fa-2x" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank"  href="https://www.linkedin.com/in/uxalexvargas">
                        <i class="fab fa-linkedin fa-2x" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://twitter.com/Yor_AlexVargas">
                        <i class="fab fa-twitter-square fa-2x" />
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="about-team">
              <div className="team-img">
                <img className="team-img1" src={Jaredpic} />
              </div>
              <div className="team-roles">
                <ul className="table">
                  <li>Jared Parrish</li>
                  <li>Full-Stack Developer</li>
                  <div className="icons">
                    <li>
                      <a target="_blank" href="https://github.com/ParrishJ">
                        <i class="fab fa-github fa-2x" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.linkedin.com/in/jared-parrish/">
                      <i class="fab fa-linkedin fa-2x" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="">
                        <i class="fab fa-twitter-square fa-2x" />
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="about-team1">
              <div className="team-img">
                <img className="team-img1" src={Dakotapic} />
              </div>
              <div className="team-roles1">
                <ul className="table">
                  <li>Dakotah Hitze</li>
                  <li>Full Stack Developer</li>
                  <div className="icons">
                    <li>
                      <a target="_blank" href="https://github.com/HitzeD ">
                        <i class="fab fa-github fa-2x" />
                      </a>
                    </li>
                    <li>
                      <a  target="_blank" href="https://www.linkedin.com/in/dakotah-hitze-2a9042100/">
                        <i class="fab fa-linkedin fa-2x" />
                      </a>
                    </li>
                    <li>
                      <a  target="_blank" href="">
                        <i class="fab fa-twitter-square fa-2x" />
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="about-team">
              <div className="team-img">
                <img className="team-img1" src={Tashipic} />
              </div>
              <div className="team-roles">
                <ul className="table">
                  <li>Tashi Woeser</li>
                  <li>Full Stack Developer</li>
                  <div className="icons">
                    <li>
                      <a target="_blank" href="https://github.com/Tai510">
                        <i class="fab fa-github fa-2x" />
                      </a>
                    </li>
                    <li>
                      <a  target="_blank" href="">
                        <i class="fab fa-linkedin fa-2x" />
                      </a>
                    </li>
                    <li>
                      <a  target="_blank" href="">
                        <i class="fab fa-twitter-square fa-2x" />
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="about-team1">
              <div className="team-img">
                <img className="team-img1" src={Mylynhpic} />
              </div>
              <div className="team-roles1">
                <ul className="table">
                  <li>Mylynh Nguyen</li>
                  <li>Full Stack Developer</li>
                  <div className="icons">
                    <li>
                      <a target="_blank" href="https://github.com/nmylynh">
                        <i class="fab fa-github fa-2x" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.linkedin.com/in/mylynh-nguyen-1b8055126">
                        <i class="fab fa-linkedin fa-2x" />
                      </a>
                    </li>
                    <li>
                      <a  target="_blank" href="">
                        <i class="fab fa-twitter-square fa-2x" />
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="about-team">
              <div className="team-img">
                <img className="team-img1" src={Manjupic} />
              </div>
              <div className="team-roles">
                <ul className="table">
                  <li>Manju KC</li>
                  <li>Full Stack Developer</li>
                  <div className="icons">
                    <li>
                      <a
                        target="_blank"
                        href="https://github.com/Manjukcthapa?tab=repositories"
                      >
                        <i class="fab fa-github fa-2x" />
                      </a>
                    </li>
                    <li>
                      <a  target="_blank" href="">
                        <i class="fab fa-linkedin fa-2x" />
                      </a>
                    </li>
                    <li>
                      <a  target="_blank" href="">
                        <i class="fab fa-twitter-square fa-2x" />
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="about-team1">
              <div className="team-img">
                <img className="team-img1" src={Krislipic} />
              </div>
              <div className="team-roles1">
                <ul className="table">
                  <li>Krisli Dimo</li>
                  <li>Full Stack Developer</li>
                  <div className="icons">
                    <li>
                      <a target="_blank" href="https://github.com/krislidimo">
                        <i class="fab fa-github fa-2x" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.linkedin.com/in/krislidimo/">
                        <i class="fab fa-linkedin fa-2x" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="">
                        <i class="fab fa-twitter-square fa-2x" />
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="about-team">
              <div className="team-img">
                <img className="team-img1" src={Luispic} />
              </div>
              <div className="team-roles">
                <ul className="table">
                  <li>Luis Villafranca</li>
                  <li>UX Designer</li>
                  <div className="icons">
                    <li>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/mr.luisv/" >
                         <i class="fab fa-instagram fa-2x"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://www.linkedin.com/in/luisdoesux/">
                        <i class="fab fa-linkedin fa-2x" />
                      </a>
                    </li>
                    <li>
                      <a  target="_blank" href="">
                        <i class="fab fa-twitter-square fa-2x" />
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          {/* table main div */}
        </div>
      </div>
      <div className='div'> 
      <div className="wave"> <img className="img2" src={rainbowball} /></div>
      </div>
       {/* <div className="galaxy"></div> */}
      {/* second main div */}
    </div> /* main div */
  );
};

export default AboutTeam;


 

          

           

           

          

     
