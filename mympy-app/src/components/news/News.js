import React from 'react';

import logo from '../../img/unusedImgs/logo.svg';

// This component has changed throughout the life of the project as of now. It currently renders Under construction, it was news, but
// then changed to journals, to not being spoken of
class News extends React.Component {
    constructor() {
        super();
        this.state = {
            image: '',
        }
    }



    render() {
        return (
            <div className="news-main">

                <div className="img-wrap">

                    <img src={logo} alt="" />

                </div>

                <div className="text-wrap">

                    <p>We are currently in development!</p>
                    
                </div>

            </div>

        )

    }

}


export default News;