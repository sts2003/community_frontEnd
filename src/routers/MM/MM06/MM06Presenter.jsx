import React from "react";
import { WholeWrapper } from "../../../components/CommonComponents";
import styled from "styled-components";
import { Fade } from "react-reveal";

const News_Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: ${(props) => props.width || `100%`};
  height: ${(props) => props.height || `100%`};
`;

const NewsTitle = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  font-size: 25px;
  margin-top: 100px;
`;

const NewsList = styled.div`
  width: 90%;
  height: 300px;
  cursor: pointer;
  margin-left: 100px;
  margin-top: 80px;

  display: flex;
  flex-direction: row;

  border: ${(props) => props.theme.border};

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow};
  }
`;

const NewsImage = styled.img`
  width: 400px;
  height: 300px;

  background-size: cover;
`;

const NewsDataTitle = styled.div`
  width: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 13px;
  margin-top: ${(props) => props.mgTop || `0px`};

  border-right: 1px solid #0b0b0b;
`;

const NewsDataDesc = styled.div`
  width: 700px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const NewsDataCreatedAt = styled.div`
  width: 150px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MM06Presenter = ({ newsDatum, moveLinkHandler }) => {
  return (
    <WholeWrapper width={`100%`} height={`100vh`}>
      <NewsTitle>NEWS</NewsTitle>
      <News_Wrapper>
        <News_Wrapper>
          {newsDatum ? (
            newsDatum.length === 0 ? (
              <NewsDataTitle>뉴스의 게시글이 없습니다.</NewsDataTitle>
            ) : (
              newsDatum.map((data, idx) => {
                return (
                  <Fade bottom delay={idx * 60} key={idx}>
                    <NewsList
                      key={idx}
                      onClick={() => moveLinkHandler(data._id)}
                    >
                      <NewsImage
                        src={
                          "https://firebasestorage.googleapis.com/v0/b/leafsts-fileserver.appspot.com/o/4leaf-community%2Fuploads%2FnewsBoard%2F%ED%98%B8%EB%82%98%EC%9A%B0%EB%91%90%20%EC%B6%95%EC%8B%A0%EC%A7%A4.png?alt=media&token=85586c8b-40f7-4d09-bd49-7ccdad8c538f"
                        }
                      ></NewsImage>
                      <NewsDataTitle>{data.title}</NewsDataTitle>
                      <NewsDataDesc>{data.description}</NewsDataDesc>
                      <NewsDataCreatedAt>{data.createdAt}</NewsDataCreatedAt>
                    </NewsList>
                  </Fade>
                );
              })
            )
          ) : (
            <NewsDataTitle>뉴스를 조회하는 중 입니다.</NewsDataTitle>
          )}
        </News_Wrapper>
      </News_Wrapper>
    </WholeWrapper>
  );
};

export default MM06Presenter;
