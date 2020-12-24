import React from "react";
import MM00Presenter from "./MM00Presenter";
import { useQuery } from "react-apollo-hooks";
import { GET_POPULAR_NOTICE } from "./MM00Queries";

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
  } = useQuery(GET_POPULAR_NOTICE);

  console.log(popularDatum && popularDatum.getPopularNotice);
  return (
    <MM00Presenter
      popularDatum={popularDatum && popularDatum.getPopularNotice}
    />
  );
};

export default MM00Container;
