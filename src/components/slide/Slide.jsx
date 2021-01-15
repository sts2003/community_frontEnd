import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

const SildeArea = styled.div`
  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `500px`};

  background-color: #777;

  bottom: 0;
`;

const SlideImg = styled.img`
  display: block;
  width: 100%;
  height: ${(props) => props.height || `500px`};

  background-size: cover;
`;

const SlideDesc = styled.h3`
  font-size: 14px;
`;

const Slide = () => {
  return (
    <SildeArea>
      <Carousel>
        <Carousel.Item>
          <SlideImg
            src="https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/4leaf-community%2FmainSlide%2F%ED%8C%BD%EA%B7%84.jpg?alt=media&token=1c97dc66-07b6-487c-8ebf-380e8765b5ed"
            alt="First slide"
          />
          <Carousel.Caption>
            <SlideDesc>와와 뉴스 !</SlideDesc>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <SlideImg
            src="https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/4leaf-community%2FmainSlide%2F%EB%84%A4%EC%9D%B4%EB%A7%88%EB%A5%B4%20%EC%B6%95%EC%8B%A0%EC%A7%A4.jpg?alt=media&token=52e989b7-31e6-4f97-a21d-20c370be82ed"
            alt="Second slide"
          />
          <Carousel.Caption>
            <SlideDesc>네이마르 선수의 환상적인 드리블!</SlideDesc>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <SlideImg
            src="https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/4leaf-community%2FmainSlide%2F%EB%A9%94%EC%8B%9C%20%EC%B6%95%EC%8B%A0%EC%A7%A4.jpg?alt=media&token=01eb3b6d-b3e0-4800-ae52-aedf020ede03"
            alt="Third slide"
          />

          <Carousel.Caption>
            <SlideDesc>메시는 정말 레전드다</SlideDesc>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </SildeArea>
  );
};

export default Slide;
