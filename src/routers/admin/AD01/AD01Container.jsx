import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "react-apollo-hooks";
import AD01Presenter from "./AD01Presenter";
import {
  GET_POPULAR_BOARD,
  GET_ALL_NEWSES,
  GET_ALL_FREES,
  GET_ALL_ANONYMOUS,
  GET_ALL_TIPS,
  UPDATE_FREE,
  DELETE_USER,
  UPDATE_USER,
  DELETE_FREE,
  GET_FREE_DETAIL,
} from "./AD01Queries";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const AD01Container = ({ match }) => {
  ////////////////////-USE STATE-//////////////////////////
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const [tab, setTab] = useState(0);
  const [value, setValue] = useState({
    title: "",
    desc: "",
  });

  ///////////////////////-USE QUERY -////////////////////////
  const {
    data: popularDatum,
    loading: popularLoading,
    refetch: popularRefetch,
  } = useQuery(GET_POPULAR_BOARD);

  const {
    data: newsDatum,
    loading: newsLoading,
    refetch: newsRefetch,
  } = useQuery(GET_ALL_NEWSES);

  const {
    data: freeDatum,
    loading: freeLoading,
    refetch: freeRefetch,
  } = useQuery(GET_ALL_FREES);

  const {
    data: freeDetailData,
    loading: freeDetailLoading,
    refetch: freeDetailRefetch,
  } = useQuery(GET_FREE_DETAIL, {
    variables: {
      id: match.params.key,
    },
  });

  const {
    data: anonyDatum,
    loading: anonyLoading,
    refetch: anonyRefetch,
  } = useQuery(GET_ALL_ANONYMOUS);

  const {
    data: tipsDatum,
    loading: tipsLoading,
    refetch: tipsRefetch,
  } = useQuery(GET_ALL_TIPS);

  ///////////////-USE MUTATION-///////////////////

  const [createNews] = useMutation();
  const [deleteNews] = useMutation();
  const [updateNews] = useMutation();
  const [updateUser] = useMutation(UPDATE_USER);
  const [deleteUser] = useMutation(DELETE_USER);
  const [deleteAnony] = useMutation();

  const [updateFreeBoard] = useMutation(UPDATE_FREE);
  const [deleteFreeBoard] = useMutation(DELETE_FREE);

  const updateFree = async () => {
    const { data } = await updateFreeBoard({
      variables: {
        id: freeDetailData && freeDetailData.getFreeDetail._id,
        title: value.title,
        description: value.desc,
      },
    });

    if (data.updateFree) {
      toast.info("게시글이 수정되었습니다");
      history.push("/");
      setValue("");
      _isDialogOpenToggle();
    } else {
      toast.error("다시 시도해주세요");
    }
  };

  const _isDialogOpenToggle = () => {
    if (!isDialogOpen) {
      setValue({ title: currentData.title, desc: currentData.description });
    }
    setIsDialogOpen(!isDialogOpen);
  };

  const _valueChangeHandler = (event) => {
    const nextState = { ...value };

    nextState[event.target.name] = event.target.value;

    setValue(nextState);
  };

  const boardDeleteHandler = (_id) => {
    confirmAlert({
      title: "DELETE FREE",
      message: "삭제하시겠습니까?",
      buttons: [
        {
          label: "취소",
          onClick: () => {
            return false;
          },
        },
        {
          label: "확인",
          onClick: () => freeDeleteHandlerAfter(_id),
        },
      ],
    });
  };

  const freeDeleteHandlerAfter = async (_id) => {
    const { data } = await deleteFreeBoard({
      variables: {
        id: currentData._id,
      },
    });

    if (data.deleteFree) {
      toast.info("DELETE FREE!");
      history.push("/freeBoard");
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
    }
  };

  /////////////////-USE EFFECT-////////////////////

  useEffect(() => {
    popularRefetch();
    newsRefetch();
    freeRefetch();
    anonyRefetch();
    tipsRefetch();
  }, [
    GET_POPULAR_BOARD,
    GET_ALL_NEWSES,
    GET_ALL_FREES,
    GET_ALL_ANONYMOUS,
    GET_ALL_TIPS,
  ]);

  const changeTabHandler = (tab) => {
    setTab(tab);
  };

  return (
    <AD01Presenter
      popularDatum={popularDatum && popularDatum.getPopularBoard}
      newsDatum={newsDatum && newsDatum.getAllNewses}
      freeDatum={freeDatum && freeDatum.getFreeBoard}
      anonyDatum={anonyDatum && anonyDatum.getAllAnonymousBoard}
      tipsDatum={tipsDatum && tipsDatum.getAllTips}
      changeTabHandler={changeTabHandler}
      tab={tab}
      isDialogOpen={isDialogOpen}
      _isDialogOpenToggle={_isDialogOpenToggle}
      _valueChangeHandler={_valueChangeHandler}
      boardDeleteHandler={boardDeleteHandler}
      valueTitle={value.title}
      valueDesc={value.desc}
      updateFree={updateFree}
    />
  );
};

export default AD01Container;
