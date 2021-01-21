import { gql } from "apollo-boost";

export const GET_POPULAR_BOARD = gql`
  query getPopularBoard {
    getPopularBoard {
      _id
      title
      description
    }
  }
`;

export const GET_ALL_FREES = gql`
  query getFreeBoard {
    getFreeBoard {
      _id
      title
      description
    }
  }
`;

export const GET_ALL_NEWSES = gql`
  query getAllNewses {
    getAllNewses {
      _id
      title
      description
    }
  }
`;

export const GET_ALL_ANONYMOUS = gql`
  query getAllAnonymousBoard {
    getAllAnonymousBoard {
      _id
      title
      description
    }
  }
`;

export const GET_ALL_TIPS = gql`
  query getAllTips {
    getAllTips {
      _id
      title
      description
    }
  }
`;
export const UPDATE_FREE = gql`
  mutation updateFree($id: String!, $title: String!, $description: String!) {
    updateFree(id: $id, title: $title, description: $description)
  }
`;

export const DELETE_FREE = gql`
  mutation deleteFree($id: String!) {
    deleteFree(id: $id)
  }
`;

export const GET_FREE_DETAIL = gql`
  query getFreeDetail($id: String!) {
    getFreeDetail(id: $id) {
      _id
      title
      description
      createdAt
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
