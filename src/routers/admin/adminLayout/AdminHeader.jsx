import React from "react";
import { Wrapper } from "../../../components/CommonComponents";
import styled from "styled-components";

const HeaderImgArea = styled.div`
  width: 20%;
  height: 50px;
`;

const HeaderCenterArea = styled.div`
  width: 70%;
  height: 50px;

  color: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const HeaderImg = styled.img`
  height: 50px;
  background-size: cover;
`;

const AdminHeader = ({ history }) => {
  const _moveLinkHandler = (link) => {
    history.push(link);
  };

  return (
    <Wrapper height={`50px`} bgColor={`#0b0b0b`}>
      <HeaderImgArea>
        <HeaderImg
          src={
            "https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/4leaf%2Flogo%2F4leafsoftware_logo_LW.png?alt=media&token=bc68284c-e82a-42ee-b4c4-a95e0ebc699e"
          }
          onClick={() => _moveLinkHandler("/admin")}
        />
      </HeaderImgArea>
      <HeaderCenterArea>관리자 페이지에 오신것을 환영합니다.</HeaderCenterArea>
    </Wrapper>
  );
};

export default AdminHeader;
