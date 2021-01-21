import React from "react";
import MM04Presenter from "./MM04Presenter";
import useInput from "../../../hooks/useInput";
import { REGIST_USER } from "./MM04Queries";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MM04Container = ({ history }) => {
  ///////////////////// - VARIABLE - ////////////////////////

  ///////////////////// - USE STATE - ////////////////////////
  const newName = useInput("");
  const newEmail = useInput("");
  const newNickName = useInput("");
  const newMobile = useInput("");
  const newZoneCode = useInput("");
  const newAddress = useInput("");
  const newDetailAddress = useInput("");

  ///////////////////// - USE REF - ////////////////////////

  ///////////////////// - USE CONTEXT - ////////////////////////

  ///////////////////// - USE QUERY - ////////////////////////

  ///////////////////// - USE MUTATION - ////////////////////////
  const [registUserMutation] = useMutation(REGIST_USER);
  ///////////////////// - USE EFFECT - ////////////////////////

  ///////////////////// - USE HANDLER - /////////////////////////

  const moveLinkHandler = (link) => {
    history.push(link);
  };

  const registUserHandler = async () => {
    if (!newName.value || newName.value.trim() === "") {
      toast.info("이름은 필수 입력사항 입니다.");

      return;
    }

    if (!newEmail.value || newEmail.value.trim() === "") {
      toast.info("이메일은 필수 입력사항 입니다.");

      return;
    }

    if (!newNickName.value || newNickName.value.trim() === "") {
      toast.info("닉네임은 필수 입력사항 입니다.");

      return;
    }

    if (!newMobile.value || newMobile.value.trim() === "") {
      toast.info("전화번호는 필수 입력사항 입니다.");

      return;
    }

    if (!newZoneCode.value || newZoneCode.value.trim() === "") {
      toast.info("주소는 필수 입력사항 입니다.");

      return;
    }

    const { data } = await registUserMutation({
      variables: {
        name: newName.value,
        email: newEmail.value,
        nickName: newNickName.value,
        mobile: newMobile.value,
        zoneCode: newZoneCode.value,
        address: newAddress.value,
        detailAddress: newDetailAddress.value || `-`,
      },
    })
      .then(toast.info("회원가입 성공!"))
      .then(moveLinkHandler("/signin"));
  };

  const searchPostHander = () => {
    new daum.Postcode({
      oncomplete: function (data) {
        newZoneCode.setValue(data.zonecode);
        newAddress.setValue(data.address);
      },
    }).open();
  };
  return (
    <MM04Presenter
      newName={newName}
      newEmail={newEmail}
      newNickName={newNickName}
      newMobile={newMobile}
      newZoneCode={newZoneCode}
      newAddress={newAddress}
      newDetailAddress={newDetailAddress}
      registUserHandler={registUserHandler}
      searchPostHander={searchPostHander}
    />
  );
};

export default MM04Container;
