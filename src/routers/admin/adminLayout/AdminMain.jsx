import React from "react";
import { AdminContent } from "./AdminContent";
import { AdminHeader } from "./AdminHeader";
import { Wrapper } from "../../../components/CommonComponents";

const AdminMain = () => {
  return (
    <Wrapper>
      <AdminHeader />
      <AdminContent />
    </Wrapper>
  );
};

export default AdminMain;
