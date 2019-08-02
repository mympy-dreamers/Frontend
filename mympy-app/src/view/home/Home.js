import React from 'react';

import Us from '../us/Us';
import Carousel from '../carousel/Carousel';
import MidSec from '../midSec/MidSec';
import Support from '../supporter/Supporter';
import Dreamer from '../dreamer/Dreamer';

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
            <Support />
            <div className="break">
                <img src={bPoint} alt="scene" />
            </div>
            <Dreamer />
            <div>
                <img src={swirl} alt="styling" />
            </div>
        </div>
    )
}

export default Home;