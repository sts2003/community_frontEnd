import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "react-apollo-hooks";
import {
  GET_FREE_BOARD,
  CREATE_FREE,
  GET_FREE_TOTALPAGE,
  GET_FREE_TOTAL_PAGE,
  GET_FREE_TOTALPAGE_ONLY_CNT,
} from "./MM02Queries";
import MM02Presenter from "./MM02Presenter";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import useInput from "../../../hooks/useInput";
import storageRef from "../../../firebase";

const MM02Container = ({ history }) => {
  ////////////// - USE STATE- ///////////////
  const [pages, setPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [imagePath, setImagePath] = useState(``);
  //   const inputSearch = useInput("");
  const [searchValue, setSearchValue] = useState(``);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState(window.sessionStorage.getItem("login"));
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

      for (let i = 0; i < freePageDatum.getFreeTotalPage; i++) {
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

  const _isDialogOpenToggle = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const createFreeHandler = () => {
    const key = sessionStorage.getItem("login");

    if (key) {
      _isDialogOpenToggle();
    } else {
      toast.info("로그인 후 이용하실 수 있습니다.");
      history.push("/signin");
    }
  };
  /////////////// - USE MUTATION- //////////////

  const [createFree] = useMutation(CREATE_FREE, {
    variables: {
      title: value.title,
      description: value.desc,
      imagePath,
    },
  });

  const addFreeBoard = async () => {
    if (value.title === "") {
      toast.error("FREE TYPE IS MUST!");
      return;
    }
    if (value.desc === "") {
      toast.error("FREE TYPE IS MUST!");
      return;
    }

    const { data } = await createFree();
    if (data.createFree) {
      toast.info("게시글이 추가되었습니다");
      freeDatumRefetch();
      setValue("");
      _isDialogOpenToggle();
    } else {
      toast.error("다시 시도해주세요");
    }
  };

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

    if (page > freePageDatum.getFreeTotalPage - 1) {
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

    const D = new Date();

    const year = D.getFullYear() + "";
    const month = D.getMonth() + 1 + "";
    const date = D.getDate() + "";

    const hour = D.getHours() + "";
    const min = D.getMinutes() + "";
    const sec = D.getSeconds() + "";

    const suffix = year + month + date + hour + min + sec;

    const uploadFileName = originFileName + suffix;

    try {
      const storage = storageRef.child(
        `4leaf-community/uploads/freeBoard/${uploadFileName}`
      );
      await storage.put(originFile);
      const url = await storage.getDownloadURL();

      setImagePath(url);
    } catch (e) {}
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
      fileChangeHandler={fileChangeHandler}
      _isDialogOpenToggle={_isDialogOpenToggle}
      addFreeBoard={addFreeBoard}
      isDialogOpen={isDialogOpen}
      _valueChangeHandler={_valueChangeHandler}
      prevAndNextPageChangeFreeHandler={prevAndNextPageChangeFreeHandler}
      //   inputSearchValue={inputSearch}
      moveLinkHandler={moveLinkHandler}
      changePageHandler={changePageHandler}
      //   changeFloorHandler={changeFloorHandler}
      //   changeSearchValueHandler={changeSearchValueHandler}
      _valueChangeHandler={_valueChangeHandler}
      createFreeHandler={createFreeHandler}
      valueTitle={value.title}
      valueDesc={value.desc}
      imagePath={imagePath}
      //   searchValue={searchValue}
      //   setSearchValue={setSearchValue}
    />
  );
};

export default MM02Container;
