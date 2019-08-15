import React, { Component  } from 'react';
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
      background-size: contain;
		  right: 1%;
      &:before { display: none; }
	  }
	 	.slick-prev {
      background-image: url(${arrowLeft});
      background-size: contain;
	    left: 1%;
      &:before { display: none; }
	  }
`;

export default class Carousel extends Component {
  constructor({ props }) {
    super(props);
  }

  render() {
    const settings = {
      dots: true, 
      arrows: true,
      infinite: true, // infinite scroll
      speed: 500, // delay per slide
      slidesToShow: 1, // slides per view
      slidesToScroll: 1, // scroll 1 view at a time 
    };
    console.log(this.props.dream_pics);
    return (
      <Wrapper>
        <Slider {...settings}>
          <div>
            <img src={this.props.dream_pic.dream_pic[0].img_url} alt="" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1944&q=80" alt="" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1944&q=80" alt="" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1944&q=80" alt="" />
          </div>
        </Slider>
      </Wrapper>
    );
  }
}
