import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import { WholeWrapper } from "../../components/CommonComponents";
import { GET_ANONY_DETAIL } from "../MM/MM07/MM07Queries";

const BoardArea = styled.div`
  width: 100%;
  height: 100%;
`;
const Title = styled.h2`
  font-size: 22px;
  font-weight: 700;
`;

export default ({ match }) => {
  const [currentData, setCurrentData] = useState(null);

  const {
    data: anonyDetailDatum,
    loading: anonyDetailLoading,
    refetch: anonyDetailRefetch,
  } = useQuery(GET_ANONY_DETAIL, {
    variables: {
      id: match.params.key,
    },
  });

  useEffect(() => {
    if (anonyDetailDatum && anonyDetailDatum.getAnonyDetail) {
      let tempData = anonyDetailDatum.getAnonyDetail;

      console.log(tempData);
      const desc = document.getElementById("anony_description-js");

      if (desc !== null) {
        desc.innerHTML = tempData.description;
        setCurrentData(tempData);
      }
    }
  }, [anonyDetailDatum]);

  useEffect(() => {
    anonyDetailRefetch();
  }, []);

  return (
    <WholeWrapper>
      <BoardArea></BoardArea>
    </WholeWrapper>
  );
};
