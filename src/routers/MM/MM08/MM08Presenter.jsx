import React from "react";
import { Wrapper } from "../../../components/CommonComponents";
import styled from "styled-components";

const DataDiv = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const MM08Presenter = ({ tipsDatum }) => {
  return (
    <Wrapper width={`100%`} height={`100vh`} dr={`column`}>
      꿀팁게시판
      <DataDiv>
        {tipsDatum ? (
          tipsDatum.length === 0 ? (
            <DataDiv>꿀팁 게시글이 없습니다.</DataDiv>
          ) : (
            tipsDatum.map((data, idx) => {
              return (
                <DataDiv key={idx}>
                  {data.title}
                  {data.description}
                </DataDiv>
              );
            })
          )
        ) : (
          <DataDiv>꿀팁 게시글이 없습니다.</DataDiv>
        )}
      </DataDiv>
    </Wrapper>
  );
};

export default MM08Presenter;
