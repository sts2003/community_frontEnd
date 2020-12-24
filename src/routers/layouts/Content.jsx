import React from "react";
import { Route } from "react-router-dom";
import MM00 from "../MM00/index";
// import MM04 from "../../routers/MM04";
// import MM05 from "../../routers/MM05";
import styled from "styled-components";

const WholeWrapper = styled.div`
  width: 100%;
`;

const Content = () => {
  return (
    <WholeWrapper>
      <Route exact path="/" component={MM00} />
      {/* <Route exact path="/signin" component={MM04} />
      <Route exact path="/signup" component={MM05} /> */}
    </WholeWrapper>
  );
};

export default Content;
