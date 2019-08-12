import React from "react";
import group from "../../img/women.svg";
import "./About.css";

const AboutProject = () => {


return(
    <div>
        <div className="maindiv">
        <div className="first">

          <div className="leftside">
            <div>
            <h1 id='abouttext'>
              <span>About</span> 
            </h1>
            <h1 id='ustext'>
              <span>Us</span> 
              </h1>
            </div>

            <div>
            <p>
              Mympy Dreams is a marketplace where individuals can create a
              profile and post their project and needs and find funding from the
              Mymphy Dreams community.
            </p>
              </div>
        
          </div>


          <div className="rightside">
            <img src={group} />
          </div>
        </div>
      </div>
    </div>
         
)
}

export default AboutProject;

