import { gql } from "apollo-boost";

export const GET_USER_DETAIL = gql`
  query getUserDetail($id: String!) {
    getUserDetail(id: $id) {
      _id
      name
      nickName
      mobile
      address
      detailAddress
    }
  }
`;
