import React from "react";
import { WholeWrapper } from "../../../components/CommonComponents";
import styled from "styled-components";

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

const MM05Presenter = ({ userDatum }) => {
  return (
    <WholeWrapper width={`100%`} height={`500px`}>
      <Title> 마이 페이지</Title>
      <InputWrapper>
        이름 :
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

      <EditButton bgColor={"#55E6C1"} ftColor={`#fff`}>
        수정
      </EditButton>
    </WholeWrapper>
  );
};

export default MM05Presenter;
