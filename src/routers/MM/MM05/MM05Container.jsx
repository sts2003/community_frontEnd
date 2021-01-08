import React, { useEffect, useState } from "react";
import { useQuery } from "react-apollo-hooks";
import MM05Presenter from "./MM05Presenter";
import { GET_USER_DETAIL } from "./MM05Queries";

const MM05Container = ({ match }) => {
  ///////////////////// - VARIABLE - ////////////////////////

  ///////////////////// - USE STATE - ////////////////////////
  // const [currentData, setCurrentData] = useState(null);

  ///////////////////// - USE REF - ////////////////////////

  ///////////////////// - USE CONTEXT - ////////////////////////

  ///////////////////// - USE QUERY - ////////////////////////
  const {
    data: userDatum,
    loading: userLoading,
    refetch: userRefetch,
  } = useQuery(GET_USER_DETAIL, {
    variables: {
      id: match.params.key,
    },
  });

  //////////////////// - USE MUTATION - ///////////////////////

  ///////////////////// - USE EFFECT - ////////////////////////

  useEffect(() => {
    if (userDatum && userDatum.getUserDetail) {
      let tempData = userDatum.getUserDetail;

      const desc = document.getElementById("user_description-js");

      if (desc !== null) {
        desc.innerHTML = tempData.description;
        setCurrentData(tempData);
      }
    }
  }, [userDatum]);

  useEffect(() => {
    userRefetch();
  });

  //////////////////// - USE HANDLER - /////////////////////////
  return <MM05Presenter userDatum={userDatum && userDatum.getUserDetail} />;
};
export default MM05Container;
