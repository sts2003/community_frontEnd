import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
//MM Files
import MM00 from "../../routers/MM/MM00";
import MM01 from "../../routers/MM/MM01";
import MM02 from "../../routers/MM/MM02";
import MM03 from "../../routers/MM/MM03";
import MM04 from "../../routers/MM/MM04";
import MM05 from "../../routers/MM/MM05";
import MM06 from "../../routers/MM/MM06";
import MM07 from "../../routers/MM/MM07";
import MM08 from "../../routers/MM/MM08";
import MM09 from "../../routers/MM/MM09";
// Detail Files
import Free_D from "../BOARD_D/Free_D";
import Popular_D from "../BOARD_D/Popular_D";
import Anony_D from "../BOARD_D/Anony_D";
import News_D from "../BOARD_D/News_D";
////////////// - Other - ////////////////
import Slide from "../../components/slide/Slide";
import styled from "styled-components";
// import Header from "./Header";
// import Footer from "./Footer";

const WholeWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = () => {
  return (
    <WholeWrapper>
      <Route exact path="/" component={MM00} />
      <Route exact path="/popular" component={MM01} />
      <Route exact path="/popular-detail/:key" component={Popular_D} />

      <Route exact path="/freeBoard" component={MM02} />
      <Route exact path="/free-detail/:key" component={Free_D} />

      <Route exact path="/signin" component={MM03} />
      <Route exact path="/signup" component={MM04} />

      <Route exact path="/mypage" component={MM05} />

      <Route exact path="/newsBoard" component={MM06} />
      <Route exact path="/news-detail/:key" component={News_D} />

      <Route exact path="/anonymousBoard" component={MM07} />
      <Route exact path="/anony-detail/:key" component={Anony_D} />

      <Route exact path="/tipsBoard" component={MM08} />
      <Route exact path="/amountBoard" component={MM09} />

      <Route exact path="/slide" component={Slide} />
    </WholeWrapper>
  );
};

export default Content;
