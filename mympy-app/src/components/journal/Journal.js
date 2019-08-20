import React from 'react';
import { connect } from 'react-redux';
import { fetchAllDreams } from '../../actions/index';
import styled from 'styled-components';
import Slider from "react-slick";

import JournalEntry from './JournalManager'

/* const FeaturedMain = styled.div`
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
` */

class Journal extends React.Component {
    constructor() {
        super();

    }

    async componentDidMount() {
        //sorts dreams from highest to lowest total donations
        //sets top 6 to state
        await this.props.fetchAllDreams();

    }

    render() {

        return (
            <div>
                <h3>Featured Dreams</h3>
                {this.props.dreams.map(dream => {
                    return <JournalEntry dream={dream} key={dream.id} />
                })
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dreams: state.dreams.dreams
    }
}

export default connect(mapStateToProps, { fetchAllDreams })(Journal);