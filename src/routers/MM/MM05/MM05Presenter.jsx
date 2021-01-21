import React from "react";
import {
  WholeWrapper,
  Wrapper,
  TextInput,
} from "../../../components/CommonComponents";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 20px;
  margin-right: 10px;
`;

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

const DeleteBtn = styled.button`
  width: 50px;
  height: 30px;

  background-color: ${(props) => props.theme.errorColor};
  color: ${(props) => props.ftColor || `#fff`};

  border: 2px solid ${(props) => props.theme.errorColor};

  &:hover {
    background-color: #fff;
    color: ${(props) => props.theme.errorColor};
  }
`;

const Title = styled.h2`
  font-size: 20px;
`;

const InputWrapper = styled.div`
  width: 550px;
  height: 40px;

  border: 1px solid #0b0b0b;
  border-radius: 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 20px;

  &:hover {
    transition: 0.5s;
    box-shadow: ${(props) => props.theme.boxShadow};
    cursor: pointer;
  }
`;

const MM05Presenter = ({
  userDatum,
  isDialogOpen,
  _isDialogOpenToggle,
  valueEmail,
  valueName,
  valueNickName,
  valueMobile,
  valueAddress,
  valueDetailAddress,
  _valueChangeHandler,
  userUpdate,
  userDelete,
}) => {
  return (
    <WholeWrapper width={`100%`} height={`500px`}>
      <Title> 마이 페이지</Title>
      <InputWrapper>
        이름 : {JSON.parse(userDatum[0]).getUser.email}
      </InputWrapper>
      <InputWrapper>
        닉네임 : {JSON.parse(userDatum[0]).getUser.nickName}
      </InputWrapper>
      <InputWrapper>
        전화번호 : {JSON.parse(userDatum[0]).getUser.mobile}
      </InputWrapper>
      <InputWrapper>
        주소 : {JSON.parse(userDatum[0]).getUser.address}
      </InputWrapper>
      <InputWrapper>
        상세주소 : {JSON.parse(userDatum[0]).getUser.detailAddress}
      </InputWrapper>
      <ButtonArea>
        <EditButton
          bgColor={"#55E6C1"}
          ftColor={`#fff`}
          onClick={_isDialogOpenToggle}
        >
          수정
        </EditButton>

        <DeleteBtn onClick={userDelete} ftColor={`#fff`}>
          삭제
        </DeleteBtn>
      </ButtonArea>
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
          <Wrapper>
            <Wrapper al={`flex-start`}>주소</Wrapper>
            <Wrapper dr={`row`}>
              <Wrapper height={`50px`} al={`flex-start`} width={`480px`}>
                <TextInput
                  width={`250px`}
                  height={`50px`}
                  name="address"
                  value={valueAddress}
                  onChange={_valueChangeHandler}
                  placeholder="수정할 주소를 쓰세요"
                />
              </Wrapper>
            </Wrapper>
          </Wrapper>
          <Wrapper>
            <Wrapper al={`flex-start`}>상세주소</Wrapper>
            <Wrapper dr={`row`}>
              <Wrapper height={`50px`} al={`flex-start`} width={`480px`}>
                <TextInput
                  width={`250px`}
                  height={`50px`}
                  name="detailAddress"
                  value={valueDetailAddress}
                  onChange={_valueChangeHandler}
                  placeholder="수정할 상세주소를 쓰세요"
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
