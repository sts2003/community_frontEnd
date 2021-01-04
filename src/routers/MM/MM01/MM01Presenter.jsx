import React from "react";
import {
  EmptyList,
  TableBody,
  TableBodyLIST,
  TableWrapper,
  TextInput,
  Wrapper,
  WholeWrapper,
  TableHead,
  TableHeadLIST,
  SearchWrapper,
  RsWrapper,
  PagenationWrapper,
  PagenationBtn,
  Pagenation,
} from "../../../components/CommonComponents";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const SearchInput = styled(TextInput)`
  position: relative;
  border: 1px solid #dcdcdc;
  border-radius: 2px;
  margin-right: 4px;
  &:hover ${SearchWrapper2} {
    opacity: 1;
    box-shadow: 0px 3px 5px solid #eee;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
`;

const SearchWrapper2 = styled(Wrapper)`
  position: relative;
  color: #fff;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    border: 1px solid rgb(67, 66, 88);
    background: none;
    color: rgb(67, 66, 88);
  }
  & svg {
    position: absolute;
    top: 5px;
    font-size: 18px;
  }
  &:hover svg {
    animation: ${SearchWrapper2} 0.5s forwards;
  }
`;

const MM01Presenter = ({
  popularDatum,
  pages,
  currentPage,
  limit,
  setCurrentPage,
  prevAndNextPageChangePopularHandler,
  //   changeSearchValueHandler,
  //   changeFloorHandler,
  //   inputSearchValue,
  changePageHandler,
  moveLinkHandler,
  totalCnt,
  link,
}) => {
  return (
    <WholeWrapper margin={`150px 0 0 0`} height={`100%`}>
      <h1>인기게시판</h1>
      <RsWrapper>
        {/* SearchArea */}
        <Wrapper
          dr={`row`}
          al={`flex-start`}
          ju={`flex-start`}
          padding={`10px 0px`}
        >
          <SearchWrapper width={`auto`} dr={`row`}>
            <SearchInput
              type="text"
              width={`200px`}
              padding={`0px 5px 0px 5px`}
              placeholder="Search"
              //   onKeyDown={(e) => e.keyCode === 13 && changeSearchValueHandler()}
              //   {...inputSearchValue}
            />
          </SearchWrapper>
          <SearchWrapper2
            width={`30px`}
            height={`30px`}
            bgColor={`rgb(67, 66, 88)`}
            // onClick={changeSearchValueHandler}
          >
            <FaSearch />
          </SearchWrapper2>
        </Wrapper>
        {/* SearchAreaEnd */}

        <TableWrapper>
          <TableHead>
            <TableHeadLIST width={`100px`}>번호</TableHeadLIST>

            <TableHeadLIST
              fontWeight={`800`}
              width={`calc(100% - 100px - 160px - 100px)`}
              ju={`flex-start`}
            >
              제목
            </TableHeadLIST>

            <TableHeadLIST width={`160px`}>이름</TableHeadLIST>
            <TableHeadLIST width={`100px`}>작성일</TableHeadLIST>
          </TableHead>
        </TableWrapper>
        {popularDatum ? (
          popularDatum.length === 0 ? (
            <EmptyList>게시글이 없습니다.</EmptyList>
          ) : (
            popularDatum.map((data, idx) => {
              return (
                <TableBody key={idx} onClick={() => moveLinkHandler(data.id)}>
                  {/* {data.description} */}
                  <TableBodyLIST width={`100px`}>
                    {totalCnt - (currentPage * limit + idx) + ""}
                  </TableBodyLIST>
                  <TableBodyLIST
                    width={`calc(100% - 100px - 160px - 100px)`}
                    ju={`flex-start`}
                  >
                    {data.title}
                  </TableBodyLIST>
                  <TableBodyLIST fontWeight={`800`} ju={`flex-end`}>
                    {data.id}
                  </TableBodyLIST>
                </TableBody>
              );
            })
          )
        ) : (
          <div>게시글이 없습니다.</div>
        )}
        {/* pageNation Area */}

        <Wrapper margin={`30px 0px`} ju={`flex-end`} dr={`row`}>
          {pages && pages.length > 0 && (
            <PagenationWrapper width={`auto`}>
              <PagenationBtn
                onClick={() =>
                  popularDatum &&
                  prevAndNextPageChangePopularHandler(currentPage - 1)
                }
              >
                <IoIosArrowBack />
              </PagenationBtn>
              {pages.map((data) => {
                return (
                  <Pagenation
                    className={data === currentPage ? `active` : ``}
                    key={data}
                    onClick={() => changePageHandler(data)}
                  >
                    {data + 1}
                  </Pagenation>
                );
              })}
              <PagenationBtn
                onClick={() =>
                  popularDatum &&
                  prevAndNextPageChangePopularHandler(currentPage + 1)
                }
              >
                <IoIosArrowForward />
              </PagenationBtn>
            </PagenationWrapper>
          )}
        </Wrapper>

        {/* pageNation AreaEnd */}
      </RsWrapper>
    </WholeWrapper>
  );
};

export default MM01Presenter;
