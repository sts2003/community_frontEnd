import React, { useEffect, useState } from "react";
import {
  GET_POPULAR_DETAIL,
  GET_POPULAR_BEFORE_ID,
  GET_POPULAR_NEXT_ID,
} from "../MM/MM01/MM01Queries";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  WholeWrapper,
  RsWrapper,
  CommonButton,
  Wrapper,
} from "../../components/CommonComponents";
import useTitle from "@4leaf.ysh/use-title";

const Board_D_title = styled.h2`
  width: 100%;
  padding: 20px;
  font-size: 22px;
  font-weight: 700;
`;

const Board_D = styled.ul`
  width: 100%;
  height: ${(props) => (props.height ? props.height : `40px`)};
  display: flex;
  flex-direction: row;
  align-items: center;

  background: ${(props) => props.bgColor};

  @media (max-width: 700px) {
    flex-direction: column;
    height: auto;
  }
`;
const Image = styled.img`
  width: 400px;
  height: 400px;
  border: 1px solid #777;
  margin: 10px;
  object-fit: cover;
`;

const Board_D_List = styled.li`
  width: ${(props) => props.width};
  line-height: 40px;
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  text-align: ${(props) => props.ta || `center`};
  padding: ${(props) => (props.padding ? props.padding : `0px 10px`)};
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.16);
  border-radius: ${(props) => props.radius};
`;

const Board_D_Desc = styled.div`
  width: 100%;
  min-height: 500px;
  padding: 15px;
  line-height: 1.4;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.16);
`;

export default ({ match, history, width }) => {
  ////////////// - USE CONTEXT- ///////////////

  ////////////// - USE STATE- ///////////////
  const [currentData, setCurrentData] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [imagePath, setImagePath] = useState(``);
  const [value, setValue] = useState({
    title: "",
    desc: "",
  });
  ///////////// - USE QUERY- ////////////////

  const {
    data: popularData,
    loading: popularLoading,
    refetch: popularRefetch,
  } = useQuery(GET_POPULAR_DETAIL, {
    variables: {
      id: match.params.key,
    },
  });

  const {
    data: popularNextData,
    loading: popularNextLoading,
    refetch: popularNextRefetch,
  } = useQuery(GET_POPULAR_NEXT_ID, {
    variables: {
      id: match.params.key,
    },
  });

  const {
    data: popularBeforeData,
    loading: popularBeforeLoading,
    refetch: popularBeforeRefetch,
  } = useQuery(GET_POPULAR_BEFORE_ID, {
    variables: {
      id: match.params.key,
    },
  });

  ///////////// - USE MUTATION - /////////////

  ///////////// - EVENT HANDLER- ////////////

  const _moveListBoard = (link) => {
    history.push(link);
  };

  const _moveBeforeBoard = () => {
    if (popularBeforeData.getPopularBeforeId === null) {
      toast.error("첫번째 글 입니다.");

      return null;
    }
    history.push(popularBeforeData.getPopularBeforeId._id);
  };

  const _moveNextBoard = () => {
    if (popularNextData.getPopularNextId === null) {
      toast.error("마지막 글 입니다.");

      return null;
    }

    history.push(popularNextData.getPopularNextId._id);
  };

  ///////////// - USE EFFECT- ///////////////
  useEffect(() => {
    if (popularData && popularData.getPopularDetail) {
      let tempData = popularData.getPopularDetail;

      console.log(tempData);
      const desc = document.getElementById("popular_description-js");

      if (desc !== null) {
        desc.innerHTML = tempData.description;
        setCurrentData(tempData);
      }
    }
  }, [popularData]);

  useEffect(() => {
    popularRefetch();
    popularNextRefetch();
    popularBeforeRefetch();
  }, []);

  useTitle(`Popular Board`);

  return (
    <WholeWrapper margin={`150px 0 0 0`} width={`100%`} height={`100%`}>
      <RsWrapper padding={`100px 0`}>
        <Board_D_title>
          {currentData ? currentData.title : <div>로딩중...</div>}
        </Board_D_title>
        <Board_D dr={`row`}>
          <Board_D_List
            width={width < 700 ? `100%` : `150px`}
            bgColor={`#dcdcdc`}
          >
            작성자
          </Board_D_List>
          <Board_D_List width={width < 700 ? `100%` : `calc((100% - 150px))`}>
            {currentData ? currentData._id : <div>로딩중...</div>}
          </Board_D_List>
          <Board_D_List
            width={width < 700 ? `100%` : `250px`}
            bgColor={`#dcdcdc`}
          >
            작성일
          </Board_D_List>
          <Board_D_List width={width < 700 ? `100%` : `calc((100% - 150px))`}>
            {currentData ? currentData.createdAt : <div>로딩중...</div>}
          </Board_D_List>
        </Board_D>

        <Board_D_Desc>
          <Wrapper
            id={"popular_description-js"}
            className={"ql-editor"}
          ></Wrapper>
          <Image src={imagePath}></Image>
        </Board_D_Desc>

        <Wrapper margin={`30px 0px`} ju={`flex-end`} dr={`row`}>
          <CommonButton
            width={`80px`}
            margin={`0px 10px 0px 0px`}
            bgColor={`#273c75`}
            fontColor={`#273c75`}
            onClick={() => _moveListBoard("/popular")}
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
        </Wrapper>
      </RsWrapper>
    </WholeWrapper>
  );
};
