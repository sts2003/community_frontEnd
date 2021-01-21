import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AdminNav = styled.div`
  width: 300px;
  height: 100%;

  display: flex;
  flex-direction: column;

  background: ${(props) => props.bgColor || `#fff`};
  color: ${(props) => props.color || `#fff`};
`;

const AdminMenus = styled.ul``;

const AdminLists = styled.li`
  font-size: 18px;
  font-weight: 700;

  width: 100%;
  height: 70px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  border-bottom: 2px solid #fff;

  &:hover {
    background-color: #fff;
    color: #0b0b0b;
    border-bottom: 2px solid #0b0b0b;

    transition: 0.5s;
  }

  &:focus {
    background-color: #fff;
    color: #0b0b0b;
    border-bottom: 2px solid #0b0b0b;

    transition: 0.5s;
  }
`;

const AdminLeft = ({ history }) => {
  const moveLinkHandler = (link) => {
    history.push(link);
  };
  return (
    <AdminNav bgColor={`#0b0b0b`}>
      <AdminMenus>
        <AdminLists onClick={() => moveLinkHandler("/admin")}>
          메인 화면
        </AdminLists>
        <AdminLists onClick={() => moveLinkHandler("/admin/boardManage")}>
          게시글 관리
        </AdminLists>
        <AdminLists>유저 관리</AdminLists>
        <AdminLists>뉴스 관리</AdminLists>
        <AdminLists>슬라이드 관리</AdminLists>
      </AdminMenus>
    </AdminNav>
  );
};

export default AdminLeft;
