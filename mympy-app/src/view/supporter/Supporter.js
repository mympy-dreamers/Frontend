import React from 'react';

import cx from '../../img/janetwide.png';

const Supporter = () => {
    return (
        <div className="support-main" id="support-main">
            <div className="top">
                <div>
                    <h1>Be a Supporter</h1>
                </div>
                <p>
                    As a supporter you don't only contribute to someones project and or dream but you are supporting their future. At Mympy we pride ourselfs in being transparent and that you have a peace of mind giving and supporting.
                </p>
                <p>
                    Start supporting now, search through the website and find that perfect project to donate to.
                </p>
            </div>
            <div className="yellow-div">
                <div className="white-div">
                    <div className="img">
                        <img src={cx} alt="Janet Wide" />
                    </div>
                    <div className="info">
                        <h1>Jonathon Anklam</h1>
                        <p>
                            22 yr old performer in Caracas, Venezuela. Has a dream to be the first VR concert venue owner. People can come and see me play live without leacing their homes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Supporter;