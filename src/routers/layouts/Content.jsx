import React from "react";
import { Route } from "react-router-dom";
import MM00 from "../../routers/MM/MM00";
import MM01 from "../../routers/MM/MM01";
import MM02 from "../../routers/MM/MM02";
// import MM04 from "../../routers/MM/MM04";
// import MM05 from "../../routers/MM/MM05";
import Board_D from "../BOARD_D/FreeBoard_D";
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
      <Route exact path="/free-detail/:key" component={Board_D} />
      {/* <Route exact path="/signin" component={MM04} />
      <Route exact path="/signup" component={MM05} /> */}
    </WholeWrapper>
  );
};

export default Content;
