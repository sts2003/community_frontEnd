import React, { useState, useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import {
  GET_POPULAR_BOARD,
  GET_POPULAR_TOTALPAGE,
  GET_POPULAR_TOTAL_PAGE,
  GET_POPULAR_TOTALPAGE_ONLY_CNT,
} from "./MM01Queries";
import MM01Presenter from "./MM01Presenter";
import { toast } from "react-toastify";
// import { confirmAlert } from "react-confirm-alert";
// import "react-confirm-alert/src/react-confirm-alert.css";
import useInput from "../../../hooks/useInput";

const MM01Container = ({ history }) => {
  ////////////// - USE STATE- ///////////////
  const [pages, setPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(10);
  //   const inputSearch = useInput("");
  const [searchValue, setSearchValue] = useState("");
  const [value, setValue] = useState({
    title: "",
    desc: "",
  });

  ////////////// - USE QUERY- ///////////////
  const {
    data: popularDatum,
    loading: popularLoading,
    refetch: popularDatumRefetch,
  } = useQuery(GET_POPULAR_BOARD);

  const {
    data: totalPageData,
    loading: totalPageLoading,
    refetch: totalPageRefetch,
  } = useQuery(GET_POPULAR_TOTALPAGE, {
    variables: {
      searchValue,
      limit,
    },
  });

  const { data: popularPageDatum, refetch: popularPageRefetch } = useQuery(
    GET_POPULAR_TOTAL_PAGE,
    {
      variables: {
        searchValue,
        limit,
      },
    }
  );

  const {
    data: totalPageOnlyCntData,
    loading: totalPageOnlyCntLoading,
    refetch: totalPageOnlyCntRefetch,
  } = useQuery(GET_POPULAR_TOTALPAGE_ONLY_CNT, {
    variables: {
      searchValue,
      limit,
    },
  });

  ////////////// - USE EFFECT- //////////////

  useEffect(() => {
    popularDatumRefetch();
    popularPageRefetch();
    if (popularPageDatum && !pages) {
      const temp = [];

      for (let i = 0; i < popularPageDatum.getPopularTotalPage; i++) {
        temp.push(i);
      }
      setPages(temp);
    }
  }, [popularPageDatum]);

  useEffect(() => {
    popularDatumRefetch();
    totalPageRefetch();
    totalPageOnlyCntRefetch();
  }, []);
  /////////////// - USE MUTATION- //////////////

  /////////////// - EVENT HANDLER- /////////////

  //   const changeFloorHandler = (floor) => {
  //     setCurrentFloor(floor);
  //     setDetailKey(null);
  //     inputSearch.setValue("");
  //     setSearchValue("");
  //   };

  //   const changeSearchValueHandler = () => {
  //     setPages(null);
  //     setSearchValue(inputSearch.value);
  //   };

  const _valueChangeHandler = (event) => {
    const nextState = { ...value };

    nextState[event.target.name] = event.target.value;

    setValue(nextState);
  };

  const changePageHandler = (page) => {
    setCurrentPage(page);
  };

  const moveLinkHandler = (idx) => {
    if (window.sessionStorage.getItem("login")) {
      history.push(`/popular-detail/${idx}`);
    } else {
      toast.info("로그인 후 이용 가능합니다.");
      history.push(`/signin`);
    }
  };

  const prevAndNextPageChangePopularHandler = (page) => {
    if (page < 0) {
      toast.error("첫 페이지 입니다.");
      return;
    }

    if (page > popularPageDatum.getPopularTotalPage - 1) {
      toast.error("마지막 페이지 입니다.");
      return;
    }

    setCurrentPage(page);
  };

  ////////////// - USE EFFECT- //////////////

  return (
    <MM01Presenter
      popularDatum={popularDatum && popularDatum.getPopularBoard}
      currentPage={currentPage}
      pages={pages}
      limit={limit}
      setCurrentPage={setCurrentPage}
      totalPage={totalPageData && totalPageData.getPopularTotalPage}
      totalCnt={
        totalPageOnlyCntData && totalPageOnlyCntData.getPopularTotalPageOnlyCnt
      }
      prevAndNextPageChangePopularHandler={prevAndNextPageChangePopularHandler}
      //   inputSearchValue={inputSearch}
      moveLinkHandler={moveLinkHandler}
      changePageHandler={changePageHandler}
      //   changeFloorHandler={changeFloorHandler}
      //   changeSearchValueHandler={changeSearchValueHandler}
      _valueChangeHandler={_valueChangeHandler}
      //   searchValue={searchValue}
      //   setSearchValue={setSearchValue}
    />
  );
};

export default MM01Container;
