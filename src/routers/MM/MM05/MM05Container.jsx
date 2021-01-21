import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-apollo-hooks";
import MM05Presenter from "./MM05Presenter";
import { GET_USER_DETAIL, DELETE_USER, UPDATE_USER } from "./MM05Queries";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const MM05Container = ({ history }) => {
  ///////////////////// - VARIABLE - ////////////////////////

  ///////////////////// - USE STATE - ////////////////////////
  // const [currentData, setCurrentData] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const userDatum = useState(window.sessionStorage.getItem("login"));
  const [value, setValue] = useState({
    email: "",
    name: "",
    nickName: "",
    mobile: "",
    address: "",
    detailAddress: "",
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

  const userId = JSON.parse(userDatum[0]).getUser._id;
  const userDelete = async () => {
    if (userId === userDetailData.getUserDetail._id) {
      confirmAlert({
        title: "DELETE USER",
        message: "삭제하시겠습니까 ?",
        buttons: [
          {
            label: "취소",
            onClick: () => {
              return false;
            },
          },
          {
            label: "확인",
            onClick: () => deleteUserHandler(userId),
          },
        ],
      });
    }
  };
  const deleteUserHandler = async (userId) => {
    const { data } = await deleteUserMutation({
      variables: {
        id: userId,
      },
    });

    if (data.deleteUser) {
      toast.info("성공적으로 처리 되었습니다.");
      window.sessionStorage.removeItem("login");
      history.push("/");
    } else {
      toast.error("잠시후 다시 시도해 주세요.");
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
          address: value.address,
          detailAddress: value.detailAddress,
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
        email: JSON.parse(userDatum[0]).getUser.email,
        name: JSON.parse(userDatum[0]).getUser.name,
        nickName: JSON.parse(userDatum[0]).getUser.nickName,
        mobile: JSON.parse(userDatum[0]).getUser.mobile,
        address: JSON.parse(userDatum[0]).getUser.address,
        detailAddress: JSON.parse(userDatum[0]).getUser.detailAddress,
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
      valueAddress={value.address}
      valueDetailAddress={value.detailAddress}
      _valueChangeHandler={_valueChangeHandler}
      _isDialogOpenToggle={_isDialogOpenToggle}
      isDialogOpen={isDialogOpen}
      userDelete={userDelete}
      userUpdate={userUpdate}
    />
  );
};
export default MM05Container;
