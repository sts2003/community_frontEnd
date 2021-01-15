import React, { useEffect } from "react";
import MM09Presenter from "./MM09Presenter";
import { useQuery } from "react-apollo-hooks";
import {
  GET_POPULAR_BOARD,
  GET_ALL_NEWSES,
  GET_ALL_FREES,
} from "./MM09Queries";

const MM00Container = ({ history }) => {
  ///////////////////// - VARIABLE - ////////////////////////

  ///////////////////// - USE STATE - ////////////////////////

  ///////////////////// - USE REF - ////////////////////////

  ///////////////////// - USE CONTEXT - ////////////////////////

  ///////////////////// - EVENT HANDLER - /////////////////////

  const movePopularDetailHandler = (idx) => {
    if (window.sessionStorage.getItem("login")) {
      history.push(`/popular-detail/${idx}`);
    } else {
      toast.info("로그인 후 이용 가능합니다.");
      history.push(`/signin`);
    }
  };

  const moveFreeDetailHandler = (idx) => {
    if (window.sessionStorage.getItem("login")) {
      history.push(`/free-detail/${idx}`);
    } else {
      toast.info("로그인 후 이용 가능합니다.");
      history.push(`/signin`);
    }
  };

  const moveNewsDetailHandler = (idx) => {
    if (window.sessionStorage.getItem("login")) {
      history.push(`/news-detail/${idx}`);
    } else {
      toast.info("로그인 후 이용 가능합니다.");
      history.push(`/signin`);
    }
  };

  ///////////////////// - USE QUERY - ////////////////////////

  const {
    data: popularDatum,
    loading: popularLoading,
    refetch: popularRefetch,
  } = useQuery(GET_POPULAR_BOARD);

  const {
    data: newsDatum,
    loading: newsLoading,
    refetch: newsRefetch,
  } = useQuery(GET_ALL_NEWSES);

  const {
    data: freeDatum,
    loading: freeLoading,
    refetch: freeRefetch,
  } = useQuery(GET_ALL_FREES);
  ///////////////////// - USE EFFECT - ///////////////////////

  useEffect(() => {
    popularRefetch();
    newsRefetch();
    freeRefetch();
  }, [GET_POPULAR_BOARD]);

  return (
    <MM09Presenter
      popularDatum={popularDatum && popularDatum.getPopularBoard}
      newsDatum={newsDatum && newsDatum.getAllNewses}
      freeDatum={freeDatum && freeDatum.getFreeBoard}
      movePopularDetailHandler={movePopularDetailHandler}
      moveFreeDetailHandler={moveFreeDetailHandler}
      moveNewsDetailHandler={moveNewsDetailHandler}
    />
  );
};

export default MM00Container;
