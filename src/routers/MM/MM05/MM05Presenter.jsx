import React from "react";
import {
  WholeWrapper,
  Wrapper,
  TitleBox,
  TopBoard,
  BottomBoard,
  WriteBtn,
  TextInput,
  DeleteBtn,
  TextArea,
} from "../../../components/CommonComponents";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const EditButton = styled.button`
  width: 50px;
  height: 30px;

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

const Title = styled.h2`
  font-size: 20px;
`;

const InputWrapper = styled.div`
  width: 550px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InfoInput = styled.input`
  width: ${(props) => props.width || `450px`};
  height: 35px;
  border-radius: 10px;
  margin: 10px 0px;
  padding: 0px 15px;
  outline: none;
  border: 1px solid ${(props) => props.theme.grayColor};
  background: none;
  box-shadow: ${(props) => props.theme.boxShadow};
  transition: 0.5s;

  &:hover {
    box-shadow: 5px 5px 5px #0b0b0b;
  }

  &:focus {
    box-shadow: 5px 5px 5px #0b0b0b;
  }
`;

const MM05Presenter = ({
  userDetailData,
  isDialogOpen,
  _isDialogOpenToggle,
  valueEmail,
  valueName,
  valueNickName,
  valueMobile,
  _valueChangeHandler,
  userUpdate,
  userDelete,
}) => {
  return (
    <WholeWrapper width={`100%`} height={`500px`}>
      <Title> 마이 페이지</Title>
      <InputWrapper>
        이름 : {JSON.parse(userDetailData[0]).getUser.email}
        <InfoInput type="text" />
      </InputWrapper>
      <InputWrapper>
        닉네임 :
        <InfoInput type="text" />
      </InputWrapper>
      <InputWrapper>
        전화번호 :
        <InfoInput type="text" />
      </InputWrapper>
      <InputWrapper>
        주소 :
        <InfoInput type="text" />
      </InputWrapper>
      <InputWrapper>
        상세주소 :
        <InfoInput type="text" />
      </InputWrapper>

      <EditButton
        bgColor={"#55E6C1"}
        ftColor={`#fff`}
        onClick={() => _isDialogOpenToggle()}
      >
        수정
      </EditButton>

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
          <Wrapper>
            <Wrapper al={`flex-start`}>이메일</Wrapper>
            <Wrapper dr={`row`}>
              <Wrapper height={`50px`} al={`flex-start`} width={`480px`}>
                <TextInput
                  width={`250px`}
                  height={`50px`}
                  name="email"
                  value={valueEmail}
                  onChange={_valueChangeHandler}
                  placeholder="수정할 이메일을 쓰세요"
                />
              </Wrapper>
            </Wrapper>
          </Wrapper>
          <Wrapper>
            <Wrapper al={`flex-start`}>이름</Wrapper>
            <Wrapper height={`50px`} al={`flex-start`} width={`480px`}>
              <TextInput
                width={`250px`}
                height={`50px`}
                name="name"
                value={valueName}
                onChange={_valueChangeHandler}
                placeholder="수정할 이름을 쓰세요"
              />
            </Wrapper>
          </Wrapper>
          <Wrapper>
            <Wrapper al={`flex-start`}>닉네임</Wrapper>
            <Wrapper dr={`row`}>
              <Wrapper height={`50px`} al={`flex-start`} width={`480px`}>
                <TextInput
                  width={`250px`}
                  height={`50px`}
                  name="nickName"
                  value={valueNickName}
                  onChange={_valueChangeHandler}
                  placeholder="수정할 닉네임을 쓰세요"
                />
              </Wrapper>
            </Wrapper>
          </Wrapper>
          <Wrapper>
            <Wrapper al={`flex-start`}>휴대전화</Wrapper>
            <Wrapper dr={`row`}>
              <Wrapper height={`50px`} al={`flex-start`} width={`480px`}>
                <TextInput
                  width={`250px`}
                  height={`50px`}
                  name="mobile"
                  value={valueMobile}
                  onChange={_valueChangeHandler}
                  placeholder="수정할 휴대전화 번호를 쓰세요"
                />
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={userUpdate}>
            수정하기
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

export default MM05Presenter;
