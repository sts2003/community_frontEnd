import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-apollo-hooks";
import MM05Presenter from "./MM05Presenter";
import { GET_USER_DETAIL, DELETE_USER, UPDATE_USER } from "./MM05Queries";
import { toast } from "react-toastify";

const MM05Container = ({ match }) => {
  ///////////////////// - VARIABLE - ////////////////////////

  ///////////////////// - USE STATE - ////////////////////////
  // const [currentData, setCurrentData] = useState(null);
  const userDatum = useState(window.sessionStorage.getItem("login"));
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [value, setValue] = useState({
    email: "",
    name: "",
    nickName: "",
    mobile: "",
  });
  /////////////////////// - USE REF - /////////////////////////

  /////////////////////// - USE CONTEXT - /////////////////////

  /////////////////////// - USE QUERY - ///////////////////////
  const {
    data: userDetailData,
    loading: userDetailLoading,
    refetch: userDetailRefetch,
  } = useQuery(GET_USER_DETAIL, {
    variables: {
      email: JSON.parse(userDatum[0]).getUser.email,
    },
  });

  //////////////////// - USE MUTATION - ///////////////////////
  const [updateUserMutation] = useMutation(UPDATE_USER);
  const [deleteUserMutation] = useMutation(DELETE_USER);

  ///////////////////// - USE EFFECT - ////////////////////////

  useEffect(() => {
    userDetailRefetch();
  }, []);

  //////////////////// - USE HANDLER - /////////////////////////

  const moveLinkHandler = (link) => {
    history.push(link);
  };

  const _valueChangeHandler = (event) => {
    const nextState = { ...value };

    nextState[event.target.name] = event.target.value;

    setValue(nextState);
  };

  const userDelete = async () => {
    const _id = JSON.parse(userDatum[0]).getUser._id;
    if (_id === userDetailData.getUserDetail._id) {
      const ask = confirm("삭제 하시겠습니다?");
      if (ask) {
        const { data } = await deleteUserMutation({
          variables: {
            id: _id,
          },
        });
      } else {
        toast.error("삭제 취소");
      }
    } else {
      toast.error("삭제 실패");
    }
  };

  const userUpdate = async () => {
    const _id = JSON.parse(userDatum[0]).getUser._id;
    if (_id === userDetailData.getUserDetail._id) {
      const { data } = await updateUserMutation({
        variables: {
          id: _id,
          email: value.email,
          name: value.name,
          nickName: value.nickName,
          mobile: value.mobile,
        },
      });
      console.log(data);
      if (data.updateUser) {
        toast.info("수정 성공");
        window.sessionStorage.removeItem("login");
        moveLinkHandler(`/signin`);
      } else {
        toast.error("수정 실패");
      }
    } else {
      toast.error("수정 실패");
    }
  };

  const _isDialogOpenToggle = () => {
    setIsDialogOpen(!isDialogOpen);
    if (!isDialogOpen) {
      setValue({
        email: JSON.parse(userDetailData[0]).getUser.email,
        name: JSON.parse(userDetailData[0]).getUser.name,
        nickName: JSON.parse(userDetailData[0]).getUser.nickName,
        mobile: JSON.parse(userDetailData[0]).getUser.mobile,
      });
    }
  };

  return (
    <MM05Presenter
      userDetailData={userDetailData && userDetailData.getUserDetail}
      userDatum={userDatum}
      valueEmail={value.email}
      valueName={value.name}
      valueNickName={value.nickName}
      valueMobile={value.mobile}
      _valueChangeHandler={_valueChangeHandler}
      _isDialogOpenToggle={_isDialogOpenToggle}
      userDelete={userDelete}
      userUpdate={userUpdate}
    />
  );
};
export default MM05Container;
