import React, { useEffect, useState } from "react";
import { useQuery } from "react-apollo-hooks";
import styled from "styled-components";
import {
  WholeWrapper,
  Wrapper,
  CommonButton,
} from "../../components/CommonComponents";
import {
  GET_NEWS_DETAIL,
  GET_NEWS_NEXT_ID,
  GET_NEWS_BEFORE_ID,
} from "../MM/MM06/MM06Queries";
import useTitle from "@4leaf.ysh/use-title";
import { toast } from "react-toastify";

const NewsTitle = styled.h2`
  width: 100%;
  padding: 20px;
  font-size: 22px;
  font-weight: 700;
  border-bottom: 1px solid #0b0b0b;

  justify-content: center;
  align-items: center;
  display: flex;
`;

const NewsDesc = styled.div`
  width: 100%;
  min-height: 400px;
  padding: 15px;
  line-height: 1.4;
  box-shadow: ${(props) => props.theme.boxShadow};
`;

const NewsButtonArea = styled.div`
  width: 100%;

  display: flex;
  flex-direction: ${(props) => props.dr || `row`};
  align-items: center;
  justify-content: ${(props) => props.ju || `center`};

  margin: ${(props) => props.margin || `0px`};
`;

const NewsHead = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 200px;
`;

export default ({ history, match }) => {
  ////////////// - USE CONTEXT- /////////////
  ////////////// - USE STATE- ///////////////

  const [currentData, setCurrentData] = useState(null);
  ///////////// - USE QUERY- ////////////////

  const {
    data: newsDetailData,
    loading: newsDetailLoading,
    refetch: newsDetailRefetch,
  } = useQuery(GET_NEWS_DETAIL, {
    variables: {
      id: match.params.key,
    },
  });
  const {
    data: nextNewsData,
    loading: nextNewsLoading,
    refetch: nextNewsRefetch,
  } = useQuery(GET_NEWS_NEXT_ID, {
    variables: {
      id: match.params.key,
    },
  });
  const {
    data: beforeNewsData,
    loading: beforeNewsLoading,
    refetch: beforeNewsRefetch,
  } = useQuery(GET_NEWS_BEFORE_ID, {
    variables: {
      id: match.params.key,
    },
  });
  ///////////// - USE MUTATION - /////////////

  ///////////// - EVENT HANDLER- ////////////

  const _moveLinkHandler = (link) => {
    history.push(link);
  };

  const _moveNextBoard = () => {
    if (nextNewsData.getNewsNextId === null) {
      toast.error("첫번째 글 입니다.");

      return null;
    }
    history.push(nextNewsData.getNewsNextId._id);
  };
  const _moveBeforeBoard = () => {
    if (beforeNewsData.getNewsBeforeId === null) {
      toast.error("마지막 글 입니다.");

      return null;
    }
    history.push(beforeNewsData.getNewsBeforeId._id);
  };

  ///////////// - USE EFFECT- ///////////////

  useEffect(() => {
    if (newsDetailData && newsDetailData.getNewsDetail) {
      let tempData = newsDetailData.getNewsDetail;

      console.log(tempData);
      const desc = document.getElementById("news_description-js");

      if (desc !== null) {
        desc.innerHTML = tempData.description;
        setCurrentData(tempData);
      }
    }
  }, [newsDetailData]);

  useEffect(() => {
    newsDetailRefetch();
    nextNewsRefetch();
    beforeNewsRefetch();
  }, []);

  useTitle(`News Board`);

  return (
    <WholeWrapper margin={`50px 0 0 0`} width={`100%`} height={`100%`}>
      <Wrapper border={`1px solid #0b0b0b`} radius={`40px`}>
        <NewsHead>
          <NewsTitle>
            {currentData ? (
              currentData.title
            ) : (
              <Wrapper>로딩중입니다...</Wrapper>
            )}
          </NewsTitle>
        </NewsHead>
        <NewsDesc>
          <Wrapper id={"news_description-js"}></Wrapper>
        </NewsDesc>
      </Wrapper>

      <NewsButtonArea margin={`30px 0px`} ju={`flex-end`} dr={`row`}>
        <CommonButton
          width={`80px`}
          margin={`0px 10px 0px 0px`}
          bgColor={`#273c75`}
          fontColor={`#273c75`}
          onClick={() => _moveLinkHandler("/newsBoard")}
        >
          목록
        </CommonButton>

        <CommonButton
          width={`80px`}
          margin={`0px 10px 0px 0px`}
          onClick={() => _moveBeforeBoard()}
          bgColor={`#1e272e`}
          fontColor={`#1e272e`}
        >
          이전
        </CommonButton>

        <CommonButton
          width={`80px`}
          margin={`0px 10px 0px 0px`}
          onClick={() => _moveNextBoard()}
          bgColor={`#777`}
          fontColor={`#777`}
        >
          다음
        </CommonButton>
      </NewsButtonArea>
    </WholeWrapper>
  );
};
