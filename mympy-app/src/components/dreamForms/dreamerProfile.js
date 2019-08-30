import React from 'react';

import expVr from '../../img/EXPERIENCEVR.svg';
import Form from './create/Form';

const leftStyle = {
    backgroundImage: `url(${expVr})`,
    backgroundSize: 'cover',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "70%",
}

//Unused component <---------------------------------------------------

class DreamInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className='dream-Home-Page page-container'>
                <div className='form-wrap'>

                    <div className="left"  >
                        <div className='left-top' style={leftStyle}></div>
                        {/* <div className='left-bottom'></div> */}
                    </div>

                    <div className='right'>  {/* previously dreamer-card-app */}

                        <Form />

                    </div>  {/* dreamer-card-app end  */}

                </div>
            </div> /* dream-Home-Page end */
        )
    }
}

export default DreamInfo;
