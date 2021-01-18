import React from "react";
import { Wrapper } from "../../../components/CommonComponents";
import { Fade } from "react-reveal";
import styled from "styled-components";

const BoardTitle = styled.h1`
  font-size: 25px;
  margin-top: 50px;
`;
const BoardSemiTitle = styled.h1`
  font-size: 25px;
`;

const NoticeTypeArea = styled.div`
  width: 98%;
  height: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TypeNoticeDatum = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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

const MM09Presenter = ({
  popularDatum,
  newsDatum,
  freeDatum,
  anonyDatum,
  tipsDatum,
  movePopularDetailHandler,
  moveFreeDetailHandler,
  moveNewsDetailHandler,
}) => {
  return (
    <Wrapper width={`100%`} height={`100%`}>
      <BoardTitle>통합게시판</BoardTitle>

      <NoticeTypeArea>
        <BoardSemiTitle>인기 게시판</BoardSemiTitle>
        <TypeNoticeDatum>
          {popularDatum ? (
            popularDatum.length === 0 ? (
              <Wrapper>게시글이 없습니다.</Wrapper>
            ) : (
              popularDatum.map((data, idx) => {
                return (
                  <Fade bottom delay={idx * 60} key={idx}>
                    <NoticeData
                      onClick={() => movePopularDetailHandler(data._id)}
                    >
                      {data.title}
                    </NoticeData>
                  </Fade>
                );
              })
            )
          ) : (
            <Wrapper>조회중입니다.</Wrapper>
          )}
        </TypeNoticeDatum>
      </NoticeTypeArea>

      <NoticeTypeArea>
        <BoardSemiTitle>자유 게시판</BoardSemiTitle>
        <TypeNoticeDatum>
          {freeDatum ? (
            freeDatum.length === 0 ? (
              <Wrapper>자유게시판이 없습니다.</Wrapper>
            ) : (
              freeDatum.map((data, idx) => {
                return (
                  <Fade bottom delay={idx * 60} key={idx}>
                    <NoticeData onClick={() => moveFreeDetailHandler(data._id)}>
                      {data.title}
                    </NoticeData>
                  </Fade>
                );
              })
            )
          ) : (
            <Wrapper>조회중입니다.</Wrapper>
          )}
        </TypeNoticeDatum>
      </NoticeTypeArea>

      <NoticeTypeArea>
        <BoardSemiTitle> 뉴스 </BoardSemiTitle>
        <TypeNoticeDatum>
          {newsDatum ? (
            newsDatum.length === 0 ? (
              <Wrapper>뉴스가 없습니다.</Wrapper>
            ) : (
              newsDatum.map((data, idx) => {
                return (
                  <Fade bottom delay={idx * 60} key={idx}>
                    <NoticeData onClick={() => moveNewsDetailHandler(data._id)}>
                      {data.title}
                    </NoticeData>
                  </Fade>
                );
              })
            )
          ) : (
            <Wrapper>조회중입니다.</Wrapper>
          )}
        </TypeNoticeDatum>
      </NoticeTypeArea>

      <NoticeTypeArea>
        <BoardSemiTitle>익명 게시판</BoardSemiTitle>
        <TypeNoticeDatum>
          {anonyDatum ? (
            anonyDatum.length === 0 ? (
              <Wrapper>익명게시글이 없습니다.</Wrapper>
            ) : (
              anonyDatum.map((data, idx) => {
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
        </TypeNoticeDatum>
      </NoticeTypeArea>

      <NoticeTypeArea>
        <BoardSemiTitle>꿀팁 게시판</BoardSemiTitle>
        <TypeNoticeDatum>
          {tipsDatum ? (
            tipsDatum.length === 0 ? (
              <Wrapper>꿀팁게시판이 없습니다.</Wrapper>
            ) : (
              tipsDatum.map((data, idx) => {
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
        </TypeNoticeDatum>
      </NoticeTypeArea>
    </Wrapper>
  );
};

export default MM09Presenter;
