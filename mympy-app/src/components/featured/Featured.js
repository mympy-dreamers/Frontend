import React from 'react';
import { connect } from 'react-redux';
import { fetchAllDreams } from '../../actions/index';
import styled from 'styled-components';
import Slider from "react-slick";

import Card from '../Card.js'

const FeaturedMain = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    padding: 2%;
    background-color: white;
    border-radius: 16px;

    h3 {
        align-self: flex-start;
        font-size: 4.6em
        font-weight: bold;
        margin: 0.1em 0 1em;
    } // end of h3

    .slick-slide {
        padding: 0 3em;
        height: 40%;
    }
`

//Carousel settings
const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    pauseOnHover: true
};

//Featured component
class Featured extends React.Component {
    constructor() {
        super();
        this.state = {
            featured: [],
            displayed: 6 //number of cards
        }
    }

    async componentDidMount() {
        //sorts dreams from highest to lowest total donations
        //sets top 6 to state
        await this.props.fetchAllDreams();
        let arr = [...this.props.dreams];
        arr.sort((a, b) => b.donationsReceived - a.donationsReceived)
        this.setState({
            ...this.state,
            featured: arr.slice(0, this.state.displayed),
        });
        let classes = document.querySelector('.nav-tab-wrapper').className;
        document.querySelector('.nav-tab-wrapper').className = (
            classes.replace(' active', '')
        )
        let appEle = document.querySelector('.page-container');
        if (appEle) {
            let appClasses = appEle.className;
            document.querySelector('.page-container').className = (
                ( appClasses.includes('page-container') && appClasses.includes('user-nav-active') ) ?
                ( appClasses.replace(' user-nav-active', '') ):
                ( appClasses + ' user-nav-active' )
            )
        }
    }

    render() {
        return (
            <FeaturedMain>
                <h3>Featured Dreams</h3>
                <Slider {...settings}>
                    {this.state.featured.map(dream => {
                        return <Card dream={dream} key={dream.id} />
                    })
                    }
                    {this.state.featured.length < 3 && <div></div>}
                    {this.state.featured.length < 2 && <div></div>}
                </Slider>
                {/* {this.state.featured.length > 2 ? <Slider {...settings}>
                    {this.state.featured.map(dream => {
                        return <Card dream={dream} key={dream.id} />
                    })}
                </Slider> :
                    <Slider {...settings, slidesToShow: this.state.featured.length }>
                        {this.state.featured.map(dream => {
                            return <Card dream={dream} key={dream.id} />
                        })}
                    </Slider>} */}
            </FeaturedMain>
        )
    }
}//End of Featured

const mapStateToProps = (state) => {
    return {
        dreams: state.dreams.dreams
    }
}

export default connect(mapStateToProps, { fetchAllDreams })(Featured);