import React from "react";
import { useQuery } from "react-apollo-hooks";
import MM06Presenter from "./MM06Presenter";
import { GET_ALL_NEWSES } from "./MM06Queries";

const MM06Container = () => {
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
    data: newsDatum,
    loading: newsLoading,
    refetch: newsRefetch,
  } = useQuery(GET_ALL_NEWSES);

  console.log(newsDatum);

  return <MM06Presenter newsDatum={newsDatum} />;
};

export default MM06Container;
