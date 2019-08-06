import React from 'react';

import cx from '../../img/janetwide.png';

const Supporter = () => {
    return (
        <div className="support-main">
            <div className="top">
                <div>
                    <h1>Be a Supporter</h1>
                </div>
                <p>Poster can be one of the effective marketing and advertising materials. 
                    It is also a great tool to use when you want to present your services to a 
                    new league or as a point of sale display on picture day. The poster must show 
                    your products that are available, along with your company name and contact information. 
                    If you having trouble about creating a good 4 color poster print, a 4 color printing 
                    company that has 4 color poster printing service may be able to help you made your poster.
                </p>
            </div>
            <div className="yellow-div">
                <div className="white-div">
                    <div className="img">
                        <img src={cx} alt="Janet Wide" />
                    </div>
                    <div className="info">
                        <h1>Full Name</h1>
                        <p>Poster can be one of the effective marketing and advertising materials. 
                        It is also a great tool to use when you want to present your services to a 
                        new league or as a point of sale display on picture day.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Supporter;