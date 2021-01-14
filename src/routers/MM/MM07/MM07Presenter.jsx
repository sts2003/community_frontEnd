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

const MM07Presenter = ({ anonyDatum }) => {
  return (
    <Wrapper width={`100%`} height={`100vh`} dr={`column`}>
      익명게시판
      <DataDiv>
        {anonyDatum ? (
          anonyDatum.length === 0 ? (
            <DataDiv>익명 게시글이 없습니다.</DataDiv>
          ) : (
            anonyDatum.map((data, idx) => {
              return (
                <DataDiv>
                  {data.title}
                  {data.description}
                </DataDiv>
              );
            })
          )
        ) : (
          <DataDiv>익명 게시글이 없습니다.</DataDiv>
        )}
      </DataDiv>
    </Wrapper>
  );
};

export default MM07Presenter;
