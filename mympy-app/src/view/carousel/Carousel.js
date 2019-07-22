import React from 'react';

import bigImage from '../../img/Galaxyvr/galaxyvr2x.png';
import smallImage from '../../img/Galaxyvr/galaxyvr.png';


const Carousel = () => {
    return (
        <div className="caro-main">
        <div className="empty"></div>
            <div className="left">
                <div className="title">
                    <h1 className="top-title">DREAM</h1>
                    <h1 className="bottom-title">BIG</h1>
                </div>
                <div className="para-wrap">
                    <p>Mympy Dreams is a marketplace where individuals 
                        can create a profile and post their project and needs 
                        and find funding from the Mymphy Dreams community.
                    </p>
                </div>
            </div>
            <div className="right">
                <img src={bigImage} alt="" />
            </div>
        </div>
    )
}

export default Carousel;