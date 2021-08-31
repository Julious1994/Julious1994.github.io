import React from "react";
import styled from "styled-components";
import CarouselView from "react-multi-carousel";

import Image1 from "./assets/giphy.gif";
import Image2 from "./assets/giphy-2.gif";
import Image3 from "./assets/giphy-3.gif";
import Image4 from "./assets/giphy-4.gif";
import Image5 from "./assets/giphy-5.gif";
import Image6 from "./assets/giphy-6.gif";

import 'react-multi-carousel/lib/styles.css';
const CarouselContainer = styled.div`
  width: 58%;
  margin: 20px auto;
`;

const ImageView = styled.img`
    width: 150px;
    height: 185px;
`;

function Carousel(props) {
  return (
    <CarouselContainer>
      <CarouselView
        autoPlay
        infinite
        autoPlaySpeed={7000}
        slidesToSlide={1}
        arrows={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}>
          <ImageView src={Image1} />
          <ImageView src={Image2} />
          <ImageView src={Image3} />
          <ImageView src={Image4} />
          <ImageView src={Image5} />
          <ImageView src={Image6} />
      </CarouselView>
    </CarouselContainer>
  );
}

export default Carousel;
