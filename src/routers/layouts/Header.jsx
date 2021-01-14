import React from "react";
import styled from "styled-components";
// import useInput from "../../hooks/useInput";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 150px;
  background-color: ${(props) => props.theme.mainThemeColor};
  color: ${(props) => props.theme.whiteColor};
  box-shadow: ${(props) => props.theme.boxShadow};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: ${(props) => props.fontSize || `22px`};
`;

const InnerWrapper = styled.div`
  width: ${(props) => props.width || `98%`};
  height: 100%;
  font-size: ${(props) => props.fontSize || `22px`};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ActionSpan = styled.span`
  padding: 5px;
  margin: 5px;
  color: ${(props) => props.theme.whiteColor};
  font-size: ${(props) => props.fontSize || `17px`};
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s infinite ease-in-out;

  &:hover {
    color: ${(props) => props.theme.pointColor};
  }

  &:focus {
    color: ${(props) => props.theme.pointColor};
  }
`;

const HeaderTop = styled.div`
  width: 60%;
  height: 40px;
  margin-bottom: 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const HeaderBottom = styled.div`
  width: 50%;
  height: 40px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SearchInput = styled.input`
  width: ${(props) => props.width || `200px`};
  height: 50px;
  outline: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

////////////// - USE STATE- ///////////////

// const inputSearch = useInput("");
// const [searchValue, setSearchValue] = useState("");

///////////// - EVENT HANDLER- ////////////
const Header = ({ history }) => {
  const moveLinkHandler = (link) => {
    history.push(link);
  };

  const logout = (link) => {
    history.push(`/${link}`);
    sessionStorage.removeItem("login");
  };

  // const changeFloorHandler = (floor) => {
  //   setCurrentFloor(floor);
  //   setDetailKey(null);
  //   inputSearch.setValue("");
  //   setSearchValue("");
  // };

  // const changeSearchValueHandler = () => {
  //   setPages(null);
  //   setSearchValue(inputSearch.value);
  // };

  // const _valueChangeHandler = (event) => {
  //   const nextState = { ...value };

  //   nextState[event.target.name] = event.target.value;

  //   setValue(nextState);
  // };

  return (
    <HeaderWrapper>
      <HeaderTop>
        <InnerWrapper width={`30%`}>
          <ActionSpan onClick={() => moveLinkHandler("/")} fontSize={`20px`}>
            LOGO
          </ActionSpan>
        </InnerWrapper>
        <InnerWrapper width={`40%`}>
          <SearchInput
            width={`600px`}
            // onKeyDown={(e) => e.keyCode === 13 && changeSearchValueHandler()}
            // {...inputSearchValue}
            placeholder={`검색어를 입력하세요...`}
          />
        </InnerWrapper>
        <InnerWrapper width={`30%`}>
          {window.sessionStorage.getItem(`login`) ? (
            <ActionSpan padding={`10px`} onClick={() => logout(``)}>
              로그아웃
            </ActionSpan>
          ) : (
            <ActionSpan
              padding={`10px`}
              onClick={() => moveLinkHandler(`/signin`)}
            >
              로그인
            </ActionSpan>
          )}

          {window.sessionStorage.getItem(`login`) ? (
            <ActionSpan
              padding={`10px`}
              margin={`0px 0px 0px 10px`}
              onClick={() => moveLinkHandler(`/mypage`)}
            >
              마이페이지
            </ActionSpan>
          ) : (
            <ActionSpan
              padding={`10px`}
              margin={`0px 0px 0px 10px`}
              onClick={() => moveLinkHandler(`/signup`)}
            >
              회원가입
            </ActionSpan>
          )}
        </InnerWrapper>
      </HeaderTop>
      <HeaderBottom>
        <InnerWrapper>
          <ActionSpan
            fontSize={`17px`}
            onClick={() => moveLinkHandler("/popular")}
          >
            인기 게시판
          </ActionSpan>
          <ActionSpan
            fontSize={`17px`}
            onClick={() => moveLinkHandler("/freeBoard")}
          >
            자유 게시판
          </ActionSpan>
          <ActionSpan
            fontSize={`17px`}
            onClick={() => moveLinkHandler("/newsBoard")}
          >
            뉴스
          </ActionSpan>
          <ActionSpan fontSize={`17px`}> 익명게시판</ActionSpan>
          <ActionSpan fontSize={`17px`}> 꿀팁게시판</ActionSpan>
          <ActionSpan fontSize={`17px`}> 통합게시판 </ActionSpan>
          <ActionSpan fontSize={`17px`}> </ActionSpan>
          <ActionSpan fontSize={`17px`}> </ActionSpan>
          <ActionSpan fontSize={`17px`}> </ActionSpan>
          <ActionSpan fontSize={`17px`}> 공지사항</ActionSpan>
        </InnerWrapper>
      </HeaderBottom>
    </HeaderWrapper>
  );
};

export default Header;
