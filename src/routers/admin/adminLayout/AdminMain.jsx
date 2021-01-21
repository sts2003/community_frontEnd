import React from "react";
import AdminHeader from "./AdminHeader";
import AdminContent from "./AdminContent";
import styled from "styled-components";

const AdminMainPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const AdminMain = () => {
  return (
    <AdminMainPage>
      <AdminHeader />
      <AdminContent />
    </AdminMainPage>
  );
};

export default AdminMain;
