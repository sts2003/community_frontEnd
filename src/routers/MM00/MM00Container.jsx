import React from "react";
import MM00Presenter from "./MM00Presenter";
import { useQuery } from "react-apollo-hooks";
import { GET_POPULAR_BOARD } from "./MM00Queries";
import { GET_ALL_NEWSES } from "./MM00Queries";

const MM00Container = () => {
  ///////////////////// - VARIABLE - ////////////////////////

  ///////////////////// - USE STATE - ////////////////////////

  ///////////////////// - USE REF - ////////////////////////

  ///////////////////// - USE CONTEXT - ////////////////////////

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

  console.log(popularDatum && popularDatum.getPopularBoard);
  return (
    <MM00Presenter
      popularDatum={popularDatum && popularDatum.getPopularBoard}
      newsDatum={newsDatum && newsDatum.getAllNewses}
    />
  );
};

export default MM00Container;
