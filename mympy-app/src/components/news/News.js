import React from 'react';
import { connect } from 'react-redux';



class News extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <div className="news-main">
                <div className="news-wrap">
                    <div className="img-wrap">
                        <img src={this.props.news.image} alt="" />
                    </div>
                    <div className="text-wrap">
                        <p>{this.props.news.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    news: state.news,
})

export default connect(mapStateToProps, {})(News);