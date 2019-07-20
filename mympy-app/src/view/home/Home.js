import React from 'react';

import './home.scss';
import Us from '../us/Us';
import Selector from '../selector/Selector';
import Carousel from '../carousel/Carousel';

const Home = () => {
    return (
        <div>
            <Carousel />
            <Us />
            <Selector />
        </div>
    )
}

export default Home;