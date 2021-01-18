import React, { useEffect } from "react";
import { useQuery } from "react-apollo-hooks";
import MM06Presenter from "./MM06Presenter";
import { GET_ALL_NEWSES } from "./MM06Queries";

const MM06Container = ({ history }) => {
  ///////////////////// - VARIABLE - ////////////////////////

  ///////////////////// - USE STATE - ////////////////////////

  ///////////////////// - USE REF - ////////////////////////

  ///////////////////// - USE CONTEXT - ////////////////////////

  ///////////////////// - EVENT HANDLER - /////////////////////

  const moveLinkHandler = (idx) => {
    history.push(`/news-detail/${idx}`);
  };

  ///////////////////// - USE QUERY - ////////////////////////

  const {
    data: newsDatum,
    loading: newsLoading,
    refetch: newsRefetch,
  } = useQuery(GET_ALL_NEWSES);

  useEffect(() => {
    newsRefetch();
  }, []);

  return (
    <MM06Presenter
      newsDatum={newsDatum && newsDatum.getAllNewses}
      moveLinkHandler={moveLinkHandler}
    />
  );
};

export default MM06Container;
