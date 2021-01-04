import { gql } from "apollo-boost";

export const GET_POPULAR_BOARD = gql`
  query getPopularBoard(
    $searchValue: String!
    $limit: Int!
    $currentPage: Int!
  ) {
    getPopularBoard(
      searchValue: $searchValue
      limit: $limit
      currentPage: $currentPage
    ) {
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

export const GET_ALL_FREES = gql`
  query getFreeBoard {
    getFreeBoard {
      _id
      title
      description
    }
  }
`;
