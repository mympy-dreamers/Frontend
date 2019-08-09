import React from 'react';

import otherSwirl from '../../img/otherSwirl.svg';

const bottomStyle = {
    backgroundImage: `url(${otherSwirl})`,
}

const Dreamer = () => {
    return (
        <div className="dream-main">
            <div className="top">
                <div>
                    <h1>Be a Dreamer</h1>
                </div>
                <p>Poster can be one of the effective marketing and advertising materials. 
                    It is also a great tool to use when you want to present your services to a 
                    new league or as a point of sale display on picture day. The poster must show 
                    your products that are available, along with your company name and contact information. 
                    If you having trouble about creating a good 4 color poster print, a 4 color printing 
                    company that has 4 color poster printing service may be able to help you made your poster.
                </p>
            </div>
            <div className="bottom" style={{ bottomStyle }}>
                <img className="cx" src="#" alt="customer" />
            </div>
        </div>
    )
}

export default Dreamer;