import { gql } from "apollo-boost";

export const GET_USER_DETAIL = gql`
  query getUserDetail($email: String!) {
    getUserDetail(email: $email) {
      _id
      email
      nickName
      name
      mobile
      address
      detailAddress
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $id: String!
    $email: String!
    $name: String!
    $nickName: String!
    $mobile: String!
    $address: String!
    $detailAddress: String!
  ) {
    updateUser(
      id: $id
      email: $email
      name: $name
      nickName: $nickName
      mobile: $mobile
      address: $address
      detailAddress: $detailAddress
    )
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: String!) {
    deleteUser(id: $id)
  }
`;
