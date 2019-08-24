import React from 'react';

import otherSwirl from '../../img/otherSwirl.svg';
import midSwirl from '../../img/midSwirl.png';


const bottomStyle = {
    backgroundImage: `url(${otherSwirl})`,
}

const Dreamer = () => {
    return (
        <div className="dream-main" id="dream-main">
            <div className="top">
                <div>
                    <h1>Be a Dreamer</h1>
                </div>
                <p>
                    So you have a dream but don't have the resources, post your dream here and find investors. See your dream come true.
                </p>
            </div>
            <div className="bottom" style={{ bottomStyle }}>
                <img className="cx" src={midSwirl} alt="customer" />
            </div>
        </div>
    )
}

export default Dreamer;