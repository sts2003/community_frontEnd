import React, { useEffect } from "react";
import MM07Presenter from "./MM07Presenter";
import { useQuery } from "react-apollo-hooks";
import { GET_ALL_ANONYMOUS } from "./MM07Queries";

const MM07Container = () => {
  const {
    data: anonyDatum,
    loading: anonyLoading,
    refetch: anonyRefetch,
  } = useQuery(GET_ALL_ANONYMOUS);

  useEffect(() => {
    anonyRefetch();
  }, [GET_ALL_ANONYMOUS]);

  return (
    <MM07Presenter anonyDatum={anonyDatum && anonyDatum.getAllAnonymousBoard} />
  );
};

export default MM07Container;
