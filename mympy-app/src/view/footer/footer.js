import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

class Footer extends React.Component {
    render() {
        return (

            <div>
                <div className='menu-footer'>

                    <div className='menu-icons'>
                        <div id='fb-icon'>
                            {/* <a href='#'> */}
                            <i className="fab fa-facebook-f"></i>
                            {/* </a> */}
                        </div>
                        <div id='ig-icon'>
                            {/* <a href='#'> */}
                            <i className="fab fa-google"></i>
                            {/* </a> */}
                        </div>
                        <div id='yelp-icon'>
                            {/* <a href='#'> */}
                            <i className="fab fa-yelp"></i>
                            {/* </a> */}
                        </div>
                    </div> {/* menu-icons end */}

                    <div className='links'>
                        <Link id='home' to='/dashboard'>Home</Link>
                        <Link id='about' to='/about'>About</Link>
                    </div>

                    <div className='footer-home-link'>
                        <h4><span>Mympy Dreams</span> <span></span> <span>mymphydream@gmail.com</span></h4>
                    </div> {/* footer-home-link end */}

                    <div className='copyright'>
                        <p>Copyright © 2019, Mympy Dreams. All Rights Reserved.</p>
                    </div>
                </div> {/* menu-footer end */}

            </div>

        )
    }
}

export default Footer;