import React from 'react';

import bigImage from '../../img/Galaxyvr/galaxyvr2x.png';


const Carousel = (props) => {

    return (

        <div className="caro-main">

            <div className="empty">
                {/* empty div for styling purposes */}
            </div>

            <div className="left">
                
                <div className="title">

                    <h1 className="top-title">DREAM</h1>
                    <h1 className="bottom-title">BIG</h1>

                </div>

                <div className="para-wrap">

                    <p>
                        Mympy Dreams is a marketplace where individuals
                        can create a profile and post their project and needs
                        and find funding from the Mymphy Dreams community.
                    </p>

                    <div className="btn-div">

                        <button onClick={() =>
                            document.getElementById("dream-main").scrollIntoView()
                        } className="dreamer">START DREAMING</button>
                        <button onClick={() =>
                            document.getElementById("support-main").scrollIntoView()
                        } className="supporter">START SUPPORTING</button>

                    </div>

                </div>

            </div>

            <div className="right">

                <img src={bigImage} alt="Man holding 'VR' controller and wearing a 'VR' headset" />

            </div>

        </div>

    )

}

export default Carousel;