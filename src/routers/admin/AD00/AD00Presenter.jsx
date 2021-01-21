import React from "react";
import { WholeWrapper, Wrapper } from "../../../components/CommonComponents";
import Typist from "react-typist";

const AD00Presenter = () => {
  return (
    <WholeWrapper al={`center`} ju={`center`} height={`100vh`}>
      <Typist cursor={{ show: false }}>
        <Wrapper>안녕하세요 커뮤니티 사이트 관리자페이지 입니다.</Wrapper>
      </Typist>
    </WholeWrapper>
  );
};

export default AD00Presenter;
