import React, { useState, useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import {
  GET_FREE_BOARD,
  GET_FREE_TOTALPAGE,
  GET_FREE_TOTAL_PAGE,
  GET_FREE_TOTALPAGE_ONLY_CNT,
} from "./MM02Queries";
import MM02Presenter from "./MM02Presenter";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import useInput from "../../../hooks/useInput";

const MM02Container = ({ history }) => {
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
    data: freeDatum,
    loading: freeLoading,
    refetch: freeDatumRefetch,
  } = useQuery(GET_FREE_BOARD);

  const {
    data: totalPageData,
    loading: totalPageLoading,
    refetch: totalPageRefetch,
  } = useQuery(GET_FREE_TOTALPAGE, {
    variables: {
      searchValue,
      limit,
    },
  });

  const { data: freePageDatum, refetch: freePageRefetch } = useQuery(
    GET_FREE_TOTAL_PAGE,
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
  } = useQuery(GET_FREE_TOTALPAGE_ONLY_CNT, {
    variables: {
      searchValue,
      limit,
    },
  });

  ////////////// - USE EFFECT- //////////////

  useEffect(() => {
    freeDatumRefetch();
    freePageRefetch();
    if (freePageDatum && !pages) {
      const temp = [];

      for (let i = 0; i < freePageDatum.getfreeTotalPage; i++) {
        temp.push(i);
      }
      setPages(temp);
    }
  }, [freePageDatum]);

  useEffect(() => {
    freeDatumRefetch();
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
    history.push(`/free-detail/${idx}`);
  };

  const prevAndNextPageChangeFreeHandler = (page) => {
    if (page < 0) {
      toast.error("첫 페이지 입니다.");
      return;
    }

    if (page > freePageDatum.getfreeTotalPage - 1) {
      toast.error("마지막 페이지 입니다.");
      return;
    }

    setCurrentPage(page);
  };

  ////////////// - USE EFFECT- //////////////

  return (
    <MM02Presenter
      freeDatum={freeDatum && freeDatum.getFreeBoard}
      currentPage={currentPage}
      pages={pages}
      limit={limit}
      setCurrentPage={setCurrentPage}
      totalPage={totalPageData && totalPageData.getFreeTotalPage}
      totalCnt={
        totalPageOnlyCntData && totalPageOnlyCntData.getFreeTotalPageOnlyCnt
      }
      prevAndNextPageChangeFreeHandler={prevAndNextPageChangeFreeHandler}
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

export default MM02Container;
