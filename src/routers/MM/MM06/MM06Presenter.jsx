import React from "react";
import { WholeWrapper } from "../../../components/CommonComponents";
import styled from "styled-components";
import { Fade } from "react-reveal";

const Board_Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
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

const MM06Presenter = ({ newsDatum }) => {
  return (
    <WholeWrapper width={`100%`} height={`100vh`}>
      <Board_Wrapper height={`100%`}>
        NEWS
        <NoticeData mgTop={`10px`}>
          {newsDatum ? (
            newsDatum.length === 0 ? (
              <NoticeData>뉴스의 게시글이 없습니다.</NoticeData>
            ) : (
              newsDatum.map((data, idx) => {
                return (
                  <Fade bottom delay={idx * 60} key={idx}>
                    <NoticeData>{data.title}</NoticeData>
                  </Fade>
                );
              })
            )
          ) : (
            <NoticeData>뉴스를 조회하는 중 입니다.</NoticeData>
          )}
        </NoticeData>
      </Board_Wrapper>
    </WholeWrapper>
  );
};

export default MM06Presenter;
