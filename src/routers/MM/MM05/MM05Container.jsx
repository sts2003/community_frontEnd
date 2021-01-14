import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import MM05Presenter from "./MM05Presenter";
import { GET_USER_DETAIL } from "./MM05Queries";
import useInput from "../../../hooks/useInput";

const MM05Container = ({ match }) => {
  ///////////////////// - VARIABLE - ////////////////////////

  ///////////////////// - USE STATE - ////////////////////////
  // const [currentData, setCurrentData] = useState(null);
  const userDatum = useState(window.sessionStorage.getItem("login"));
  ///////////////////// - USE REF - ////////////////////////

  ///////////////////// - USE CONTEXT - ////////////////////////

  ///////////////////// - USE QUERY - ////////////////////////

  //////////////////// - USE MUTATION - ///////////////////////
  const [userInputDatum] = useMutation(GET_USER_DETAIL);

  ///////////////////// - USE EFFECT - ////////////////////////

  const _valueChangeHandler = (event) => {
    const nextState = { ...value };

    nextState[event.target.name] = event.target.value;

    setValue(nextState);
  };

  const userData = async () => {
    const { data } = await userInputDatum({
      variables: {
        name: userDatum.value,
      },
    });

    return { data };
  };

  //////////////////// - USE HANDLER - /////////////////////////
  return (
    <MM05Presenter
      userDatum={userDatum && userDatum.getUserDetail}
      _valueChangeHandler={_valueChangeHandler}
    />
  );
};
export default MM05Container;
