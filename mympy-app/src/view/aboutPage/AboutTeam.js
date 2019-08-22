import React from "react";
// import teampic from "../../img/team.jpg";
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
                <img className="team-img1" alt='profile' src={teamlead} />
              </div>
              <div className="team-roles">
                <ul className="table">
                  <li>Nick Stricker</li>
                  <li>Team Lead</li>
                  <div className="icons">
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/NickStrick">
                        <i className="fab fa-github fa-2x" />
                      </a>
                    </li>
                    <li>
                      {/* <a target="_blank" rel="noopener noreferrer" href="#"> */}
                      <i className="fab fa-linkedin fa-2x" />
                      {/* </a> */}
                    </li>
                    <li>
                      {/* <a target="_blank" rel="noopener noreferrer" href="#"> */}
                      <i className="fab fa-twitter-square fa-2x" />
                      {/* </a> */}
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="about-team1">
              <div className="team-img">
                <img className="team-img1" alt='profile' src={Alexpic} />
              </div>
              <div className="team-roles1">
                <ul className="table">
                  <li>Alex Vargas</li>
                  <li>UX Designer</li>
                  <div className="icons">
                    <li>
                      <a
                        target="_blank" rel="noopener noreferrer"
                        href="https://github.com/YorAlexVargas"
                      >
                        <i className="fab fa-github fa-2x" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/uxalexvargas">
                        <i className="fab fa-linkedin fa-2x" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Yor_AlexVargas">
                        <i className="fab fa-twitter-square fa-2x" />
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="about-team">
              <div className="team-img">
                <img className="team-img1" alt='profile' src={Jaredpic} />
              </div>
              <div className="team-roles">
                <ul className="table">
                  <li>Jared Parrish</li>
                  <li>Full-Stack Developer</li>
                  <div className="icons">
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/ParrishJ">
                        <i className="fab fa-github fa-2x" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jared-parrish/">
                        <i className="fab fa-linkedin fa-2x" />
                      </a>
                    </li>
                    <li>
                      {/* <a target="_blank" rel="noopener noreferrer" href="#"> */}
                      <i className="fab fa-twitter-square fa-2x" />
                      {/* </a> */}
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="about-team1">
              <div className="team-img">
                <img className="team-img1" alt='profile' src={Dakotapic} />
              </div>
              <div className="team-roles1">
                <ul className="table">
                  <li>Dakotah Hitze</li>
                  <li>Full Stack Developer</li>
                  <div className="icons">
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/HitzeD ">
                        <i className="fab fa-github fa-2x" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dakotah-hitze-2a9042100/">
                        <i className="fab fa-linkedin fa-2x" />
                      </a>
                    </li>
                    <li>
                      {/* <a target="_blank" rel="noopener noreferrer" href="#"> */}
                      <i className="fab fa-twitter-square fa-2x" />
                      {/* </a> */}
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="about-team">
              <div className="team-img">
                <img className="team-img1" alt='profile' src={Tashipic} />
              </div>
              <div className="team-roles">
                <ul className="table">
                  <li>Tashi Woeser</li>
                  <li>Full Stack Developer</li>
                  <div className="icons">
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/Tai510">
                        <i className="fab fa-github fa-2x" />
                      </a>
                    </li>
                    <li>
                      {/* <a target="_blank" rel="noopener noreferrer" href="#"> */}
                      <i className="fab fa-linkedin fa-2x" />
                      {/* </a> */}
                    </li>
                    <li>
                      {/* <a target="_blank" rel="noopener noreferrer" href="#"> */}
                      <i className="fab fa-twitter-square fa-2x" />
                      {/* </a> */}
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="about-team1">
              <div className="team-img">
                <img className="team-img1" alt='profile' src={Mylynhpic} />
              </div>
              <div className="team-roles1">
                <ul className="table">
                  <li>Mylynh Nguyen</li>
                  <li>Full Stack Developer</li>
                  <div className="icons">
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/nmylynh">
                        <i className="fab fa-github fa-2x" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mylynh-nguyen-1b8055126">
                        <i className="fab fa-linkedin fa-2x" />
                      </a>
                    </li>
                    <li>
                      {/* <a target="_blank" rel="noopener noreferrer" href="#"> */}
                      <i className="fab fa-twitter-square fa-2x" />
                      {/* </a> */}
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="about-team">
              <div className="team-img">
                <img className="team-img1" alt='profile' src={Manjupic} />
              </div>
              <div className="team-roles">
                <ul className="table">
                  <li>Manju KC</li>
                  <li>Full Stack Developer</li>
                  <div className="icons">
                    <li>
                      <a
                        target="_blank" rel="noopener noreferrer"
                        href="https://github.com/Manjukcthapa?tab=repositories"
                      >
                        <i className="fab fa-github fa-2x" />
                      </a>
                    </li>
                    <li>
                      {/* <a target="_blank" rel="noopener noreferrer" href="#"> */}
                      <i className="fab fa-linkedin fa-2x" />
                      {/* </a> */}
                    </li>
                    <li>
                      {/* <a target="_blank" rel="noopener noreferrer" href="#"> */}
                      <i className="fab fa-twitter-square fa-2x" />
                      {/* </a> */}
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="about-team1">
              <div className="team-img">
                <img className="team-img1" alt='profile' src={Krislipic} />
              </div>
              <div className="team-roles1">
                <ul className="table">
                  <li>Krisli Dimo</li>
                  <li>Full Stack Developer</li>
                  <div className="icons">
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/krislidimo">
                        <i className="fab fa-github fa-2x" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/krislidimo/">
                        <i className="fab fa-linkedin fa-2x" />
                      </a>
                    </li>
                    <li>
                      {/* <a target="_blank" rel="noopener noreferrer" href="#"> */}
                      <i className="fab fa-twitter-square fa-2x" />
                      {/* </a> */}
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="about-team">
              <div className="team-img">
                <img className="team-img1" alt='profile' src={Luispic} />
              </div>
              <div className="team-roles">
                <ul className="table">
                  <li>Luis Villafranca</li>
                  <li>UX Designer</li>
                  <div className="icons">
                    <li>
                      <a
                        target="_blank" rel="noopener noreferrer"
                        href="https://www.instagram.com/mr.luisv/" >
                        <i className="fab fa-instagram fa-2x"></i>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/luisdoesux/">
                        <i className="fab fa-linkedin fa-2x" />
                      </a>
                    </li>
                    <li>
                      {/* <a target="_blank" rel="noopener noreferrer" href="#"> */}
                      <i className="fab fa-twitter-square fa-2x" />
                      {/* </a> */}
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
        <div className="wave"> <img className="img2" src={rainbowball} alt='rainbowball' /></div>
      </div>

    </div> /* main div */
  );
};

export default AboutTeam;













