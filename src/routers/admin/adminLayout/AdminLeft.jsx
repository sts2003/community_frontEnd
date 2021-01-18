import React from "react";
import styled from "styled-components";

const AdminNav = styled.div`
  width: 400px;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const AdminMenus = styled.ul``;

const AdminLists = styled.li``;

const AdminLeft = ({ history }) => {
  const moveLinkHandler = () => {
    history.push("/admin");
  };
  return (
    <AdminNav>
      <AdminMenus>
        <AdminLists>인기게시판 관리</AdminLists>
        <AdminLists>자유게시판 관리</AdminLists>
        <AdminLists>뉴스 관리</AdminLists>
        <AdminLists></AdminLists>
      </AdminMenus>
    </AdminNav>
  );
};

export default AdminLeft;
