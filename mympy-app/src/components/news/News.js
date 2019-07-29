import React from 'react';
import { connect } from 'react-redux';

import logo from '../../img/logo.svg';

class News extends React.Component {
    constructor() {
        super();
        this.state = {
            image: '',
        }
    }



    render() {
        return(
            <div className="news-main">
                <div className="img-wrap">
                    <img src={logo} alt="" />
                </div>
                <div className="text-wrap">
                    <p>{this.props.news.text}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    news: state.news,
})

export default connect(mapStateToProps, {})(News);