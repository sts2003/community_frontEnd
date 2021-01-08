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
  const [imagePath, setImagePath] = useState(``);
  //   const inputSearch = useInput("");
  const [searchValue, setSearchValue] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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

  // const {
  //   data: totalPageData,
  //   loading: totalPageLoading,
  //   refetch: totalPageRefetch,
  // } = useQuery(GET_FREE_TOTALPAGE, {
  //   variables: {
  //     searchValue,
  //     limit,
  //   },
  // });

  // const { data: freePageDatum, refetch: freePageRefetch } = useQuery(
  //   GET_FREE_TOTAL_PAGE,
  //   {
  //     variables: {
  //       searchValue,
  //       limit,
  //     },
  //   }
  // );

  // const {
  //   data: totalPageOnlyCntData,
  //   loading: totalPageOnlyCntLoading,
  //   refetch: totalPageOnlyCntRefetch,
  // } = useQuery(GET_FREE_TOTALPAGE_ONLY_CNT, {
  //   variables: {
  //     searchValue,
  //     limit,
  //   },
  // });

  ////////////// - USE EFFECT- //////////////

  // useEffect(() => {
  //   freeDatumRefetch();
  //   freePageRefetch();
  //   if (freePageDatum && !pages) {
  //     const temp = [];

  //     for (let i = 0; i < freePageDatum.getfreeTotalPage; i++) {
  //       temp.push(i);
  //     }
  //     setPages(temp);
  //   }
  // }, [freePageDatum]);

  // useEffect(() => {
  //   freeDatumRefetch();
  //   totalPageRefetch();
  //   totalPageOnlyCntRefetch();
  // }, []);

  const _isDialogOpenToggle = () => {
    setIsDialogOpen(!isDialogOpen);
  };

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
    history.push(`/detail/${idx}`);
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
  const fileChangeHandler = async (e) => {
    console.log(e.target.files[0]);
    const originFile = e.target.files[0];
    const originFileName = e.target.files[0].name;

    console.log(originFile);
    console.log(originFileName);
    // event는 변하기 때문에 어딘가에 저장을 해줘야한다. -> 밑에서 사용해야하기 때문에 이벤트가 바뀌기 전에 따로 저장해준다
    const D = new Date();

    const year = D.getFullYear() + "";
    const month = D.getMonth() + 1 + "";
    const date = D.getDate() + "";
    //겟 데이트는 현재 날자
    // 겟 데이는 현재 요일
    const hour = D.getHours() + "";
    const min = D.getMinutes() + "";
    const sec = D.getSeconds() + "";

    const suffix = year + month + date + hour + min + sec;

    const uploadFileName = originFileName + suffix;
    // 이것이 들어가는 데이터 이름이다. 중복이 되지 않기 때문(suffix를 달아줬기 때문에)

    try {
      const storage = storageRef.child(
        `4leaf-community/uploads/freeBoard/${uploadFileName}`
      );
      await storage.put(originFile);
      const url = await storage.getDownloadURL();

      setImagePath(url);
    } catch (e) {}
    // catch를 잡을 때 콘솔로그를 찍으면 사용자에게 에러가 보이기 때문에 사용 X
  };

  ////////////// - USE EFFECT- //////////////

  return (
    <MM02Presenter
      freeDatum={freeDatum && freeDatum.getFreeBoard}
      currentPage={currentPage}
      pages={pages}
      limit={limit}
      setCurrentPage={setCurrentPage}
      // totalPage={totalPageData && totalPageData.getFreeTotalPage}
      // totalCnt={
      //   totalPageOnlyCntData && totalPageOnlyCntData.getFreeTotalPageOnlyCnt
      // }
      fileChangeHandler={fileChangeHandler}
      _isDialogOpenToggle={_isDialogOpenToggle}
      isDialogOpen={isDialogOpen}
      _valueChangeHandler={_valueChangeHandler}
      prevAndNextPageChangeFreeHandler={prevAndNextPageChangeFreeHandler}
      //   inputSearchValue={inputSearch}
      moveLinkHandler={moveLinkHandler}
      changePageHandler={changePageHandler}
      //   changeFloorHandler={changeFloorHandler}
      //   changeSearchValueHandler={changeSearchValueHandler}
      _valueChangeHandler={_valueChangeHandler}
      valueTitle={value.title}
      valueDesc={value.desc}
      imagePath={imagePath}
      //   searchValue={searchValue}
      //   setSearchValue={setSearchValue}
    />
  );
};

export default MM02Container;
