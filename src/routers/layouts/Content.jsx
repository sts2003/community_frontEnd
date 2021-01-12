import React from "react";
import { Route } from "react-router-dom";
import MM00 from "../../routers/MM/MM00";
import MM01 from "../../routers/MM/MM01";
import MM02 from "../../routers/MM/MM02";
import MM03 from "../../routers/MM/MM03";
import MM04 from "../../routers/MM/MM04";
import MM05 from "../../routers/MM/MM05";
import MM06 from "../../routers/MM/MM06";
import Free_D from "../BOARD_D/Free_D";
import Popular_D from "../BOARD_D/Popular_D";
import SimpleSlider from "../../components/Slide";
import styled from "styled-components";

const WholeWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = () => {
  return (
    <WholeWrapper>
      <Route exact path="/" component={MM00} />
      <Route exact path="/popular" component={MM01} />
      <Route exact path="/freeBoard" component={MM02} />
      <Route exact path="/free-detail/:key" component={Free_D} />
      <Route exact path="/popular-detail/:key" component={Popular_D} />
      <Route exact path="/signin" component={MM03} />
      <Route exact path="/signup" component={MM04} />
      <Route exact path="/mypage" component={MM05} />
      <Route exact path="/newsBoard" component={MM06} />
      <Route exact path="/slide" component={SimpleSlider} />
    </WholeWrapper>
  );
};

export default Content;
