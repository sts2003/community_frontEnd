import React, { useState } from "react";
import MM03Presenter from "./MM03Presenter";
import useInput from "../../../hooks/useInput";
import { TRY_LOGIN, CHECK_SECRET_CODE, GET_USER } from "./MM03Queries";
import { useMutation } from "react-apollo-hooks";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MM03Container = ({ history }) => {
  ///////////////////// - VARIABLE - ////////////////////////

  ///////////////////// - USE STATE - ////////////////////////
  const inputEmail = useInput("");
  const [tab, setTab] = useState(0);
  const assignment = useInput("");

  ///////////////////// - USE REF - ////////////////////////

  ///////////////////// - USE CONTEXT - ////////////////////////

  ///////////////////// - USE QUERY - ////////////////////////

  ///////////////////// - USE MUTATION - ////////////////////////
  const [tryLoginMutation] = useMutation(TRY_LOGIN);
  const [checkSecretCodeMutation] = useMutation(CHECK_SECRET_CODE);
  const [getUserMutation] = useMutation(GET_USER);

  ///////////////////// - USE EFFECT - ////////////////////////
  const userData = async () => {
    const { data } = await getUserMutation({
      variables: {
        email: inputEmail.value,
        secretCode: assignment.value,
      },
    });

    return { data };
  };
  const loginClickHandler = async () => {
    const { data } = await tryLoginMutation({
      variables: {
        email: inputEmail.value,
      },
    });

    if (data.tryLogin) {
      confirmAlert({
        title: "LOGIN",
        message: "로그인 하시겠습니까?",
        buttons: [
          {
            label: "취소",
            onClick: () => {
              return false;
            },
          },
          {
            label: "확인",
            onClick: () => assignmentCheckHandler,
          },
        ],
      });
      setTab(1);
    } else {
      toast.info("가입된 이메일이 아닙니다.");
    }
  };

  const assignmentCheckHandler = async () => {
    const { data } = await checkSecretCodeMutation({
      variables: {
        email: inputEmail.value,
        code: assignment.value,
      },
    });

    if (data.checkSecretCode) {
      toast.info("로그인 성공 !!");
      window.sessionStorage.setItem(
        "login",
        JSON.stringify((await userData()).data)
      );
      history.push("/");
    } else {
      toast.info("인증코드가 잘못되었습니다.");
    }
  };

  return (
    <MM03Presenter
      inputEmail={inputEmail}
      loginClickHandler={loginClickHandler}
      tab={tab}
      assignment={assignment}
      assignmentCheckHandler={assignmentCheckHandler}
    />
  );
};

export default MM03Container;
