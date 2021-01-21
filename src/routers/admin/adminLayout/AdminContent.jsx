import React from "react";
import { Route } from "react-router-dom";
import { WholeWrapper } from "../../../components/CommonComponents";
import AD00 from "../AD00";
import AD01 from "../AD01";
import AdminLeft from "../adminLayout/AdminLeft";

const AdminContent = () => {
  return (
    <WholeWrapper dr={`row`} height={`100vh`}>
      <Route path="/admin" component={AdminLeft} />
      <Route exact path="/admin" component={AD00} />
      <Route path="/admin/boardManage" component={AD01} />
    </WholeWrapper>
  );
};

export default AdminContent;
