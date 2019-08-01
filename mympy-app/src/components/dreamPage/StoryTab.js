import React from 'react';

import demo from '../../img/demo.jpg';

const StoryTab = props => {
    console.log(props.user);
    return(
        <div className="story-content">
            {/*Left side of Project Story tab*/}
            <div className="story">
                <h1 className="dream-title">{props.dream.title}</h1>
                <p className="dream-description">{props.dream.longDescription}</p>
            </div>

            {/*Right side of Project Story tab*/}
            <div className="user-section">
                <div className="user-profile">
                    <img className="user-pic" src={demo} alt=""  />
                    <h2 className="pic-footer">MY STORY</h2>
                </div>

                <h2 className="user-name">{props.user.firstname + " " + props.user.lastname}</h2>
                <h3 className="city">{props.user.city}</h3>

                <button className="donate-button">Donate Now</button>
                <h5 className="more-from">More Dreams by {props.user.firstname}</h5>
                {props.allUserDreams.map( dream => {
                    return <img className="dream-pic" src={dream.cardImg} key={dream.id} alt="" />
                })}
            </div>
		</div>
    )
}

export default StoryTab;