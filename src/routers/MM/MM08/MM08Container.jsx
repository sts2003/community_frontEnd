import React, { useEffect } from "react";
import MM08Presenter from "./MM08Presenter";
import { useQuery } from "react-apollo-hooks";
import { GET_ALL_TIPS } from "./MM08Queries";

const MM08Container = () => {
  const {
    data: tipsDatum,
    loading: tipsLoading,
    refetch: tipsRefetch,
  } = useQuery(GET_ALL_TIPS);

  useEffect(() => {
    tipsRefetch();
  }, [GET_ALL_TIPS]);

  return <MM08Presenter tipsDatum={tipsDatum && tipsDatum.getAllTips} />;
};

export default MM08Container;
