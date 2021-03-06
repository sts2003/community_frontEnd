import React from "react";
import styled from "styled-components";
import { Wrapper, ImageBox } from "../../../components/CommonComponents";
import { Fade } from "react-reveal";
import Slide from "../../../components/slide/Slide";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

const NewWrapper = styled.div`
  width: 100%;
  height: ${(props) => props.height || `100%`};

  display: flex;
  flex-direction: ${(props) => props.dr || `row`};
  justify-content: center;
  align-items: center;

  margin-top: 15px;
`;

const NoticeWrapper = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  flex-direction: ${(props) => props.dr || `row`};
  align-items: center;
  justify-content: center;
`;

const ThumbNailNews = styled.div`
  width: 100%;
  height: 500px;

  background-color: ${(props) => props.theme.grayColor};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const NoticeInfo = styled.div`
  width: 200px;
  height: 80px;
  background-color: ${(props) => props.theme.pointColor};
  border-radius: ${(props) => props.theme.radius};
  margin-top: 20px;
  color: ${(props) => props.theme.whiteColor};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: 0.7s;

  &:hover {
    background-color: ${(props) => props.theme.whiteColor};
    border: 3px solid ${(props) => props.theme.pointColor};
    color: ${(props) => props.theme.pointColor};
    box-shadow: ${(props) => props.theme.boxShadow};
    cursor: pointer;
  }
`;

const NoticeData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 13px;
  cursor: pointer;
  margin-top: ${(props) => props.mgTop || `0px`};
`;

const MM00Presenter = ({
  popularDatum,
  newsDatum,
  moveLinkHandler,
  freeDatum,
}) => {
  return (
    <Wrapper dr={`column`} width={`100%`} height={`100%`}>
      <ImageBox width={`100%`} height={`500px`}>
        <Slide />
      </ImageBox>
      <NewWrapper height={`600px`}>
        <NoticeWrapper dr={`column`}>
          <NoticeInfo onClick={() => moveLinkHandler("/popular")}>
            인기게시판
          </NoticeInfo>
          <NoticeData>
            {popularDatum ? (
              popularDatum.length === 0 ? (
                <Wrapper>게시글이 없습니다.</Wrapper>
              ) : (
                popularDatum.map((data, idx) => {
                  return (
                    <Fade bottom delay={idx * 60} key={idx}>
                      <NoticeData>{data.title}</NoticeData>
                    </Fade>
                  );
                })
              )
            ) : (
              <Wrapper>조회중입니다.</Wrapper>
            )}
          </NoticeData>
        </NoticeWrapper>

        <NoticeWrapper dr={`column`}>
          <NoticeInfo onClick={() => moveLinkHandler("/freeBoard")}>
            자유게시판
          </NoticeInfo>
          <NoticeData>
            {freeDatum ? (
              freeDatum.length === 0 ? (
                <Wrapper>자유게시판이 없습니다.</Wrapper>
              ) : (
                freeDatum.map((data, idx) => {
                  return (
                    <Fade bottom delay={idx * 60} key={idx}>
                      <NoticeData>{data.title}</NoticeData>
                    </Fade>
                  );
                })
              )
            ) : (
              <Wrapper>조회중입니다.</Wrapper>
            )}
          </NoticeData>
        </NoticeWrapper>

        <NoticeWrapper dr={`column`}>
          <NoticeInfo onClick={() => moveLinkHandler(`/newsBoard`)}>
            뉴스
          </NoticeInfo>
          <NoticeData>
            {newsDatum ? (
              newsDatum.length === 0 ? (
                <Wrapper>뉴스가 없습니다.</Wrapper>
              ) : (
                newsDatum.map((data, idx) => {
                  return (
                    <Fade bottom delay={idx * 60} key={idx}>
                      <NoticeData onClick={() => moveLinkHandler("/signin")}>
                        {data.title}
                      </NoticeData>
                    </Fade>
                  );
                })
              )
            ) : (
              <Wrapper>조회중입니다.</Wrapper>
            )}
          </NoticeData>
        </NoticeWrapper>
      </NewWrapper>
    </Wrapper>
  );
};

export default MM00Presenter;
