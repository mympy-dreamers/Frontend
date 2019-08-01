import React from 'react';

import Us from '../us/Us';
import Selector from '../selector/Selector';
import Carousel from '../carousel/Carousel';
import MidSec from '../midSec/MidSec';

import swirl from '../../img/swirl.png';
import bPoint from '../../img/break.png';

const Home = () => {
    return (
        <div className="home-main">
            <Carousel />
            <div className="break">
                <img src={bPoint} alt="scene" />
            </div>
            <Us />
            <MidSec />
            <Selector />
            <div>
                <img src={swirl} alt="styling" />
            </div>
        </div>
    )
}

export default Home;