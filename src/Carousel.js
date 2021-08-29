import React from "react";
import styled from "styled-components";
import CarouselView from "react-multi-carousel";

import Video1 from "./assets/Video1.mp4";
import Video2 from "./assets/Video2.mp4";
import Video3 from "./assets/Video3.mp4";
import Video4 from "./assets/Video4.mp4";
import Video5 from "./assets/Video5.mp4";
import Video6 from "./assets/Video6.mp4";
import Video7 from "./assets/Video7.mp4";
import 'react-multi-carousel/lib/styles.css';
const CarouselContainer = styled.div`
width: 58%;
margin: 0px auto;
`;

const VideoView = styled.div`
    width: 150px;
    height: 150px;
`;

function Video(props) {
    return (
        <VideoView 
            dangerouslySetInnerHTML={{ __html: `
                <video
                    loop
                    muted
                    autoplay
                    playsinline
                    src="${props.src}"
                    width=150
                    height=300
                />,
        `   }}
        ></VideoView>
    )
}

function Carousel(props) {
  return (
    <CarouselContainer>
      <CarouselView
        autoPlay
        infinite
        autoPlaySpeed={7000}
        slidesToSlide={1}
        arrows={false}
        containerClass="carousel-container"
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
        <Video src={Video1} />
        <Video src={Video2} />
        <Video src={Video3} />
        <Video src={Video4} />
        <Video src={Video5} />
        <Video src={Video6} />
        <Video src={Video7} />
      </CarouselView>
    </CarouselContainer>
  );
}

export default Carousel;
