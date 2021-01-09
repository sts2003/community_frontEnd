import React, { useEffect, useState } from "react";
import {
  GET_FREE_DETAIL,
  //   GET_NOTICEBOARD_BEFORE_ID,
  //   GET_NOTICEBOARD_NEXT_ID,
  DELETE_FREE,
  UPDATE_FREE,
} from "../MM/MM02/MM02Queries";
import styled from "styled-components";
import { useQuery, useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  WholeWrapper,
  RsWrapper,
  CommonButton,
  Wrapper,
  TextInput,
  ImageBox,
} from "../../components/CommonComponents";
import useTitle from "@4leaf.ysh/use-title";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

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
    data: freeData,
    loading: freeLoading,
    refetch: freeRefetch,
  } = useQuery(GET_FREE_DETAIL, {
    variables: {
      id: match.params.key,
    },
  });

  //   const {
  //     data: freeNextData,
  //     loading: freeNextLoading,
  //     refetch: freeNextRefetch,
  //   } = useQuery(GET_FREE_NEXT_ID, {
  //     variables: {
  //       id: match.params.key,
  //     },
  //   });

  //   const {
  //     data: freeBeforeData,
  //     loading: freeBeforeLoading,
  //     refetch: freeBeforeRefetch,
  //   } = useQuery(GET_FREE_BEFORE_ID, {
  //     variables: {
  //       id: match.params.key,
  //     },
  //   });

  ///////////// - USE MUTATION - /////////////
  const [updateFreeBoard] = useMutation(UPDATE_FREE);
  const [deleteFreeBoard] = useMutation(DELETE_FREE);

  ///////////// - EVENT HANDLER- ////////////

  const updateFree = async () => {
    const { data } = await updateFreeBoard({
      variables: {
        id: freeData && freeData.getFreeDetail._id,
        title: value.title,
        description: value.desc,
      },
    });

    if (data.updateFree) {
      toast.info("게시글이 수정되었습니다");
      history.push("/");
      setValue("");
      _isDialogOpenToggle();
    } else {
      toast.error("다시 시도해주세요");
    }
  };

  const _isDialogOpenToggle = () => {
    if (!isDialogOpen) {
      setValue({ title: currentData.title, desc: currentData.description });
    }
    setIsDialogOpen(!isDialogOpen);
  };

  const _valueChangeHandler = (event) => {
    const nextState = { ...value };

    nextState[event.target.name] = event.target.value;

    setValue(nextState);
  };

  const _moveListBoard = (link) => {
    history.push(link);
  };

  const _moveBeforeBoard = () => {
    if (freeBeforeData.getFreeBeforeId === null) {
      toast.error("첫번째 글 입니다.");

      return null;
    }
    history.push(freeBeforeData.getFreeBeforeId.id);
  };

  const _moveNextBoard = () => {
    if (freeNextData.getFreeNextId === null) {
      toast.error("마지막 글 입니다.");

      return null;
    }

    history.push(FreeNextData.getFreeBoardNextId.id);
  };

  const boardDeleteHandler = (_id) => {
    confirmAlert({
      title: "DELETE FREE",
      message: "선택하신 공지사항을 삭제하시겠습니까?",
      buttons: [
        {
          label: "취소",
          onClick: () => {
            return false;
          },
        },
        {
          label: "확인",
          onClick: () => freeDeleteHandlerAfter(_id),
        },
      ],
    });
  };

  const freeDeleteHandlerAfter = async (_id) => {
    const { data } = await deleteFreeBoard({
      variables: {
        id: currentData._id,
      },
    });

    if (data.deleteFree) {
      toast.info("DELETE FREE!");
      history.push("/");
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };

  ///////////// - USE EFFECT- ///////////////
  useEffect(() => {
    if (freeData && freeData.getFreeDetail) {
      let tempData = freeData.getFreeDetail;

      const desc = document.getElementById("notice_description-js");

      if (desc !== null) {
        desc.innerHTML = tempData.description;
        setCurrentData(tempData);
      }
    }
  }, [freeData]);

  useEffect(() => {
    freeRefetch();
    // freeNextRefetch();
    // freeBeforeRefetch();
  }, []);

  useTitle(`Free Board`);

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
            {currentData ? currentData.id : <div>로딩중...</div>}
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
            id={"notice_description-js"}
            className={"ql-editor"}
          ></Wrapper>
          <ImageBox src={imagePath} />
        </Board_D_Desc>

        <Wrapper margin={`30px 0px`} ju={`flex-end`} dr={`row`}>
          <CommonButton
            width={`80px`}
            margin={`0px 10px 0px 0px`}
            bgColor={`#55E6C1`}
            onClick={() => _isDialogOpenToggle()}
          >
            수정
          </CommonButton>

          <CommonButton
            width={`80px`}
            margin={`0px 10px 0px 0px`}
            onClick={() => boardDeleteHandler()}
          >
            삭제
          </CommonButton>

          <CommonButton
            width={`80px`}
            margin={`0px 10px 0px 0px`}
            bgColor={`#273c75`}
            fontColor={`#273c75`}
            onClick={() => _moveListBoard("/freeBoard")}
          >
            목록
          </CommonButton>

          <CommonButton
            width={`80px`}
            margin={`0px 10px 0px 0px`}
            onClick={() => _moveBeforeBoard()}
          >
            이전
          </CommonButton>

          <CommonButton
            width={`80px`}
            margin={`0px 10px 0px 0px`}
            onClick={() => _moveNextBoard()}
          >
            다음
          </CommonButton>
        </Wrapper>

        {/* Dialog Area */}
        <Dialog
          onClose={_isDialogOpenToggle}
          aria-labelledby="customized-dialog-title"
          open={isDialogOpen}
          fullWidth={true}
        >
          <DialogTitle
            id="customized-dialog-title"
            onClose={_isDialogOpenToggle}
            // class="dialog_title"
          >
            게시글 수정
          </DialogTitle>
          <DialogContent>
            <Wrapper dr={`row`}>
              제목
              <TextInput
                name="title"
                value={value.title}
                onChange={_valueChangeHandler}
              />
            </Wrapper>
            <Wrapper dr={`row`}>
              내용
              <TextInput
                name="desc"
                value={value.desc}
                onChange={_valueChangeHandler}
              />
            </Wrapper>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={updateFree}>
              수정
            </Button>
            <Button color="secondary" onClick={_isDialogOpenToggle}>
              취소
            </Button>
          </DialogActions>
        </Dialog>

        {/* Dialog Area */}
      </RsWrapper>
    </WholeWrapper>
  );
};
