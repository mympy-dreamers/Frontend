import React from 'react';
// import rocket from '../../img/rocket.svg';


const Us = () => {
    return (
        <div className="us-main">
            <div className="left">
                <div className="inner-left">
                    <h1>What Do We Do?</h1>
                    <p>
                        Mympy is a program that lowers the entry barriers to incoming future VR developers.
                        Our mission is to empower underrepresented communities by providing emerging technologies education, access, carrer development, and entrepreneurship skills.
                        </p>

                    <p className="secondLeft">
                        Combined with a social impact marketplace called Mympy Dream.
                        Mympy Dreams helps many talented entrepreneurs, artists, and dreamers who want to create new projects in the VR space, but lack access to capital and equipment to make their dreams a reality.
                    </p>
                </div>
            </div>
            <div className="right">
                <div className="imgDiv"><img src="https://source.unsplash.com/random/600x400" alt="" /></div>
                <div className="inner-right">
                    <h1>How Do We Do It?</h1>
                    <p>
                        Mympy dreams connect investors that are excited and optimistic about VR and want to support those projects and dreamers through a crowd funding platform.
                        <br /><br />
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Us;