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

export const GET_ALL_NEWSES = gql`
  query getAllNewses {
    getAllNewses {
      _id
      title
      description
    }
  }
`;
