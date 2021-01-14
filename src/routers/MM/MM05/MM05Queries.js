import { gql } from "apollo-boost";

export const GET_USER_DETAIL = gql`
  query getUserDetail($email: String!) {
    getUserDetail(email: $email) {
      email
      nickName
      name
      mobile
      address
      detailAddress
    }
  }
`;
