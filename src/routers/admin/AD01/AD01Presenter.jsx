import React from "react";
import styled from "styled-components";
import {
  WholeWrapper,
  Wrapper,
  TextInput,
} from "../../../components/CommonComponents";
import { Fade } from "react-reveal";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const BoardManage = styled.div`
  width: 100%;
  height: 100vh;
`;

const BoardLists = styled.li`
  width: 100%;
  height: 30px;

  display: flex;
  flex-direction: column;
`;

const ManageButtonArea = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: none;
  border: none;

  margin-top: 20px;
  margin-right: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const EditButton = styled.button`
  width: 50px;
  height: 30px;
  margin-left: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.ftColor || `#fff`};
  background-color: ${(props) => props.bgColor};

  border: 2px solid #55e6c1;

  &:hover {
    background-color: #fff;
    color: #55e6c1;
  }
`;

const DeleteBtn = styled.button`
  width: 50px;
  height: 30px;
  margin-left: 15px;

  background-color: ${(props) => props.theme.errorColor};
  color: ${(props) => props.ftColor || `#fff`};

  border: 2px solid ${(props) => props.theme.errorColor};

  &:hover {
    background-color: #fff;
    color: ${(props) => props.theme.errorColor};
  }
`;

const TypeNoticeDatum = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const BoardSemiTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;

  margin-top: 30px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  &:hover {
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

const AD01Presenter = ({
  popularDatum,
  newsDatum,
  freeDatum,
  anonyDatum,
  tipsDatum,
  tab,
  changeTabHandler,
  isDialogOpen,
  _isDialogOpenToggle,
  _valueChangeHandler,
  boardDeleteHandler,
  valueTitle,
  valueDesc,
  updateFree,
}) => {
  return (
    <WholeWrapper>
      <BoardManage>
        <BoardSemiTitle onClick={() => changeTabHandler(1)}>
          인기 게시판
        </BoardSemiTitle>
        <BoardSemiTitle onClick={() => changeTabHandler(2)}>
          자유 게시판
        </BoardSemiTitle>
        <BoardSemiTitle onClick={() => changeTabHandler(3)}>
          뉴스
        </BoardSemiTitle>
        <BoardSemiTitle onClick={() => changeTabHandler(4)}>
          익명 게시판
        </BoardSemiTitle>
        <BoardSemiTitle onClick={() => changeTabHandler(5)}>
          꿀팁 게시판
        </BoardSemiTitle>
        {tab === 0 && (
          <BoardLists>
            <TypeNoticeDatum>
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
              <ManageButtonArea>
                <EditButton bgColor={`#55e6c1`}>수정</EditButton>
                <DeleteBtn>삭제</DeleteBtn>
              </ManageButtonArea>
            </TypeNoticeDatum>
            <TypeNoticeDatum>
              {freeDatum ? (
                freeDatum.length === 0 ? (
                  <Wrapper>게시글이 없습니다.</Wrapper>
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
              <ManageButtonArea>
                <EditButton bgColor={`#55e6c1`}>수정</EditButton>
                <DeleteBtn onClick={() => boardDeleteHandler()}>삭제</DeleteBtn>
              </ManageButtonArea>
            </TypeNoticeDatum>
            <TypeNoticeDatum>
              {newsDatum ? (
                newsDatum.length === 0 ? (
                  <Wrapper>뉴스가 없습니다.</Wrapper>
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
                <Wrapper>조회중입니다.</Wrapper>
              )}
              <ManageButtonArea>
                <EditButton bgColor={`#55e6c1`}>작성</EditButton>
                <EditButton bgColor={`#55e6c1`}>수정</EditButton>
                <DeleteBtn>삭제</DeleteBtn>
              </ManageButtonArea>
            </TypeNoticeDatum>
            <TypeNoticeDatum>
              {anonyDatum ? (
                anonyDatum.length === 0 ? (
                  <Wrapper>익명 게시글이 없습니다.</Wrapper>
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
              <ManageButtonArea>
                <EditButton bgColor={`#55e6c1`}>수정</EditButton>
                <DeleteBtn>삭제</DeleteBtn>
              </ManageButtonArea>
            </TypeNoticeDatum>
            <TypeNoticeDatum>
              {tipsDatum ? (
                tipsDatum.length === 0 ? (
                  <Wrapper>꿀팁 게시글이 없습니다.</Wrapper>
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
              <ManageButtonArea>
                <EditButton bgColor={`#55e6c1`}>수정</EditButton>
                <DeleteBtn>삭제</DeleteBtn>
              </ManageButtonArea>
            </TypeNoticeDatum>
          </BoardLists>
        )}

        {tab === 1 && (
          <BoardLists>
            <TypeNoticeDatum>
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
              <ManageButtonArea>
                <EditButton bgColor={`#55e6c1`}>수정</EditButton>
                <DeleteBtn>삭제</DeleteBtn>
              </ManageButtonArea>
            </TypeNoticeDatum>
          </BoardLists>
        )}
        {tab === 2 && (
          <BoardLists>
            <TypeNoticeDatum>
              {freeDatum ? (
                freeDatum.length === 0 ? (
                  <Wrapper>게시글이 없습니다.</Wrapper>
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
              <ManageButtonArea>
                <EditButton bgColor={`#55e6c1`}>수정</EditButton>
                <DeleteBtn onClick={(onClick = () => boardDeleteHandler())}>
                  삭제
                </DeleteBtn>
              </ManageButtonArea>
            </TypeNoticeDatum>
          </BoardLists>
        )}
        {tab === 3 && (
          <BoardLists>
            <TypeNoticeDatum>
              {newsDatum ? (
                newsDatum.length === 0 ? (
                  <Wrapper>뉴스가 없습니다.</Wrapper>
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
                <Wrapper>조회중입니다.</Wrapper>
              )}
              <ManageButtonArea>
                <EditButton bgColor={`#55e6c1`}>작성</EditButton>
                <EditButton bgColor={`#55e6c1`}>수정</EditButton>
                <DeleteBtn>삭제</DeleteBtn>
              </ManageButtonArea>
            </TypeNoticeDatum>
          </BoardLists>
        )}
        {tab === 4 && (
          <BoardLists>
            <TypeNoticeDatum>
              {anonyDatum ? (
                anonyDatum.length === 0 ? (
                  <Wrapper>익명 게시글이 없습니다.</Wrapper>
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
              <ManageButtonArea>
                <EditButton bgColor={`#55e6c1`}>수정</EditButton>
                <DeleteBtn>삭제</DeleteBtn>
              </ManageButtonArea>
            </TypeNoticeDatum>
          </BoardLists>
        )}
        {tab === 5 && (
          <BoardLists>
            <TypeNoticeDatum>
              {tipsDatum ? (
                tipsDatum.length === 0 ? (
                  <Wrapper>꿀팁 게시글이 없습니다.</Wrapper>
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
              <ManageButtonArea>
                <EditButton bgColor={`#55e6c1`}>수정</EditButton>
                <DeleteBtn>삭제</DeleteBtn>
              </ManageButtonArea>
            </TypeNoticeDatum>
          </BoardLists>
        )}
      </BoardManage>
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
              value={valueTitle}
              onChange={_valueChangeHandler}
            />
          </Wrapper>
          <Wrapper dr={`row`}>
            내용
            <TextInput
              name="desc"
              value={valueDesc}
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
    </WholeWrapper>
  );
};

export default AD01Presenter;
