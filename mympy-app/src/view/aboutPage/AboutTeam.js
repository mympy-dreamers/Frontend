import React from "react";
import group from "../../img/woman.svg";
import "./About.css";

const AboutTeam = () => {


return(
    <div className="team">
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

          <div className="maindiv2">
          <div className="imagetext">
              <div className="teamimg">
              <img  className="team-img1"src={group}/>
              </div>
              <ul className="table">
                  <li>Nick Stricker</li>
                  <li>Team Lead</li>
                  <li><a target="_blank" href="https://github.com/NickStrick">https://github.com/NickStrick</a></li>
                  <li>LinkIn</li>
                  <li>Social Media</li>
              </ul>
          </div>

          <div className="imagetext">
              <div className="teamimg team-img2">
              <img className="team-img1"src={group}/>
              </div>
              <ul className="table">
                  <li>Alex Vargas</li>
                  <li>UX Designer</li>
                  <li>Github</li>
                  <li><a href="https://www.linkedin.com/in/uxalexvargas">linkedin.com/in/uxalexvargas</a>/</li>
                  <li><a href="twitter:@Yor_AlexVargas">twitter:@Yor_AlexVargas</a></li>
              </ul>
              </div>

              <div className="imagetext" >
              <div className="teamimg">
              <img className="team-img1"src={group}/>
              </div>
              <ul className="table">
                  <li>Jared Parrish</li>
                  <li>Full-Stack Developer</li>
                  <li>Github</li>
                  <li><a href="https://www.linkedin.com/in/jared-parrish/">https://www.linkedin.com/in/jared-parrish/</a></li>
                  <li>Social Media</li>
              </ul>
              </div>

              <div className="imagetext">
              <div className="teamimg team-img2">
              <img className="team-img1"src={group}/>
              </div>
              <ul className="table">
                  <li>Dakotah Hitze</li>
                  <li>Full Stack Developer</li>
                  <li><a href="https://github.com/HitzeD">https://github.com/HitzeD</a></li>
                  <li><a href="https://www.linkedin.com/in/dakotah-hitze-2a9042100/">https://www.linkedin.com/in/dakotah-hitze-2a9042100/</a></li>
                  <li>Social Media</li>
              </ul>
              </div>

              <div className="imagetext">
              <div className="teamimg">
              <img className="team-img1"src={group}/>
              </div>
              <ul className="table">
                  <li>Tashi Woeser</li>
                  <li>Full Stack Developer</li>
                  <li><a href="https://github.com/Tai510">https://github.com/Tai510</a></li>
                  <li>LinkIn</li>
                  <li>Social Media</li>
              </ul>
              </div>

              <div className="imagetext">
              <div className="teamimg team-img2">
              <img className="team-img1"src={group}/>
              </div>
              <ul className="table">
                  <li>Mylynh Nguyen</li>
                  <li>Full Stack Developer</li>
                  <li>Github</li>
                  <li><a href="https://www.linkedin.com/in/mylynh-nguyen-1b8055126">https://www.linkedin.com/in/mylynh-nguyen-1b8055126</a></li>
                  <li>Social Media</li>
              </ul>
              </div>

              <div className="imagetext">
              <div className="teamimg">
              <img className="team-img1"src={group}/>
              </div>
              <ul className="table">
                  <li>Manju KC</li>
                  <li>Full Stack Developer</li>
                  <li><a href="https://github.com/Manjukcthapa?tab=repositories">https://github.com/Manjukcthapa?tab=repositories</a></li>
                  <li>LinkIn</li>
                  <li>Social Media</li>
              </ul>
              </div>

              <div className="imagetext">
              <div className="teamimg team-img2">
              <img className="team-img1"src={group}/>
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
              <img className="team-img1"src={group}/>
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
         
)
}

export default AboutTeam;