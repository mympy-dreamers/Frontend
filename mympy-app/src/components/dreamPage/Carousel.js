import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import styled from 'styled-components';

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import arrowRight from '../../img/carousel-arrow-right.png';
import arrowLeft from '../../img/carousel-arrow-left.png';

const StyledCarousel = styled.div`
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

    //Right arrow class
	 	.slick-next { 
      background-image: url(${arrowRight});
      background-size: cover;
		  right: 1%;
      &:before { display: none; }
	  }

    //Left arrow class
	 	.slick-prev {
      background-image: url(${arrowLeft});
      background-size: cover;
	    left: 1%;
      &:before { display: none; }
	  }
`;

//Carousel settings
const settings = {
  dots: true, // show dots
  arrows: true, // show arrows
  infinite: true, // infinite scroll
  speed: 500, // delay per slide
  slidesToShow: 1, // slides per view
  slidesToScroll: 1, // scroll 1 view at a time 
};

//Carousel component
class Carousel extends Component {
  render() {
    return (
      <StyledCarousel>
        <Slider {...settings}>
          {this.props.dreamImg.map((pic, i) => {
            return <div>
              <img src={pic && pic.img_url} alt="" key={i} />
            </div>
          })}
        </Slider>
      </StyledCarousel>
    );
  }
}//End of Carousel

const mapStateToProps = ({ dreams }) => {
  return {
    dreamImg: dreams.imageById
  }
}

export default connect(mapStateToProps)(Carousel);