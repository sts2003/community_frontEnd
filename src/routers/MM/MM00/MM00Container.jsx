import React from "react";
import MM00Presenter from "./MM00Presenter";
import { useQuery } from "react-apollo-hooks";
import {
  GET_POPULAR_BOARD,
  GET_ALL_NEWSES,
  GET_ALL_FREES,
} from "./MM00Queries";

const MM00Container = ({ history }) => {
  ///////////////////// - VARIABLE - ////////////////////////

  ///////////////////// - USE STATE - ////////////////////////

  ///////////////////// - USE REF - ////////////////////////

  ///////////////////// - USE CONTEXT - ////////////////////////

  ///////////////////// - EVENT HANDLER - /////////////////////

  const moveLinkHandler = (link) => {
    history.push(link);
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

  return (
    <MM00Presenter
      popularDatum={popularDatum && popularDatum.getPopularBoard}
      newsDatum={newsDatum && newsDatum.getAllNewses}
      freeDatum={freeDatum && freeDatum.getFreeBoard}
      moveLinkHandler={moveLinkHandler}
    />
  );
};

export default MM00Container;
