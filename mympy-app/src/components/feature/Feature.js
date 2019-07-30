import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class Feature extends React.Component {
    constructor() {
        super();
        this.state = {

        }
        console.log(this.props.featured === null);
    }

    componentDidMount(){
        console.log(this.props.featured);
    }

    render() {
        return(
            <div className="feature-main">
                <div className="wrapper">

                    <h3>Feature Dreamers</h3>

                    <div className="featured">
                        {/* Component will go here of featured -- DUMMY DATA CURRENTLY */}
                        {this.props.featured.map(f => {
                            return(
                                <div className="single" key={f.id}>
                                    <div className="image-div">
                                        <img src={f.cardImg} alt={f.id} />
                                    </div>
                                    <div className="info-wrap">
                                        <div className="name-city">
                                            <h3>{f.user.username}</h3>
                                            <h4>{f.user.city}</h4>
                                        </div>
                                        <div className="type">
                                            <h3>{f.type}</h3>
                                        </div>
                                        <p>{f.shortDescription}</p>
                                        <div className="progressBar">
                                            <h1>Progress bar here</h1>
                                        </div>
                                        <button>Learn More</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ featured }) => ({
    featured,
})

export default withRouter(
    connect(
        mapStateToProps, 
        {  }
    )(Feature)
);