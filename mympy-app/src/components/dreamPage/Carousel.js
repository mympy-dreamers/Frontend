import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import styled from 'styled-components';

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import arrowRight from '../../img/carousel-arrow-right.png';
import arrowLeft from '../../img/carousel-arrow-left.png';

const Wrapper = styled.div`
	margin-bottom: 33px;
	max-width: 100%

	.slick-slider {
  	outline: none;
		position: relative;

		.slick-list {
			margin: 0 auto;
			width: 100%;

			.slick-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 456px;

		  	img {
		  		max-width: 100%;

		  	}
			}
		}

		.slick-dots {
      text-align: right;
		}

	  .slick-prev, .slick-next {
	    filter: opacity(70%) invert(100%);
      width: 3rem;
      height: 3rem;
	    z-index: 1;
	  }
	 	.slick-next { 
      background-image: url(${arrowRight});
      background-size: cover;
		  right: 1%;
      &:before { display: none; }
	  }
	 	.slick-prev {
      background-image: url(${arrowLeft});
      background-size: cover;
	    left: 1%;
      &:before { display: none; }
	  }
`;

class Carousel extends Component {

  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true, // infinite scroll
      speed: 500, // delay per slide
      slidesToShow: 1, // slides per view
      slidesToScroll: 1, // scroll 1 view at a time 
    };
    console.log(this.props);
    return (


      <Wrapper>

        <Slider {...settings}>
          {this.props.dreamImg.map((pic) => {
            return <div>
              <img src={pic && pic.img_url} />
            </div>
          })}
        </Slider>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({ dreams }) => {
  return {
    currDream: dreams.currDream,
    dreamImg: dreams.imageById
  }
}

export default connect(mapStateToProps)(Carousel);

