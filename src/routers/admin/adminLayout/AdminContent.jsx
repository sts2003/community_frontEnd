import React from "react";
import { Route } from "react-router-dom";
import { WholeWrapper } from "../../../components/CommonComponents";
import AD00 from "../AD00";
import AdminLeft from "../adminLayout/AdminLeft";

const AdminContent = () => {
  return (
    <WholeWrapper>
      <Route exact path="/admin" component={AdminLeft} />
      <Route exact path="/admin" component={AD00} />
    </WholeWrapper>
  );
};

export default AdminContent;
