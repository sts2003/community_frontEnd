import { gql } from "apollo-boost";

export const GET_ALL_ANONYMOUS = gql`
  query getAllAnonymousBoard {
    getAllAnonymousBoard {
      _id
      title
    }
  }
`;

export const GET_ANONY_DETAIL = gql`
  query getAnonyDetail($id: String!) {
    getAnonyDetail(id: $id) {
      _id
      title
      description
    }
  }
`;
