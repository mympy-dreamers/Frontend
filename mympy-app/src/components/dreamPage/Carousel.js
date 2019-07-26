import React, { Component  } from 'react';
import Slider from "react-slick";
import styled from 'styled-components';

import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

const Wrapper = styled.div`
	margin-top: 6px;
	margin-bottom: 60px;
	// margin: 0 auto;
	max-width: 100%

	.slick-slider {
  	outline: none;
		position: relative;

		.slick-list {
			margin: 0 auto;
			width: 100%;

			.slick-slide {
		  	img {
		  		max-width: 100%;
		  	}
			}
		}

		.slick-dots {
			img {
	  		max-width: 100%;
	  	}
		}

	  .slick-prev, .slick-next {
	    // filter: invert(100%);
	    position: absolute;
	    z-index: 2;
	  }
	 	.slick-next {
		  right: 1%;
	  }
	 	.slick-prev {
	    left: 1%;
	  }
`;

export default class Carousel extends Component {
  render() {
    const settings = {
      customPaging: function(i) {
        return (
          <a>
            <img src="https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1944&q=80" />
            {/*<img src={`../../img/carousel/img${i + 1}.jpg`} />*/}
          </a>
        );
      },
      dots: true, 
      dotsClass: "slick-dots slick-thumb", 
      arrows: true,
      infinite: true, // infinite scroll
      speed: 500, // delay per slide
      slidesToShow: 1, // slides per view
      slidesToScroll: 1, // scroll 1 view at a time 
      className: 'slides'
    };
    return (
      <Wrapper>
        <Slider {...settings}>
          <div>
            <img src="https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1944&q=80" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1944&q=80" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1944&q=80" />
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1944&q=80" />
          </div>
        </Slider>
      </Wrapper>
    );
  }
}
